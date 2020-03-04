// 1. 属性和方法
class Person {
  // strictPropertyInitialization: true
  // 默认是true,即必须给属性赋初值
  // 初始化有两种方式：1）直接赋值 2）在constructor中赋值
  name:string = 'lyra'; //实例属性-直接赋值
  age: number;
  constructor(age:number) {
    this.age = age; //实例属性-构造函数中接受外部传入的参数赋值
  }
  getName() { // 原型链上的方法
    return this.name;
  }
}
// 2.getter/setter
class User {
  myname:string;
  constructor(name:string) {
    this.myname = name;
  }
  get name() { //name是原型链上的属性
    return this.myname;
  }
  set name(val:string) {
    this.myname = val;
  }
}
const user = new User('lyra');
console.log(user.name); // lyra
user.name = 'lyraLee';
console.log(user.name); // lyraLee
console.log(user.hasOwnProperty('name')); // fasle
// 获取实例的原型对象使用Object.getPrototypeOf()
// __proto__是内部的私有属性，拒绝使用
console.log(Object.getPrototypeOf(user).hasOwnProperty('name')); //true


// 3. 访问控制修饰符
// public: 公共属性；可以在类自身，子类，及外部访问；
// protected: 受保护属性；只能在类自身，子类访问；
// private: 私有属性；只能在类自身使用。其他地方都不能使用
class Mother {
  public name:string;
  protected age:number = 18;
  private money:number = 500;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name; // ✅自身可访问public属性
  }
  getAge() {
    return this.age; // ✅自身可访问protected属性
  }
  getMoney() {
    return this.money; // ✅自身可访问private属性
  }
}
class Child extends Mother{
  getName() {
    return this.name; // ✅子类可访问public属性
  }
  getAge() {
    return this.age; // ✅子类可访问protected属性
  }
  getMoney() {
    return this.money; //❌子类不能访问private属性
  }
}
const mother1 = new Mother('Lucy');
console.log(mother1.name); // Lucy ✅外部可访问public属性
console.log(mother1.age); // ❌ 外部不能访问protected属性
console.log(mother1.money); // ❌ 外部不能访问money属性

// 4. 只读属性
class Animal{
  readonly age:number;
  constructor(age:number) {
    this.age = age; //只读属性，可以进行初始化
  }
}
const dog = new Animal(10);
console.log(dog.age); //10
dog.age = 20; //❌因为是只读属性


// 5. 静态属性static
class Book{
  // 相当于Book.author = 'lyra';
  static author = 'lyra';
  // 相当于Book.getAuthor() {}
  static getAuthor() { 
    // this取方法运行时所在的对象，此时this是类本身
    console.log(this.author); // lyra
  }
}
Book.getAuthor() // 'lyra'

