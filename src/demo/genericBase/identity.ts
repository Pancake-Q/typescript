/**
 * Grnerics Base
 * @param arg
 * @returns
 */

function identity0<T>(arg: T): T {
	return arg;
}

const identity1 = <T>(arg: T): T => {
	console.log(arg);
	return arg;
};

const userName = identity0('name');
const id = identity0<number>(1);

/**
 * 箭头函数泛型的6种写法
 */
const foo0 = <T>(x: T): T => x;
const foo1 = <T extends {}>(x: T): T => x;
const foo2 = <T extends Record<string, unknown>>(x: T): T => x;
const foo3: <T>(x: T) => T = x => x;

const foo4 = <T>(arg: T): T => {
	console.log(arg);
	return arg;
};

const a = () => () => {};
const foo5 =
	<T>(Authorized: T): ((currentAuthority: T) => T) =>
	(currentAuthority: T): T => {
		return Authorized;
	};
