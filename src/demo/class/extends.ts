class Animal {
  move() {
    console.log('Moving along!');
  }
}
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}
const d = new Dog();
// 基类的类方法
d.move();
// 派生的类方法
d.woof(3);
