function color(value: string) {
  // 这是装饰器工厂，它设置了
  // 返回的装饰器函数
  return function (target) {
    // 这就是装饰器
    // 用 "target" 和 "value"做一些事情...
  };
}
function first() {
  console.log('first(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): called');
  };
}
function second() {
  console.log('second(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('second(): called');
  };
}
class ExampleClass {
  @first()
  @second()
  method() {}
}
