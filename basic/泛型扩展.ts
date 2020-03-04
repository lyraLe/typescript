class MyArray<T>{
  private list: T[] = [];
  add(element: T):void {
    this.list.push(element);
  }
  getMax(): T {
    let maxValue = this.list[0];
    for(let i=0; i<this.list.length; i++) {
      if(maxValue < this.list[i]) {
        maxValue = this.list[i];
      }
    }
    return maxValue;
  }
}
// 测试用例
const arr = new MyArray<number>();
arr.add(1);
arr.add(2);
arr.add(3);
console.log(arr.getMax()); // 3


/**
 * 泛型接口
 * 1）约束函数
 */
interface Calculator {
  <T>(temp: T): T
}

// 测试用例
let test: Calculator = function(temp) {
  return temp;
}
/**
 * 2) 定义接口的时候使用泛型
 */
interface Cart<T> {
  list: T[]
}
let cart: Cart<number> = {list: [1,2,3]}
/**
 * 多个泛型
 * 用于不使用中间变量交换数据
 * A、B都是自定义变量名
 */

function swap<A,B>(temp: [A, B]): [B, A] {
  return [temp[1], temp[0]];
}

console.log(swap([1, 'a']))

/**
 * 泛型约束
 */
interface LoggerType {
  length: number
}
// 该泛型继承了接口，即该类型必须含有length属性
function logger<T extends LoggerType>(val: T) {
  return val.length;
}
// 测试用例
console.log(logger('hello'));// 5
console.log(logger(true)); //❌ true，布尔类型不具有length属性

/**
 * 泛型别名
 */
// 既可以是含length属性的对象，也可以是数组
type Cart2<T> = {length: T[]} | T[];
let c1:Cart2<number> = {length: [1,2,3]};
// 也可以是
let c2: Cart2<number> = [1,2,3];