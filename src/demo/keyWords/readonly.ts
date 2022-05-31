//案例一
interface SomeType {
  readonly prop: string;
}
function doSomething(obj: SomeType) {
  // 可以读取 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
  // 但不能重新设置值
  obj.prop = 'hello';
}
//案例二
interface Home {
  readonly resident: { name: string; age: number };
}
function visitForBirthday(home: Home) {
  // 我们可以从'home.resident'读取和更新属性。
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
function evict(home: Home) {
  // 但是我们不能写到'home'上的'resident'属性本身。
  home.resident = {
    name: 'Victor the Evictor',
    age: 42,
  };
}
//案例三

interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
let writablePerson: Person = {
  name: 'Person McPersonface',
  age: 42,
};
// 正常工作
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // 打印 '42'
writablePerson.age++;
console.log(readonlyPerson.age); // 打印 '43'
