//案例一
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim();
	}
	return animal.fly();
}

//案例二
type Fish1 = { swim: () => void };
type Bird1 = { fly: () => void };
type Human1 = { swim?: () => void; fly?: () => void };
function move1(animal: Fish | Bird | Human1) {
	if ('swim' in animal) {
		// animal: Fish | Human1
		animal;
	} else {
		// animal: Bird | Human1
		animal;
	}
}
