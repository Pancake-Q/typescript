/**
 *
 * @param numUsersOnline
 * @returns
 */
function getUsersOnlineMessage(numUsersOnline: number) {
	//if 收缩类型 Boolean收缩
	//0 NaN "" （空字符串）0n（ bigint 零的版本）null undefined
	if (numUsersOnline) {
		return `现在共有 ${numUsersOnline} 人在线!`;
	}
	return '现在没有人在线. :(';
}

const i2 = Boolean('hello'); // type: boolean, value: true
const i = !!'world'; // type: true, value: true

function printAll1(strs: string | string[] | null) {
	if (strs && typeof strs === 'object') {
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === 'string') {
		console.log(strs);
	}
}

//收缩类型错误示例
function printAll2(strs: string | string[] | null) {
	// !我们可能不再正确处理空字符串的情况。
	if (strs) {
		if (typeof strs === 'object') {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === 'string') {
			console.log(strs);
		}
	}
}
// * 通过布尔否定! 把逻辑从否定分支中过滤掉。
function multiplyAll(
	values: number[] | undefined,
	factor: number
): number[] | undefined {
	if (!values) {
		return values;
	} else {
		return values.map(x => x * factor);
	}
}
