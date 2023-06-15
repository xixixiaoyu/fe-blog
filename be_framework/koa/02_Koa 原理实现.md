## 零、Koa 源码目录结构
```shell
.
├── History.md
├── LICENSE
├── Readme.md
├── dist
│   └── koa.mjs
├── lib
│   ├── application.js  # 最核心的模块
│   ├── context.js # 上下文对象
│   ├── request.js # Koa 自己实现的请求对象
│   └── response.js # Koa 自己实现的响应对象
└── package.json
```

## 一、基本结构
使用：
```javascript
const Koa = require('./koa')

const app = new Koa()

app.listen(3000)

```
application.js
```javascript
module.exports = class Application {
  listen(...args) {
    const server = http.createServer((req, res) => {
      res.end('My Koa')
    })
    return server.listen(...args)
  }
}

```
## 二、实现中间件功能

- Koa 会把所有中间件组合成一个大的 Promise
- 当这个 Promise 执行完毕之后，会采用当前的 ctx.body 进行结果响应
- next 前面必须有 await 或者 return next，否则执行顺序达不到预期
- 如果都是同步执行，加不加 await 都无所谓
- 我不知道后续是否有异步逻辑，所以建议写的时候都加上 await next

### 收集中间件
使用方式：
```javascript
const Koa = require('./koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'foo'
})

app.use((ctx, next) => {
  ctx.body = 'Koa'
})

app.listen(3000)

```
application.js
```javascript
const http = require('http')

module.exports = class Application {
  constructor () {
    this.middleware = []
  }

  use(fn) {
    if (typeof fn !== 'function')
      throw new TypeError('middleware must be a function!')
    this.middleware.push(fn)
  }

  listen(...args) {
    const server = http.createServer((req, res) => {
      res.end('My Koa')
    })
    return server.listen(...args)
  }
}

```
### 调用中间件
```javascript
const http = require('http')

module.exports = class Application {
  constructor() {
    this.middleware = [] // 存储用户所有的中间件处理函数
  }

  use(fn) {
    this.middleware.push(fn)
  }

  listen(...args) {
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }

  compose(middleware) {
    return function () { // 可以配置额外参数
      const dispatch = i => {
        if (i >= middleware.length) return Promise.resolve()
        const fn = middleware[i]
        return Promise.resolve(
          fn({}, () => dispatch(i + 1))
        )
      }
      return dispatch(0)
    }
  }

  callback() {
    const fnMiddleware = this.compose(this.middleware)
    const handleRequest = (req, res) => {
      fnMiddleware()
        .then(() => {
          // 处理结束
          res.end('end')
        })
        .catch(err => {
          // 发生异常
          res.end('error')
        })
    }
    return handleRequest
  }
}

```
## 三、处理上下文对象
### 初始化上下文对象
context 上下文对象的使用方式：
```javascript
/**
 * Koa Context
 */


const Koa = require('./koa')

const app = new Koa()

// Koa Context 将 node 的 request 和 response 对象封装到单个对象中，为编写 Web 应用程序和 API 提供了许多有用的方法。
// 每个请求都将创建一个 Context，并在中间件中作为参数引用
app.use((ctx, next) => {
  console.log(ctx) // Context 对象

  console.log(ctx.req) // Node 的 request 对象
  console.log(ctx.res) // Node 的 response 对象
  
  console.log(ctx.request) // Koa 中封装的请求对象
  console.log(ctx.request.header) // 获取请求头对象
  console.log(ctx.request.method) // 获取请求方法
  console.log(ctx.request.url) // 获取请求路径
  console.log(ctx.request.path) // 获取不包含查询字符串的请求路径
  console.log(ctx.request.query) // 获取请求路径中的查询字符串

  // Request 别名
  // 完整列表参见：https://koa.bootcss.com/#request-
  console.log(ctx.header)
  console.log(ctx.method)
  console.log(ctx.url)
  console.log(ctx.path)
  console.log(ctx.query)


  // Koa 中封装的响应对象
  console.log(ctx.response)
  
  // Response 别名
  ctx.status = 200
  ctx.message = 'Success'
  ctx.type = 'plain'
  ctx.body = 'Hello Koa'
  
})

app.listen(3000)

```

context.js
```javascript
const context = {
  
}

module.exports = context

```
request.js
```javascript
const url = require('url')

const request = {
  get url () {
    return this.req.url
  },

  get path () {
    return url.parse(this.req.url).pathname
  },

  get query () {
    return url.parse(this.req.url, true).query
  },

  get method () {
    return this.req.method
  }
}

module.exports = request

```
response.js
```javascript
const response = {}

module.exports = response

```
application.js
```javascript
const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class Application {
  constructor() {
    this.middleware = [] // 保存用户添加的中间件函数

    // 为了防止多个实例共享 Request、Response、Context 导致数据被意外修改，这里重新拷贝一份
    this.request = Object.create(request)
    this.response = Object.create(response)
    this.context = Object.create(context)
  }

  listen(...args) {
    const server = http.createServer(this.callback())
    server.listen(...args)
  }

  use(fn) {
    this.middleware.push(fn)
  }

  // 异步递归遍历调用中间件处理函数
  compose(middleware) {
    return function (context) {
      const dispatch = index => {
        if (index >= middleware.length) return Promise.resolve()
        const fn = middleware[index]
        return Promise.resolve(
          // TODO: 上下文对象
          fn(context, () => dispatch(index + 1)) // 这是 next 函数
        )
      }

      // 返回第 1 个中间件处理函数
      return dispatch(0)
    }
  }

  createContext(req, res) {
    // 为了避免请求之间 context 数据交叉污染，这里为每个请求单独创建 context 请求对象
    const context = Object.create(this.context)
    const request = Object.create(this.request)
    const response = Object.create(this.response)

    context.app = request.app = response.app = this
    context.req = request.req = response.req = req // 原生的请求对象
    context.res = request.res = response.res = res // 原生的响应对象
    request.ctx = response.ctx = context // 在 Request 和 Response 中也可以拿到 context 上下文对象
    request.response = response // Request 中也可以拿到 Response
    response.request = request // Response 中也可以拿到 Request
    context.originalUrl = request.originalUrl = req.url // 没有经过任何处理的请求路径
    context.state = {} // 初始化 state 数据对象，用于给模板视图提供数据

    return context
  }

  callback() {
    const fnMiddleware = this.compose(this.middleware)
    const handleRequest = (req, res) => {
      // 1、创建上下文请求对象
      const context = this.createContext(req, res)

      // 2、传入上下文对象执行中间件栈
      fnMiddleware(context)
        .then(() => {
          console.log('end')
          res.end('My Koa')
        })
        .catch(err => {
          res.end(err.message)
        })
    }

    return handleRequest
  }
}

module.exports = Application

```
### 处理上下文对象中的别名
## 四、处理 ctx.body
### 保存 body 数据
### 发送 body 数据
### 更灵活的 body 数据

