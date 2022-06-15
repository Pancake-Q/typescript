type DescribableFunction = {
	description: string;
	(someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
	console.log(fn.description + ' returned ' + fn(6));
}
function fn1() {
	return true;
}
fn1.description = 'balabala...';
doSomething(fn1);

class Ctor {
	s: string;
	constructor(s: string) {
		this.s = s;
	}
}
type SomeConstructor = {
	new (s: string): Ctor;
};
function fn(ctor: SomeConstructor) {
	return new ctor('hello');
}
const f = fn(Ctor);
console.log(f.s);
interface CallOrConstruct {
	new (s: string): Date;
	(n?: number): number;
}
function fn(date: CallOrConstruct) {
	let d = new date('2021-11-20');
	let n = date(100);
}

interface ClockConstructor {
	new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
	tick(): void;
}
function createClock(
	ctor: ClockConstructor,
	hour: number,
	minute: number
): ClockInterface {
	return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
	constructor(h: number, m: number) {}
	tick() {
		console.log('beep beep');
	}
}
class AnalogClock implements ClockInterface {
	constructor(h: number, m: number) {}
	tick() {
		console.log('tick tock');
	}
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
