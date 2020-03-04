// 1.接口可以约束对象（属性及对应的类型）
interface Rectangle {
  readonly width: number,//该属性必须存在,且只读，不能被赋值
  height?: number,// 该属性可有可无
  [x: string]: any //对象的属性不确定个数
}
let myRec:Rectangle = {
  width: 10,
  age: 10,
  gender: 'female'
}
// 2. 接口可以约束数组
interface MyArray{
  [x: number]: any
}
let arr: MyArray = [1,2];

// 3. 接口约束类的实现方法
// 接口里面的方法都是抽象方法

interface Animal {
  eat(): void;
  run(): void;
}
interface Person{
  speak(): void;
}

class Tom implements Animal,Person {
  eat() { }
  run() { }
  speak(){ }
}
// 接口可以继承
interface Bird extends Animal{
  fly():void;
}
// 要实现接口本身的抽象方法，还要实现继承的抽象方法
class Tommy implements Bird {
  eat() {}
  run() {}
  fly(){}
}

// 接口可以约束使用的类
interface UserInterface {
  new(name: string): User; // 指定构造函数必须传参
  age: number //类上的属性，即静态属性
}
class User {
  constructor(public name: string){} //public也可以不存在
  static age = 10;
  /*
    使用public后，相当于
    name: string;
    constructor(name: string) {
      this.name: name;
    }
  */
}
function generateInstance(targetClass: UserInterface, name: string) {
  return new targetClass(name);
}
generateInstance(User, 'lyra');
console.log(generateInstance(User, 'lyra'))

// 4. 接口约束函数
interface DiscountInterface {
  (price:number):number
}
let discount:DiscountInterface = function(price: number):number {
  return price*0.8
}
//当函数参数个数不确定时
interface SumInterface{
  (...args:Array<number>): number
}
let sum = function(...args: number[]):number {
  return args.reduce((a,b) => a+b , 0);
}







export {}
