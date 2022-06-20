class MyClass {
  name = 'MyClass';
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: 'obj',
  getName: c.getName,
};
// 输出 "obj", 而不是 "MyClass"
console.log(obj.getName());

class MyClass {
  name = 'MyClass';
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// 输出 "MyClass"
console.log(g());

/**
 * TypeScript检查调用带有this 参数的函数，是否在正确的上下文中进行。我们可以不使用箭头函数，而
 * 是在方法定义中添加一个this 参数，以静态地确保方法被正确调用。
 * JavaScript调用者仍然可能在不知不觉中错误地使用类方法
 * 每个类定义只有一个函数被分配，而不是每个类实例一个函数
 * 基类方法定义仍然可以通过 super 调用。
 */
class MyClass {
  name = 'MyClass';
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// 正确
c.getName();
// 错误
const g = c.getName;
console.log(g());

class Box {
  contents: string = '';
  // (method) Box.set(value: string): this
  set(value: string) {
    this.contents = value;
    return this;
  }
}
class Box {
  content: string = '';
  sameAs(other: this) {
    return other.content === this.content;
  }
}
const box = new Box();
console.log(box.sameAs(box));
class Box {
  content: string = '';
  sameAs(other: this) {
    return other.content === this.content;
  }
}
class DerivedBox extends Box {
  otherContent: string = '?';
}
const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);
