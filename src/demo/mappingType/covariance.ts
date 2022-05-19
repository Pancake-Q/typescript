let fn1!: (a: string, b: number) => string;
let fn2!: (a: string, b: number) => string | number | boolean;

fn2 = fn1; // correct 
fn1 = fn2 // error: 不可以将 string|number|boolean 赋给 string 类型 
