abstract class Base {
  abstract getName(): string;
  printName() {
    console.log('Hello, ' + this.getName());
  }
}
const b = new Base();
class Derived extends Base {
  getName() {
    return 'world';
  }
}
const d = new Derived();
d.printName();
class Person {
  name: string;
  age: number;
}
class Employee {
  name: string;
  age: number;
  salary: number;
}
// 正确
const p: Person = new Employee();
