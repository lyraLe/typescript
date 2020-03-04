/**
 * 1. 在ts开发中，为了使用一些只有js版本的库，可以通过使用类型声明，在ts文件中直接使用库。
 * 2. 类型声明的代码在编译后会被删除，不会影响真正的代码
 */

/**
 * 1. 基本类型声明
 * interface/type可以省略declare，其他类型不可以
 */
declare let name: string;
declare function getName(params: string):void;
declare class  Animal{name: string}
interface Person{
  name: string
}
type User = {
  name: string
}
/**
 * 2. 外部枚举
 */
declare enum Season {
  SPRING,
  SUMMER,
  AUTUMN,
  WINTER
}
let seacons = [
  Season.SPRING,
  Season.SUMMER,
  Season.AUTUMN,
  Season.WINTER
]
// 常量枚举
declare const enum Season2 {
  SPRING,
  SUMMER,
  AUTUMN,
  WINTER
}
/**
 * 3. 声明namespace
 * 主要用于自定义声明含有很多属性的全局变量，如jquery库的$
 */
// $作为对象时
declare namespace $ {
  function ajax(url: string, settings:any):void;
  let name: string;
  namespace fn {
    function extend(object: any):void
  }
}
// 示例
$.ajax('./url', {})
// $作为函数时
declare function $(selector: string): HTMLElement;
// 示例
$('#root')

export{}