/**
 * 基本类型保护
 */

function first(a: number|string|boolean):number {
  if(typeof a === 'number') {
    return a;
  } else if(typeof a === 'string') {
    return a.length;
  } else {
    return 0;
  }
}
/**
 * 类保护
 */
class Animal{
  name: string = '';
}
class Bird extends Animal {
  sing: string = 'song';
}
class Dog extends Animal {
  eat: string = 'bone';
}
function second(animal: Animal) {
  if (animal instanceof Bird) {
    return animal.name;
  } else if(animal instanceof Dog) {
    return animal.eat;
  } else {
    return animal.name;
  }
}
/**
 * null保护
 * 开启了strictNullChecks， 则不能调用变量可能为null的变量上的方法
 * 1. 使用!
 */
function t(str: string|null) {
  return str!.length
}
// 2. 使用 || 
function t1(str: string|null) {
  str = str || '';
  return str.length
}
/**
 * 3. 链判断运算符
 * 目前该运算符还不支持
 */
let a = {b:0};
let c = a?.b; 
// 如果不存在b属性或者a为null；结果返回undefined
/*
if (!a) {
  return undefined
} else {
  return a.b
}
*/

/**
 * 联合类型
 * 1.当两种类型含有共同属性，但是不含共同值时
 */
interface WarningButton {
  text: 'warning',
  color: 'yellow'
}
interface DangerButton {
  text: 'danger',
  do: 'be careful'
}
type Button = WarningButton | DangerButton;
function chooseBtn(button: Button) {
  if(button.text === 'warning') {
    return button.color;
  } else if(button.text === 'danger') {
    return button.do;
  }
}
/**
 * 2. 两种类型有可以区分的不同属性-in运算符
 */
interface WarningBtn {
  text: string,
  color: string
}
interface DangerBtn {
  text: string,
  do: string
}
type Btn = WarningBtn | DangerBtn;
function ChooseBtn(btn: Btn) {
  if ('color' in btn) {
    return btn.color;
  } else if('do' in btn) {
    return btn.do;
  }
}
/**
 * 3. 自定义类型
 * 当既没有同名不同值的属性；又没有可以区分的不同属性时
 * 如：同名属性但未赋值
 */

 interface Bird {
   legs: number
 }
 interface Dog {
   legs: number
 }
 type Animals = Bird | Dog;
 function isBird(x: Animals):x is Bird {
   return x.legs === 2;
 } 
 function diffAni(x: Animals) {
   if(isBird(x)) {
     // to be Bird
   } else {
     // to be  Dog
   }
 }




export {};