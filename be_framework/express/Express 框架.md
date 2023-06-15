-  express 是一个基于 Node.js 平台的极简、灵活的 WEB 应用开发框架
- 官方网址：  [Express - 基于 Node.js 平台的 web 应用开发框架 - Express 中文文档 | Express 中文网](https://www.expressjs.com.cn/)
-  简单说 express 是一个封装好的工具包，封装了很多功能，便于我们开发 WEB 应用（HTTP 服务）  

## 基本使用
###  express 下载
 express 本身是一个 npm 包，所以可以通过 npm 安装
```shell
npm init
npm i express
```

###  express 初体验
1. 创建 JS 文件，输入如下代码  
```javascript
// 1.导入 express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则
app.get('/home', (req, res) => {
  res.end('hello express server')
})

// 4. 监听端口 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口监听为 3000...')
})

```
 命令行下执行该脚本
```shell
node <文件名>
# 或者
nodemon <文件名>
```
然后就可以通过浏览器访问 http://127.0.0.1:3000/home，获取响应的结果

## Express 路由
###  什么是路由

-  路由确定了应用程序如何响应客户端对特定端点的请求
-  一个路由的组成有请求方法，路径和回调函数

###  路由的使用

- express 中提供了一系列方法，可以很方便的使用路由，使用格式： `app.method(path，callback)`

代码示例：
```javascript
// 导入 express
const express = require('express')
// 创建应用对象
const app = express()

// 创建 get 路由
app.get('/home', (req, res) => {
  res.send('网站首页')
})

// 首页路由
app.get('/', (req, res) => {
  res.send('我才是真正的首页')
})

// 创建 post 路由
app.post('/login', (req, res) => {
  res.send('登录成功')
})

// 匹配所有的请求方法
app.all('/search', (req, res) => {
  res.send('1 秒钟为您找到相关结果约 100,000,000 个')
})

// 自定义 404 路由
app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 监听端口 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口监听为 3000')
})
```

###  获取请求参数

-  express 框架封装了一些 API 来方便获取请求报文中的数据，并且兼容原生 HTTP 模块的获取方式
```javascript
const express = require('express')
const app = express()

// 获取请求的路由规则
app.get('/request', (req, res) => {
  // 1.获取报文的方式与原生 HTTP 获取方式是兼容的
  console.log(req.method)
  console.log(req.url)
  console.log(req.httpVersion)
  console.log(req.headers)

  // 2.express 独有的获取报文的方式
  // 获取查询字符串
  console.log(req.query) // 『相对重要』

  // 获取指定的请求头
  console.log(req.get('host'))
  res.send('请求报文的获取')
})

// 启动服务
app.listen(3000, () => {
  console.log('启动成功....')
})
```

###  获取路由参数

-  路由参数指的是 URL 路径中的参数（数据）
```javascript
app.get('/:id.html', (req, res) => {
  res.send('商品详情, 商品 id 为' + req.params.id)
})
```

##  express 响应设置

-  express 框架封装了一些 API 来方便给客户端响应数据，并且兼容原生 HTTP 模块的获取方式
```javascript
//获取请求的路由规则
app.get('/response', (req, res) => {
  // 1.express 中设置响应的方式兼容 HTTP 模块的方式
  res.statusCode = 404
  res.statusMessage = 'xxx'
  res.setHeader('abc', 'xyz')
  res.write('响应体')
  res.end('xxx')

  // 2.express 的响应方法
  res.status(500) //设 置响应状态码
  res.set('xxx', 'yyy') // 设置响应头
  res.send('中文响应不乱码') //设 置响应体

  // 连贯操作
  res.status(404).set('xxx', 'yyy').send('你好朋友')

  // 3.其他响应
  res.redirect('http://atguigu.com') // 重定向
  res.download('./package.json') //下 载响应
  res.json() // 响应 JSON
  res.sendFile(__dirname + '/home.html') // 响应文件内容，根据文件类型在浏览器预览或下载
})
```


## express 中间件

- 中间件（Middleware）本质是一个`回调函数`，回调接受三个参数
   - 请求对象（request 对象）
   - 响应对象（response 对象）
   - next 函数（在 express 中定义的用于执行下一个中间件的函数）
- 使用中间件可以封装公共操作，简化代码，在里面可更改请求（request）和响应（response）对象，结束请求-响应周期（返回数据），调用栈中的下一个中间件
- Express应用程序本质上是一系列中间件函数的调用
-  中间件的类型
   - 全局中间件 
   - 路由中间件  

如果当前中间件功能没有结束请求-响应周期，则必须调用next()将控制权传递给下一个中间件功能，否则，请求将被挂起。
### 全局中间件

-  每一个请求 到达服务端之后 都会执行全局中间件函数

声明中间件函数：
```javascript
const recordMiddleware = function(request, response, next){
  // 实现功能代码 .....
  // 执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
	next()
}
```
使用中间件函数：
```javascript
app.use(recordMiddleware)
```
 也可以使用声明匿名的多个全局中间件函数
```javascript
app.use(function (request, response, next) {
  console.log('定义第一个中间件')
  next()
})

app.use(function (request, response, next) {
  console.log('定义第二个中间件')
  next()
})
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21596389/1679905173096-684da5ec-16ed-44ae-995a-76e11ece5f1f.png#averageHue=%23f3e9e4&clientId=u5f235fc3-67e0-4&from=paste&height=347&id=u64660649&originHeight=475&originWidth=887&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=104597&status=done&style=none&taskId=u85225c44-a50a-44cd-bf7b-481d1ad64d7&title=&width=647.6000366210938)
 express 允许使用 `app.use()` 定义多个全局中间件

### 路由中间件

-  如果只需要对某一些路由进行功能封装 ，则就需要路由中间件
```javascript
app.get('/路径', `中间件函数`, (request, response) => {})
app.get('/路径', `中间件函数1`, `中间件函数2`, (request, response) => {})
```

### 静态资源中间件

-  express 内置处理静态资源的中间件  
```javascript
const express = require('express')
const app = express()

// 静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录，此目录下都是静态资源
app.use(express.static('./public'))
app.use(express.static('./uploads'))

app.get('/index.html', (request, response) => {
  respsonse.send('首页')
})

// 监听端口
app.listen(3000, () => {
  console.log('3000 端口启动....')
})
```
注意：

- 如果访问的内容经常变化，还是需要设置路由，但是如果路由和静态资源路径冲突，谁写在前面用谁的
-  index.html 文件为默认打开的资源

###  获取请求参数
客户端传递到服务器参数的方法常见的是5种：  

- 方式一：通过 get 请求中的 URL 的 params
- 方式二：通过 get 请求中的URL的 query
- 方式三：通过 post 请求中的 body 的 json 格式（中间件中已经使用过）
- 方式四：通过 post 请求中的 body 的 x-www-form-urlencoded格式（中间件使用过）
- 方式五：通过 post 请求中的 form-data 格式（中间件中使用过）

-  express 可以使用 `body-parser` 包处理请求体

 第一步：安装
```shell
npm i body-parser
```
 第二步：导入 body-parser 包 
```javascript
const bodyParser = require('body-parser');
```
 第三步：获取中间件函数  
```javascript
//处理 querystring 格式的请求体
let urlParser = bodyParser.urlencoded({extended:false}));
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json()
```
 第四步：设置路由中间件，然后使用 request.body 来获取请求体数据
```javascript
app.post('/login', urlParser, (request,response)=>{
  //获取请求体数据
  //console.log(request.body);
  response.send('获取请求体数据');
});
```
也可以使用内置的解析：
```javascript
// 应用一些中间件
app.use(express.json()) // 解析客户端传递过来的 json
// 解析传递过来 urlencoded 的时候, 默认使用的 node 内置 querystring 模块
// { extended: true }: 不再使用内置的 querystring, 而是使用 qs 第三方库
app.use(express.urlencoded({ extended: true })) // 解析客户端传递过来的 urlencoded

const multer = require('multer')
const formdata = multer()

// 解析 formdata
app.post('/login', formdata.any(), (req, res, next) => {
	console.log(req.body)
	res.end('登录成功, 欢迎回来~')
})
```
```javascript
const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
// 1.解析queryString
app.get('/home/list', (req, res, next) => {
	// offset/size
	const queryInfo = req.query
	console.log(queryInfo)

	res.end('data list数据')
})

// 2.解析params参数
app.get('/users/:id', (req, res, next) => {
	const id = req.params.id

	res.end(`获取到${id}的数据~`)
})

// 启动服务器
app.listen(9000, () => {
	console.log('express服务器启动成功~')
})
```

### 应用中间件 – 第三方中间件
如果我们希望将请求日志记录下来，那么可以使用express官网开发的第三方库：morgan
```javascript
// 应用第三方中间件
const writeStream = fs.createWriteStream('./logs/access.log')
app.use(morgan('combined', { stream: writeStream }))
```


### 上传文件中间件 – 添加后缀名
```javascript
const express = require('express')
const multer = require('multer')

const app = express()

// 应用一个express编写第三方的中间件
const upload = multer({
	// dest: './uploads'
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, './uploads')
		},
		filename(req, file, callback) {
			callback(null, Date.now() + '_' + file.originalname)
		},
	}),
})

// 上传单文件
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
	console.log(req.file)
	res.end('文件上传成功~')
})

// 上传多文件
app.post('/photos', upload.array('photos'), (req, res, next) => {
	console.log(req.files)
	res.end('上传多张照片成功~')
})

app.listen(9000, () => {
	console.log('express服务器启动成功~')
})
```

### 服务器返回客户端数据方式
```javascript
const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
app.post('/login', (req, res, next) => {
	// 1.res.end方法(比较少)
	// res.end('登录成功, 欢迎回来~')

	// 2.res.json方法(最多)
	// res.json({
	// 	code: 0,
	// 	message: '欢迎回来~',
	// 	list: [
	// 		{ name: 'iPhone', price: 111 },
	// 		{ name: 'iPad', price: 111 },
	// 		{ name: 'iMac', price: 111 },
	// 		{ name: 'Mac', price: 111 },
	// 	],
	// })

	// 3.res.status方法: 设置http状态码
	res.status(201)
	res.json('创建用户成功~')
})

// 启动服务器
app.listen(9000, () => {
	console.log('express服务器启动成功~')
})
```


### 错误处理
```javascript
const express = require('express')

// 创建app对象
const app = express()

app.use(express.json())

// 编写中间件
app.post('/login', (req, res, next) => {
	// 1.获取登录传入的用户名和密码
	const { username, password } = req.body

	// 2.对用户名和密码进行判断
	if (!username || !password) {
		next(-1001)
	} else if (username !== 'coderwhy' || password !== '123456') {
		next(-1002)
	} else {
		res.json({
			code: 0,
			message: '登录成功, 欢迎回来~',
			token: '323dfafadfa3222',
		})
	}
})

// 错误处理的中间件
app.use((errCode, req, res, next) => {
	const code = errCode
	let message = '未知的错误信息'

	switch (code) {
		case -1001:
			message = '没有输入用户名和密码'
			break
		case -1002:
			message = '输入用户名或密码错误'
			break
	}

	res.json({ code, message })
})

// 启动服务器
app.listen(9000, () => {
	console.log('express服务器启动成功~')
})
```

## Router

-  express 中的 Router 是一个完整的中间件和路由系统，可以看做是一个小型的 app 对象
- 可以使用 Router 对路由进行模块化，更好的管理路由  

### 基本使用
 创建独立的 JS 文件（userRouter.js）  
```javascript
const express = require('express')

// 2.创建路由器对象
const userRouter = express.Router()

// 3.在 router 对象身上添加路由
userRouter.get('/', (req, res, next) => {
	res.json('用户列表数据')
})
userRouter.get('/:id', (req, res, next) => {
	const id = req.params.id
	res.json('某一个用户的数据:' + id)
})
userRouter.post('/', (req, res, next) => {
	res.json('创建用户成功')
})
userRouter.delete('/:id', (req, res, next) => {
	const id = req.params.id
	res.json('删除某一个用户的数据:' + id)
})
userRouter.patch('/:id', (req, res, next) => {
	const id = req.params.id
	res.json('修改某一个用户的数据:' + id)
})

// 4.暴露
module.exports = router
```

 主文件
```javascript
const express = require('express')
const app = express()

// 5.引入子路由文件
const userRouter = require('./routes/userRouter')

// 6.设置和使用中间件
app.use('/users', userRouter)

app.listen(3000, () => {
  console.log('3000 端口启动....')
})
```


##  EJS 模板引擎

-  EJS 是一个高效的 Javascript 的模板引擎，模板引擎是分离用户界面和业务数据的一种技术  
-  官网： [EJS -- Embedded JavaScript templates](https://ejs.co/)   中文站：[EJS -- 嵌入式 JavaScript 模板引擎 | EJS 中文文档](https://ejs.bootcss.com/)

### 基本使用

-  安装：`npm i ejs`

代码示例，命令行下运行：
```javascript
// 1.引入ejs
const ejs = require('ejs');
// 2.定义数据
let person = ['张三','李四','王二麻子'];
// 3.ejs解析模板返回结构
// <%= %> 是ejs解析内容的标记，作用是输出当前表达式的执行结构
let html = ejs.render(‘<%= person.join(",") %>’, {person:person});
// 4.输出结果
console.log(html);
```
   
###  常用语法
 执行JS代码：
```html
<% code %>
```
 输出转义的数据到模板上  
```html
<%= code %>
```
 输出非转义的数据到模板上
```html
<%- code %>
```
