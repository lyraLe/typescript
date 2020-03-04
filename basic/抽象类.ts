// 6. 抽象类/方法-abstract
// 是行为的抽象；公共方法和属性的封装
// 1.抽象类只能被继承，不能被实例（不能使用new命令）
// 2.抽象类中的抽象方法在子类中必须被实现
// 3.抽象类中可以初始化属性或实现方法。
abstract class Animal {
  name:string;
  constructor(name:string) {
    this.name = name;
  }
  run() {
    console.log(`${this.name}会跑`);
  }
  // 抽象方法必须被子类实现;且只能用在抽象类中
  abstract eat(food:string):void;
}

class Cat extends Animal {
  eat(food:string) {
    console.log(`${this.name}吃${food}`)
  }
}

const cat = new Cat('猫');
cat.eat('鱼'); // 猫吃鱼
cat.run(); //猫会跑


