// 不需要 "static" class
class MyStaticClass {
  static doSomething() {}
}
// 首选 (备选 1)
function doSomething() {}
// 首选 (备选 2)
const MyHelperObject = {
  dosomething() {},
};
