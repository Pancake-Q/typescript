let myName: any;

myName = 1;

myName();

let b!: unknown;
let c!: any;

// 任何类型值都可以赋给any、unknown
b = 1;
c = 1;

// callback函数接受一个类型为number的参数
function callback(val: number): void {}

// 调用callback传入aaa（any）类型 correct
callback(c);

callback(b);
