/**
（1）首先创建了一个新的空对象
（2）设置原型，将对象的原型设置为函数的 prototype 对象。
（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
 */

function myNew(constructor, ...args) {
  // 1. 创建一个空的对象
  const obj = {};
  // 2. 继承构造函数的原型
  obj.__proto__ = constructor.prototype;
  // 可直接使用下面的方式： 创建一个空对象，继承构造函数的原型
  // const obj = Object.create(constructor.prototype);
  // 3. 将构造函数的作用域赋给新对象（this指向新对象）
  const result = constructor.apply(obj, args);
  // 如果构造函数返回的是一个对象，则直接返回该对象；否则返回新创建的对象
  return (typeof result === 'object' && result !== null) ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
};

// 使用手写的 myNew 实现
const person = myNew(Person, 'Alice', 25);
person.greet();  // 输出: Hello, I am Alice and I am 25 years old.