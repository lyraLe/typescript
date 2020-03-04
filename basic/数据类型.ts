//1. 基本数据类型：
let myname:string = 'lyra';
let age:number = 18;
let married: boolean = false;
//2. 数组(特定类型的数组),长度不定
let arr:Array<number> = [1,2,3];
let hobbies:string[] = ['football', 'reading'];
//3. 元组（固定长度和类型；每一项的类型都可以不同）
let info:[string, number, boolean] = ['lyra', 18, false];
//4. 普通枚举类型
enum Gender{ 
  BOY,
  GIRL
}
/**
 * 相当于Gender[0] = "BOY"; Gender["BOY"] = 0;
 *      Gender[1] = "GIRL"; Gender["GIRL"] = 1;
 */
let gender1:Gender = Gender.BOY; // 0
let gender2:Gender = Gender.GIRL; // 1
// 5. 常量枚举类型
// 因为是常量，不生成对象，编译阶段就被删除；只能通过属性访问。
const enum Color {
  RED=1,// 指定其实数值
  BLUE,
  YELLOW
}
// 被编译成console.log(1 /* RED */, 2 /* BLUE */, 3 /* YELLOW */)
console.log(Color.RED, Color.BLUE, Color.YELLOW); // 1 2 3

// 6. 联合类型
let temp1:(number|string) = '2';
let temp2:(number|string) = 2;
// 可能是空
let node:(HTMLElement|null) = document.getElementById('root');
// !非空断言操作符：指定其不可能为空
node!.style.color = 'red';

// 7.任意类型any:可以为任意类型
// 1）当数据结构复杂 2）引入第三方库没有类型文件 3）可能发生类型转换
let temp:any = [1,23];

// 8. null和undefined
// 当tsconfig.json中的StrictNullChecks=false时，为其他类型的子类型
let a:number; // StrictNullChecks=false
// a = undefined;
// a = null;
// StrictNullChecks默认为true;此时需要
let b:number|null|undefined;

// 9. void类型：非任何类型
function fn(name:string):void {// 指定返回值是void
  // 当StrictNullChecks=true时
  return undefined; //或者不返回， null会报错
  // 如果想使得return null也可以，则需要设置当StrictNullChecks=false
}

// 10. never类型
// 永远无返回值或者永远访问不到;
//1）
function loop():never { // 用于一直运行不停止的功能：如轮询等
  while(true) {
    // 死循环
  }
}
// 2）
function err():never {
  throw new Error('err');
}
//3）
function test(x:number|string) {
  if(typeof x === 'number') {
    console.log(x); // number
  } else if(typeof x === 'string') {
    console.log(x); // string
  } else {
    console.log(x); //此时x是never类型
  }
}

// 11. 类型推导
let a1 = 10; // ts默认a1是number类型
a1 = 'str'; // 报错！
//想要可以重新赋值
let a2; // 此时默认a2:any
a2 = 10;
a2 = 'str';
// 或者
let a3: any = 10;
a3 = 'str';

//12. 包装对象
/* 
js中有三种包装对象。Number,String,Boolean。
当原始类型的值调用属性或者方法时，js会将原始类型的值自动装箱，即打包成对象。
let x= 'somethings';
x.toLowerCase()
-->内部自动打包成
new String(x).toLowerCase()

*/

// 12. 类型断言
// 强制告诉ts，指定数据的类型
let s:number|string|null|undefined; 
// 通常变量不能在赋值前使用；因为s有undefined类型，不会报错
(s as string).length; //使得遍历可以使用特定类型的方法

// 13.字面量类型
// 将number/string/boolean组合成一个自定义的联合类型
// 类似枚举类型；比枚举类型自由
let n:1|2|'d'|true|[1,2]; //n可以是1,2,'d',true,[1,2]中的任意一个值

export {}