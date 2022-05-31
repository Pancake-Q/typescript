const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];
function doStuff(values: readonly string[]) {
  // 我们可以从 'values' 读数据...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
  // 但我们不能改变 'vulues' 的值。
  values.push('hello!');
}
