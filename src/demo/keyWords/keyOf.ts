/* keyof 接受一个对象类型为参数，并返回该对象所有的key值组成联合类型。 */

interface IProps {
	name: string;
	age: number;
	gender: string;
}

type Keys = keyof IProps;

/* example */
// 函数接受两个泛型参数
// T 代表object的类型，同时T需要满足约束是一个对象
// K 代表第二个参数K的类型，同时K需要满足约束keyof T （keyof T 代表object中所有key组成的联合类型）
// 自然，我们在函数内部访问obj[key]就不会提示错误了
function getValueFromKey<T extends object, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

//typeof 类型守卫
function printAll(strs: string | string[] | null) {
	if (typeof strs === 'object') {
		//类型缩小要注意缩小范围是否符合
		//@ts-ignore
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === 'string') {
		console.log(strs);
	} else {
		// 做点事
	}
}
