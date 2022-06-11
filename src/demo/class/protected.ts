class Greeter {
  public greet() {
    console.log('Hello, ' + this.getName());
  }
  protected getName() {
    return 'hi';
  }
}
class SpecialGreeter extends Greeter {
  public howdy() {
    // 在此可以访问受保护的成员
    console.log('Howdy, ' + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // 没有问题
g.getName(); // 无权访问
