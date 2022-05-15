let myName: unknown;

myName = 1;

// ts error: unknown 无法被调用，这被认为是不安全的
myName();

// 使用typeof保护myName类型为function
if (typeof myName === 'function') {
	// 此时myName的类型从unknown变为function
	// 可以正常调用
	myName();
}
// 在不确定函数参数的类型时
// 将函数的参数声明为unknown类型而非any
// TS同样会对于unknown进行类型检测，而any就不会
function resultValueBySome(val: unknown) {
	if (typeof val === 'string') {
		// 此时 val 是string类型
		// do someThing
	} else if (typeof val === 'number') {
		// 此时 val 是number类型
		// do someThing
	}
	// ...
}
