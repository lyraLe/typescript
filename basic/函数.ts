// 1.函数声明
// 指定参数类型为string，返回值类型string
function fn(name: string):string {
  return 'hello' + name;
}
// 当不指定参数类型时，会暗示类型为any类型。此时会给出提示，希望可以指定具体的类型。
// 会出现该提示是因为tsconfig.json中默认noImplicitAny: true
// 如果修改noImplicitAny: false， 该提示会不再出现
function foo(name) {//Parameter 'name' implicitly has an 'any' type

}

// 2. 函数定义-函数表达式
// 定义一个类型，用来约束函数表达式
type barType = (x:string) => void;
let bar:barType = function(name: string):void {

}
// 3. 可选参数
// age参数可有可无
function print(name: string, age?: number):void {
}
print('lyra');
print('lyra', 18);

// 4. 参数默认值
function ajax(url: string, method:string='GET'):void {
  console.log(url, method); //'/user' 'GET
}
ajax('/user')

// 5. 剩余参数
// 当参数数量不固定时
function sum(...numbers:Array<number>):void {
  console.log(numbers)
}
sum(1,2,4); //[1,2,4]
sum(1,2,3,4); // [1,2,3,4]

// 6. 重载-overload
// 在Java中，重载指的是同名函数，但是定义的参数个数或者类型不同。
// 在TS中，指的是为同一个函数提供多个函数定义，限制函数实现的参数等。
const obj = {name: 'a', age: 10};
function attr(val: string):void; // 函数定义；后面只能跟函数定义或者函数实现
function attr(val: number):void; // 函数定义
function attr(val: any):void { //函数实现
  if(typeof val === 'string') {
    obj.name = val;
  } else if(typeof val === 'number') {
    obj.age = val;
  }
}
attr('lyra');
attr(20);
attr(true); //！报错！ 根据上面，参数受限于函数定义的参数类型
