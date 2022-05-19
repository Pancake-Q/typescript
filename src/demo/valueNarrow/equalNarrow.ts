function example(x: string | number, y: string | boolean) {
	if (x === y) {
		// 现在可以在x,y上调用字符串类型的方法了
		x.toUpperCase();
		y.toLowerCase();
	} else {
		console.log(x);
		console.log(y);
	}
}

function printAll(strs: string | string[] | null) {
	if (strs !== null) {
		if (typeof strs === 'object') {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === 'string') {
			console.log(strs);
		}
	}
}

interface Container {
	value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
	// 从类型中排除了undefined 和 null
	if (container.value != null) {
		console.log(container.value);
	// 现在我们可以安全地乘以“container.value”了
		container.value *= factor;
	}
}
