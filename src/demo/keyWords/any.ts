let myName: any;

myName = 1;

// 这明显是一个bug
myName();

let a!: any;
let b!: unknown;

// 任何类型值都可以赋给any、unknown
a = 1;
b = 1;

// callback函数接受一个类型为number的参数
function callback(val: number): void {}

// 调用callback传入aaa（any）类型 correct
callback(a);

// 调用callback传入b（unknown）类型给 val（number）类型 error
// ts Error: 类型“unknown”的参数不能赋给类型“number”的参数
callback(b);
