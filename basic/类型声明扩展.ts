/**
 * 1. 扩展全局变量的局部变量的类型
 * 本质上是扩展目标对象的属性值
 */

export {};
// 1）扩展全局变量
// 当前文件中使用了export关键字，为局部文件，需要在该文件中扩展全局变量
declare global {
  interface String {
    double(): string;
  }
  interface Window {
    myname: string;
  }
}

String.prototype.double = function(){
  return this.toLowerCase() + this;
}
console.log('lee'.double());


window.myname = "hello world"

// 2) 使用命名空间扩展类
// 给类添加属性
class Form {
  username: Form.Item = ""; //Form在此处用作命名空间
  password: Form.Item = "";
}

// 使用declare时，内部不需要export；
// declare已经表明可以被外部使用
declare namespace Form {
  class Item{}
}
// 或者
/*
namespace Form {
  export class Item{}
}
*/
let form: Form = {
  username: "",
  password: ""
}


// 3) 使用命名空间扩展函数
// 给函数添加属性
declare function JQuery(selector: string): HTMLElement;
declare namespace JQuery {
  let name: string;
}
// 4）使用命名空间扩展枚举类型
// 扩展枚举的值
enum Color {
  RED=1,
  BLUE
}
declare namespace Color {
  const GREEN = 3;
  const VIOLET = 4;
}
let color = Color.GREEN;
console.log(color)

/**
 * 2. 合并声明
 * 同一名称的不同类型会自动合并成一个类型
*/
// ⚠️：class既可以作为类型也可以作为值使用；interface只能作为类型使用
interface User {
  name: string
}
interface User {
  age: number
}
let a: User = {name: 'lee', age: 1};

