interface IPerson<T> {
	new (...arg: any): T;
}

function getInstance<T>(Clazz: IPerson<T>) {
	return new Clazz();
}
class Person {}

const person = getInstance(Person);
