@sealed
class BugReport {
  type = 'report';
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// example

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}
@reportableClassDecorator
class BugReport {
  type = 'report';
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}
const bug = new BugReport('Needs dark mode');
console.log(bug.title); // 打印 "Needs dark mode"
console.log(bug.type); // 打印 "report"
// 注意，装饰器不会改变TypeScript的类型
// 因此，类型系统对新的属性`reportingURL`是不可知的。
bug.reportingURL;
