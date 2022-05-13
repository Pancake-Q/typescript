// 函数的返回值类型中 通过类型谓词 is 来保护返回值的类型
function isNumber(arg: any): arg is number {
	return typeof arg === 'number';
}

function getTypeByVal(val: any) {
	if (isNumber(val)) {
		// 此时由于isNumber函数返回值根据类型谓词的保护
		// 所以可以断定如果 isNumber 返回true 那么传入的参数 val 一定是 number 类型
		val.toFixed();
	}
}
