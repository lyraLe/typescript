/** 常见的类数组的类型**/
//1. 函数参数类型IArguments
function sum(): void {
  let args:IArguments = arguments;
}
// 2. HTMLCollection
let root = document.getElementById('root');
let children:HTMLCollection = (root as HTMLElement).children;

// 3. NodeList
let childNodes: NodeList = root!.childNodes;


export{}
