let fn1!: (a: string, b: number) => void;
let fn2!: (a: string, b: number, c: boolean) => void;

fn1 = fn2; // TS Error: 不能将fn2的类型赋值给fn1
class Parent {}

// Son继承了Parent 并且比parent多了一个实例属性 name
class Son extends Parent {
	public name: string = '19Qingfeng';
}

// GrandSon继承了Son 在Son的基础上额外多了一个age属性
class Grandson extends Son {
	public age: number = 3;
}

// 分别创建父子实例
const son = new Son();

function someThing(cb: (param: Son) => any) {
	// do some someThing
	// 注意：这里调用函数的时候传入的实参是Son
	cb(Son);
}

someThing((param: Grandson) => param); // error
someThing((param: Parent) => param); // correct
