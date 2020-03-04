/**
 * 接口的兼容性检查
 */
// 当实际数据的属性包含目标类型的所有属性时，能够兼容
interface Animal{
  username: string,
  age: number
}
interface Person {
  username: string,
  age: number,
  married: boolean
}

let b:Person = {username: 'lee', age: 1, married: false};
function getName(val: Animal) {
  return val.username;
}
// 但是Person类型包含参数对应的Animal中所有属性;
// 可以兼容
getName(b); 

/**
 * 基本类型的兼容性
 */
// 1. 基本类型的兼容性
let all: string|number;
let str: string = "hello world";
all = str;

// 2. 基本类型的兼容性
let a1: {
  toString(): string
};
let a2: string = 'hello';
a1 = a2;

// 类的兼容性
class AnimalNew {
  public name: string = 'lee';
}
class Dog extends AnimalNew{
  public food: string = 'bone';
}
let dog: Dog;
dog= new AnimalNew(); // ❌Animal不包含food属性

let ani: AnimalNew;
ani = new Dog(); // ✅Dog包含Animal类型的属性

/**
 * 函数的兼容性
 * 1， 先检查函数参数；后检查函数的返回值
 */
type sumFn = (a: number, b: number) => number
let sum:sumFn;
let sum1 = function(a: number):number {
  return a;
}
sum = sum1;

/**
 * 2. 参数的可选类型
 */
type addFn = (a: number|string) => void;
let add: addFn;
add = function(b: number) {}; 
/* 
❌Types of parameters 'b' and 'a' are incompatible.
  Type 'string' is not assignable to type 'number'.
*/
add = function(a: number|string|boolean) {}; // ✅

/**
 * 泛型的兼容
 */
interface User<T> {
}
let x:User<number> = {};
let y:User<string> = {};
y = x; //✅

interface Name<T>{
  n: T
}
let n:Name<number> = {n: 1};
let m:Name<string> = {n: '1'};
n = m; // ❌ 不兼容

/**
 * 枚举类型和数值类型互相兼容
 */
enum Colors{
  RED,
  BLUE
}
let c:Colors;
c = 0;
let c1:number;
c1 = Colors.RED;
export{}
