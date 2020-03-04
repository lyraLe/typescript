export {}
/**
 * 1. 交叉类型（intersection type） - &
 * 将多个类型合并成一个大类型
 */
interface Bird {
  name: string,
  fly(): void
}
interface Person {
  age: number,
  talk(): void; 
}
type BirdMan = Bird & Person;
let bm: BirdMan = {name: 'lee', fly() {}, age: 1, talk(){}}

/**
 * 2. 获取变量的类型-typeof 
 */
// 通过变量获取其对应的变量类型
let user = {name: 'lee', age: 1, talk() {}};
type User = typeof user; // 相当于 {name: string, age: number, talk():void}

/**
 * 3. 通过索引访问类型的子类型
 */
type Parent = {
  name: string,
  son: {
    name: string,
    age: number
  }
}
// 注意不能使用.运算符
let son: Parent['son'] = {name: 'lee', age: 1};

/**
 * 4. 限制类型的属性名称-keyof
 */
type Stu  = {
  score: number,
  name: string
}
type StuKey = keyof Stu; // 'score'|'name'
function getStuValue(stu: Stu, key: StuKey) {
  return stu[key]
}
let stu = {score: 90, name: 'lee'};
// ❌ Argument of type '"ddd"' is not assignable to parameter of type '"score" | "name"'.
getStuValue(stu, 'ddd');

/**
 * 5. 映射类型-in+keyof批量定义
 */
type Person1 = {
  name: string,
  age: number,
  gender: boolean
}
//PersonMap是从Person1映射的类型，该类型各属性都变为可选
type PersonMap = {
  [key in keyof Person1]?: Person1[key]
}
let p1:PersonMap = {name: 'lee'};

/**
 * 6. 内置的类型工具                                                                  
 *    其中第一个参数是类型（interface, enum, class, type）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 */
// 1）Partical 
// 将必须项转变为可选项
// 原理 
// type Partival<T> = {[key in keyof T]+?: T[key]};
interface PersonA {
  user: string
}
type NewPersonA = Partial<Person>; // {user?: string}

//2) Required
//   将可选项变为必须项
// 原理 type Required<T> = {[key in keyof T]-?: T[key]}
class PersonB {
  name?: string
}
type NewPersonB = Required<PersonB>;
// 测试用例
let perB: NewPersonB = {name: 'lee'};

//3) Readonly
// 修改所有属性为只读属性
// 原理： type Readonly<T> = {readonly [key in keyof T]: T[key]}
type PersonC = {
  age: number
}
type NewPersonC = Readonly<PersonC>;
let perC: NewPersonC = {age: 10};
perC.age = 12; // ❌

// 4) Pick
// 从大类型中挑选小类型
// 原理：type Pick<T, Key extends keyof T> = {[key in Key]: T[key]}
interface PersonD {
  gender: boolean,
  intersets: "ball" | "sing",
  age: number
}
type NewColor = Pick<PersonD, 'gender'|'age'>;
let newC: NewColor = {gender: true, age: 10};


/**
 * 7. 内置条件类型工具
 * 目标是对多个类型进行操作
 */
// 1. Exclude
// 获取第一个参数相对第二个参数的补集
type E1 = Exclude<string|number|boolean, number>;
let e1: E1 = 'true';
let e2: E1 = true;

// 2. Extract
// 从第一个参数中抽取第二个参数指定的类型
type E2 = Extract<string|boolean|number, number>;
let e21: E2 = 1;

// 3. NonNullable
// 自动排除null/undefined
type E3 = NonNullable<null|undefined|string>;
let e3: E3 = 'qqq';

// 4. ReturnType
// 获取函数的返回值的类型
function test() {
  return {name: 'lee'};
}
type NewType = ReturnType<typeof test>;
let newT:NewType = {name: 'ddd'} ;
// 应用： Redux中

// 5. InstanceType
// 获取类实例的类型
class User1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
type NewUser = InstanceType<typeof User1>;
let newUsr: NewUser = {name: 'ddd'}
