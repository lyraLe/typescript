/**
泛型是指在定义函数，接口或者类的时候，不预先指定具体的类型，而在使用时再指定类型的特性
 */

function createArray<T>(length: number, value: T): T[] {
  let result: Array<T> = [];
  for(let i=0; i<length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<number>(3, 3); // [3,3,3]
createArray<string>(3, 'x'); // ['x', 'x', 'x']