## 第 1、2 章关于 this
### 默认绑定
默认绑定是**this**最常见的绑定规则。当一个函数独立调用（而不是作为对象的方法调用）时，**this **默认绑定到全局对象（在浏览器中是 **window **对象，nodejs 则是 global 对象），在严格模式（strict mode）下，**this**值为**undefined**。。
```javascript
function exampleFunction() {
  console.log(this);
}

exampleFunction(); // 输出全局对象（浏览器中为 window）

function strictFunction() {
  "use strict";
  console.log(this);
}

strictFunction(); // 输出 undefined
```

### 隐式绑定
当一个函数作为对象的方法调用时，**this**隐式绑定到调用该方法的对象。
```javascript
const obj = {
  value: "I am obj",
  showThis: function() {
    console.log(this);
  }
};

obj.showThis(); // 输出 {value: "I am obj", showThis: ƒ}
```

### 显式绑定
使用 **call**、**apply **和 **bind **方法，可以显式地将 **this **绑定到指定的对象。
_使用 **call **和 **apply **示例：_
```javascript
function showValue() {
  console.log(this.value);
}

const obj1 = {
  value: "I am obj1"
};

const obj2 = {
  value: "I am obj2"
};

showValue.call(obj1); // 输出 "I am obj1"
showValue.apply(obj2); // 输出 "I am obj2"

const boundShowValue = showValue.bind(obj1);
boundShowValue(); // 输出 "I am obj1"
```


### new 绑定
当使用 **new **关键字调用一个构造函数时，**this **被绑定到新创建的对象实例。
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person("John Doe");
console.log(person.name); // 输出 "John Doe"
```

**箭头函数中的this**
箭头函数没有自己的 **this **值。它是外层作用域的 this，这使得在事件处理程序和回调函数中使用箭头函数变得非常方便。
```javascript
const obj = {
  value: "I am obj",
  showThis: function() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
};

obj.showThis(); // 输出 {value: "I am obj", showThis: ƒ}（1秒后）
```


## 第 3 章对象
对象是JavaScript中最重要的数据结构，它们用于存储键值对
### 创建对象
可以使用以下三种方法创建对象：

- 对象字面量（Object Literal）：
```javascript
const obj = {
  key1: "value1",
  key2: "value2"
};
```

- 使用**Object.create()**：
```javascript
const prototypeObj = {
  key1: "value1",
  key2: "value2"
};

const obj = Object.create(prototypeObj);
```

- 使用构造函数：
```javascript
function Obj() {
  this.key1 = "value1";
  this.key2 = "value2";
}

const obj = new Obj();
```


### 属性访问
可以使用点表示法或方括号表示法访问对象属性：
```javascript
const obj = {
  key1: "value1",
  key2: "value2"
};

console.log(obj.key1); // 输出 "value1"
console.log(obj["key2"]); // 输出 "value2"
```

### 属性遍历
可以使用 **for...in **循环遍历对象属性：
```javascript
const obj = {
  key1: "value1",
  key2: "value2"
};

for (const key in obj) {
  console.log(key + ": " + obj[key]);
}
```

### 属性描述符
每个对象属性都具有一组属性描述符，它们定义了属性的特性（如可写、可枚举和可配置）。可以使用 **Object.getOwnPropertyDescriptor() **获取属性描述符，使用 **Object.defineProperty() **修改属性描述符。
_示例：_
```javascript
const obj = {
  key1: "value1"
};

const descriptor = Object.getOwnPropertyDescriptor(obj, "key1");
console.log(descriptor); // 输出 {value: "value1", writable: true, enumerable: true, configurable: true}

Object.defineProperty(obj, "key1", {
  writable: false
});

obj.key1 = "new value";
console.log(obj.key1); // 输出 "value1"（未修改，因为属性不可写）
```

### 原型链
JavaScript对象通过原型链实现继承。每个对象都有一个内部属性 **[[Prototype]]**，它指向该对象的原型。
原型链是一系列原型对象的链接，直到**null**。
_示例：_
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

const person1 = new Person("John Doe");
person1.sayName(); // 输出 "John Doe"

console.log(person1.__proto__ === Person.prototype); // 输出 true
console.log(Person.prototype.__proto__ === Object.prototype); // 输出 true
```


## 第 4 章混合对象“类”
### 类的定义
JavaScript中并没有传统意义上的类，但我们可以使用构造函数和原型链来模拟类的行为。
_示例：_
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

const person1 = new Person("John Doe");
person1.sayName(); // 输出 "John Doe"
```

### 类的继承
使用原型链，我们可以实现类的继承。子类的原型指向父类的实例，从而实现继承。
_示例：_
```javascript
function Employee(name, position) {
  Person.call(this, name); // 继承 Person 的属性
  this.position = position;
}

// 继承 Person 的方法
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sayPosition = function() {
  console.log(this.position);
};

const employee1 = new Employee("Jane Doe", "Engineer");
employee1.sayName(); // 输出 "Jane Doe"
employee1.sayPosition(); // 输出 "Engineer"
```

### 混合模式
混合模式是一种在 JavaScript 中实现多重继承的方法。我们可以使用混合函数将一个对象的属性和方法复制到另一个对象。
_示例：_
```javascript
function mixin(sourceObj, targetObj) {
  for (const key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
}

const Vehicle = {
  engines: 1,
  ignition: function() {
    console.log("Turning on the engine...");
  },
  drive: function() {
    this.ignition();
    console.log("Driving the vehicle...");
  }
};

const Car = {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);
    console.log("Driving the car...");
  }
};

mixin(Vehicle, Car);
console.log(Car.engines); // 输出 1
Car.ignition(); // 输出 "Turning on the engine..."
Car.drive(); // 输出 "Driving the vehicle..." 和 "Driving the car..."
```


## 第 5 章原型
### 原型链
原型链是一种链接多个原型对象的机制，用于实现对象之间的继承。
每个对象都有一个内部属性 **[[Prototype]]**，它指向该对象的原型。当试图访问一个对象的属性时，JavaScript引擎会沿着原型链查找该属性。
_示例：_
```javascript
function Foo() {}
Foo.prototype.bar = "Hello, world!";

const obj = new Foo();

console.log(obj.bar); // 输出 "Hello, world!"
```

### 构造函数
构造函数是用于创建新对象的特殊函数。在JavaScript中，构造函数的原型属性（**prototype**）用于设置新创建对象的原型。
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

const person1 = new Person("John Doe");
person1.sayName(); // 输出 "John Doe"
```

### 实例关系
可以使用 **instanceof **操作符检查一个对象是否是某个构造函数的实例。此外，可以使用 **isPrototypeOf **方法检查一个对象是否出现在另一个对象的原型链中。
```javascript
function Foo() {}
const obj = new Foo();

console.log(obj instanceof Foo); // 输出 true
console.log(Foo.prototype.isPrototypeOf(obj)); // 输出 true
```

### 原型继承
原型继承是 JavaScript 中实现继承的一种方式。子类的原型指向父类的实例，从而继承父类的属性和方法。
_示例：_
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sayBreed = function() {
  console.log(this.breed);
};

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.sayName(); // 输出 "Buddy"
dog1.sayBreed(); // 输出 "Golden Retriever"
```


## 第 6 章行为委托
### 委托理论
是一种不同于类继承的代码复用方式，它依赖于对象之间的关系而不是类和实例，行为委托认为对象之间可以通过委托（即引用）其他对象来实现共享行为。
这种模式避免了类和继承带来的复杂性，而是直接在对象之间建立关系。

### 对象关联
行为委托关注的是在对象之间建立关联。这种关联可以通过原型链实现，让一个对象可以访问另一个对象的属性和方法。
_示例：_
```javascript
const Task = {
  setID: function(ID) {
    this.id = ID;
  },
  outputID: function() {
    console.log(this.id);
  }
};

const XYZ = Object.create(Task);
XYZ.prepareTask = function(ID, Label) {
  this.setID(ID);
  this.label = Label;
};
XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
};

const task = Object.create(XYZ);
task.prepareTask(1, "Create a demo");
task.outputTaskDetails(); // 输出 1 和 "Create a demo"
```

###  从类到委托
通过改变思维方式，从类和继承转向对象关联和行为委托，可以简化代码结构，提高代码复用率。
_示例：_
```javascript
// 使用行为委托代替类继承

const Parent = {
  foo: function() {
    console.log("Hello from Parent!");
  }
};

const Child = Object.create(Parent);
Child.foo(); // 输出 "Hello from Parent!"
```

### 反模式：伪多态
伪多态可能会导致不必要的复杂性，因为它要求在不同级别的对象之间手动维护“多态”关系。使用行为委托可以避免这种反模式。
_示例：_
```javascript
// 使用行为委托代替伪多态

const Controller = {
  makeRequest: function() {
    this.helper.makeRequest();
  }
};

const AjaxController = Object.create(Controller);
AjaxController.helper = {
  makeRequest: function() {
    console.log("Making an AJAX request...");
  }
};

const ProxyController = Object.create(Controller);
ProxyController.helper = {
  makeRequest: function() {
    console.log("Making a request through a proxy...");
  }
};

AjaxController.makeRequest(); // 输出 "Making an AJAX request..."
ProxyController.makeRequest(); // 输出 "Making a request through a proxy..."
```


## 附录A ES6 中的 Class
**class**是ES6引入的一个新语法糖，用于简化原型继承的编写过程
### 类声明
**class **关键字用于声明一个类。类的方法不需要使用 **function **关键字，只需在方法名后跟一个括号即可。类声明支持实例方法、静态方法和getter/setter。
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }

  static greeting() {
    console.log("Hello!");
  }

  get displayName() {
    return `Person: ${this.name}`;
  }

  set displayName(value) {
    this.name = value.split(": ")[1];
  }
}

const person = new Person("John Doe");
person.sayName(); // 输出 "John Doe"
Person.greeting(); // 输出 "Hello!"
console.log(person.displayName); // 输出 "Person: John Doe"
person.displayName = "Person: Jane Doe";
console.log(person.name); // 输出 "Jane Doe"
```


### 类继承
使用 **extends **关键字可以实现类继承。在子类中，可以使用 **super **关键字调用父类的构造函数或方法。
_示例：_
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  sayBreed() {
    console.log(this.breed);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.sayName(); // 输出 "Buddy"
dog.sayBreed(); // 输出 "Golden Retriever"
```

**类表达式**
与函数表达式类似，类也可以使用表达式形式定义。类表达式可以是命名或匿名的。
_示例：_
```javascript
const MyClass = class {
  constructor(value) {
    this.value = value;
  }

  printValue() {
    console.log(this.value);
  }
};

const instance = new MyClass(42);
instance.printValue(); // 输出 42
```
尽管ES6的 **class **提供了更简洁的语法来定义类和实现继承，它仍然基于原型继承。
