//参数属性
class Params {
  constructor(public readonly x: number, protected y: number, private z: number) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
// (property) Params.x: number
console.log(a.x);
console.log(a.z);
