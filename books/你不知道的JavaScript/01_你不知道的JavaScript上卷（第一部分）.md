## 第 1 章作用域是什么
作用域可以简单地理解为一套规则，用于确定在何处以及如何查找变量（标识符）。
如果查找的目的是对变量进行赋值，那么我们将其称为LHS（左手边）引用；如果查找的目的是获取变量的值，我们将其称为RHS（右手边）引用。
在JavaScript中，有三种主要的作用域类型：

1. 全局作用域：在整个程序中都可以访问的变量和函数。在浏览器环境中，全局作用域通常是window对象。
```javascript
var globalVar = "I am a global variable!";

function globalFunction() {
  console.log("I am a global function!");
}
```

2. 函数作用域：在函数内部定义的变量和函数。它们只能在函数内部访问，函数外部无法访问。
```javascript
function exampleFunction() {
  var localVar = "I am a local variable!";
  console.log(localVar); // 输出 "I am a local variable!"
}

exampleFunction();
console.log(localVar); // ReferenceError: localVar is not defined
```

3. 块级作用域：由花括号（{}）包围的代码块。使用 **let **和 **const **关键字定义的变量具有块级作用域。
```javascript
if (true) {
  let blockScopedVar = "I am block scoped!";
  const blockScopedConst = "I am also block scoped!";
  console.log(blockScopedVar); // 输出 "I am block scoped!"
  console.log(blockScopedConst); // 输出 "I am also block scoped!"
}

console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
```
JavaScript引擎在编译阶段会进行作用域的查找，作用域查找从当前作用域开始，向外层作用域逐级查找，直到找到目标标识符或者到达全局作用域。
如果在全局作用域中仍然找不到目标标识符，引擎将抛出一个ReferenceError（对于RHS引用）或TypeError（对于LHS引用）。


## 第 2 章词法作用域
词法作用域（也称为静态作用域）是指作用域在代码编写时就已经确定，而非在运行时确定。JavaScript采用的是词法作用域。词法作用域有两个重要的规则：

1. 变量和函数的作用域取决于它们在源代码中的位置。
2. 嵌套的作用域可以访问外部作用域中的变量和函数，但外部作用域不能访问嵌套作用域中的变量和函数。

让我们通过一些代码示例来详细了解词法作用域：
```javascript
var globalVar = "I am global!";

function outerFunction() {
  var outerVar = "I am outer!";

  function innerFunction() {
    var innerVar = "I am inner!";
    console.log(globalVar, outerVar, innerVar); // 可访问全局作用域和外部函数作用域的变量
  }

  innerFunction();
}

outerFunction();
```
词法作用域的查找规则是由源代码中的嵌套位置决定的。作用域查找会从当前作用域开始，逐级向外部作用域查找，直到找到目标变量，或者到达全局作用域。
与词法作用域相对的是动态作用域。动态作用域是基于函数调用时的执行上下文决定的，而不是代码的嵌套位置。
值得注意的是，JavaScript并不使用动态作用域。然而，JavaScript中的 **this **关键字具有动态作用域的某些特征，因为它是基于函数调用的上下文来确定的。
在词法作用域中，还有一个重要概念叫做“变量提升”（hoisting）。在JavaScript中，变量和函数声明在编译阶段就被提升到了所在作用域的顶部。需要注意的是，只有声明会被提升，赋值操作不会。让我们看一个例子：
```javascript
function hoistingExample() {
  console.log(a); // 输出 undefined，因为变量a的声明被提升，但赋值操作没有
  console.log(b); // ReferenceError: b is not defined，因为let和const声明的变量不会被提升

  var a = 1;
  let b = 2;
}

hoistingExample();
```


## 第 3 章函数作用域和块作用域
### 函数作用域
函数作用域是指在函数内部定义的变量和函数。这些变量和函数只能在函数内部访问，函数外部无法访问。这种封装有助于避免变量名冲突和全局作用域的污染。
```javascript
function exampleFunction() {
  var localVar = "I am a local variable!";
  console.log(localVar); // 输出 "I am a local variable!"
}

exampleFunction();
console.log(localVar); // ReferenceError: localVar is not defined
```

### 块作用域
块作用域是由花括号（{}）包围的代码块。在ES6（ECMAScript 2015）之前，JavaScript没有原生的块级作用域。但是，通过**let**和**const**关键字的引入，现在我们可以创建块级作用域变量。
```javascript
if (true) {
  let blockScopedVar = "I am block scoped!";
  const blockScopedConst = "I am also block scoped!";
  console.log(blockScopedVar); // 输出 "I am block scoped!"
  console.log(blockScopedConst); // 输出 "I am also block scoped!"
}

console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
```
与**var**关键字定义的变量不同，**let**和**const**定义的变量只在其所在的块作用域内可见。这有助于减少变量名冲突和意外的全局变量声明。

### 立即执行函数表达式（IIFE）
在ES6之前，为了实现块级作用域，我们通常使用立即执行函数表达式（IIFE）。I
IFE是一个函数表达式，它在声明后立即执行。通过 IIFE，我们可以创建一个新的函数作用域，从而避免全局作用域的污染。
```javascript
(function() {
  var localVar = "I am in an IIFE!";
  console.log(localVar); // 输出 "I am in an IIFE!"
})();

console.log(localVar); // ReferenceError: localVar is not defined
```
尽管现代JavaScript已经支持块级作用域，但IIFE在某些情况下仍然有用，例如在浏览器中加载多个脚本文件时，为避免全局作用域污染。


## 第 4 章提升
提升是JavaScript引擎在编译阶段处理变量和函数声明的一种机制。在执行阶段开始之前，引擎会将变量和函数声明提升到它们所在作用域的顶部。
注意，提升只影响声明，而不影响赋值操作
### 变量提升
使用**var**关键字声明的变量会被提升。提升过程中，变量会被初始化为**undefined**。
```javascript
console.log(a); // 输出 undefined，因为变量a的声明被提升，但赋值操作没有
var a = 1;
console.log(a); // 输出 1
```

### 函数声明提升
函数声明也会被提升，但与变量提升不同的是，函数提升会同时提升函数的声明和实现。
```javascript
console.log(myFunction); // 输出 [Function: myFunction]
console.log(myFunction()); // 输出 "Hello, world!"

function myFunction() {
  return "Hello, world!";
}
```

### 函数表达式和提升
函数表达式（使用 **var **关键字声明的）会受到变量提升的影响。但是，函数实现不会被提升。
```javascript
console.log(myFunction); // 输出 undefined，因为变量声明被提升，但函数实现和赋值操作没有
console.log(myFunction()); // TypeError: myFunction is not a function

var myFunction = function() {
  return "Hello, world!";
};
```

### let 和 const 声明与提升
使用 **let **和 **const **关键字声明的变量在某种程度上也会被提升（在编译阶段就已经被JavaScript引擎识别并分配到了内存）。然而，它们在提升过程中不会被初始化，直到它们的声明语句被执行。在声明之前访问这些变量会导致 **ReferenceError**。
```javascript
console.log(a); // ReferenceError: a is not defined
let a = 1;
console.log(a); // 输出 1

console.log(b); // ReferenceError: b is not defined
const b = 2;
console.log(b); // 输出 2
```

### 提升的优先级
函数声明和变量声明都会被提升，但函数声明的优先级高于变量声明。因此，在同一个作用域内，如果函数和变量具有相同的名称，函数声明会覆盖变量声明。
```javascript
console.log(typeof myVar); // 输出 "function"
var myVar = 1;
function myVar() {
  console.log("This is a function.");
}
```
在上面的代码示例中，函数声明覆盖了变量声明，所以**typeof myVar**返回**"function"**。
在实际开发中，为了避免提升引起的问题，我们通常建议将变量和函数声明放在作用域的顶部，以清晰地表明它们的存在。同时，在现代JavaScript开发中，推荐使用 **let **和 **const **关键字来声明变量，以减少提升相关的问题，并增加代码的可读性。


## 第 5 章作用域闭包
### 函数作为一等公民
在JavaScript中，函数是一等公民，这意味着函数可以像其他数据类型一样被传递、赋值和返回。这使得我们能够在函数之间传递函数引用，并在其他地方调用这些引用。
```javascript
function sayHello(name) {
  return `Hello, ${name}!`;
}

function greet(sayHelloFn, name) {
  console.log(sayHelloFn(name));
}

greet(sayHello, "Alice"); // 输出 "Hello, Alice!"
```
### 保持对外部作用域的引用
闭包使得一个函数能够继续访问其定义时的作用域，即使这个函数在其他地方被调用。
```javascript
function outer() {
  const outerVar = "I am an outer variable";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const innerFn = outer();
innerFn(); // 输出 "I am an outer variable"
```
在上面的示例中，**inner **函数在 **outer **函数的作用域之外被调用，但仍然能够访问 **outerVar **变量。这就是闭包的一个典型例子。

### 实际应用
#### 私有变量
```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 输出 2
counter.decrement();
console.log(counter.getCount()); // 输出 1

```
在这个示例中，**name**和**privateData**变量在**createPerson**函数的作用域内，因此无法从外部访问。我们通过闭包创建了访问和修改这些变量的公共方法。

#### 函数柯里化
```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3)); // 输出 6
console.log(multiplyBy2(4)); // 输出 8
```
在上面的示例中，**multiply**函数返回一个新函数，该函数通过闭包保持对参数**a**的引用。这使得我们可以创建预先设置了一个参数的乘法函数。

#### 事件监听器和回调函数
闭包经常用于事件监听器和回调函数，以便在触发事件或执行回调时访问外部作用域中的数据。
```javascript
function setupClickHandler(element, id) {
  element.addEventListener("click", function() {
    console.log(`Element with ID ${id} was clicked.`);
  });
}

const button = document.querySelector("#myButton");
setupClickHandler(button, "myButton");
```
在这个示例中，**setupClickHandler**函数接受一个元素和一个ID。它为元素添加了一个click事件监听器，该监听器通过闭包访问 **id **变量。

#### 防抖节流
```javascript
// 节流示例：
function throttle(fn, delay) {
  let lastExecutionTime = 0;

  return function() {
    const now = Date.now();
    if (now - lastExecutionTime >= delay) {
      lastExecutionTime = now;
      return fn.apply(this, arguments);
    }
  };
}

const throttledFunction = throttle(function() {
  console.log("Function executed");
}, 1000);

// 当快速连续调用时，throttledFunction 每隔1秒才会执行一次


// 防抖示例：
function debounce(fn, delay) {
  let timer;

  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

const debouncedFunction = debounce(function() {
  console.log("Function executed");
}, 500);

// 当快速连续调用时，debouncedFunction 只会在停止调用后的500ms后执行一次
```

#### 动态生成函数
闭包可以用于动态生成具有特定行为的函数。例如，根据参数创建具有不同行为的排序函数：
```javascript
function createSortFunction(propertyName) {
  return function(a, b) {
    return a[propertyName] - b[propertyName];
  };
}

const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

persons.sort(createSortFunction("age"));
console.log(persons); // 输出按年龄排序的数组
```


#### 实现惰性求值和缓存
```javascript
function createExpensiveCalculationFunction() {
  let cachedResult;
  
  return function() {
    if (cachedResult === undefined) {
      console.log("Expensive calculation...");
      cachedResult = "Result of expensive calculation";
    }
    
    return cachedResult;
  };
}

const expensiveCalculation = createExpensiveCalculationFunction();
console.log(expensiveCalculation()); // 输出 "Expensive calculation..." 和 "Result of expensive calculation"
console.log(expensiveCalculation()); // 输出 "Result of expensive calculation"
```
我们通过闭包来缓存昂贵的计算结果，以便在多次调用之间节省计算时间。
