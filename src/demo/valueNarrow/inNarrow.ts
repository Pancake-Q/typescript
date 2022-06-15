//案例一
import { Fish, Bird } from '../type';
function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim();
	}
	return animal.fly();
}

//案例二
type Human = { swim?: () => void; fly?: () => void };
function move1(animal: Fish | Bird | Human) {
	if ('swim' in animal) {
		// animal: Fish | Human
		animal;
	} else {
		// animal: Bird | Human
		animal;
	}
}
