type Fish = {
	name: string;
	swim: () => void;
};
type Bird = {
	name: string;
	fly: () => void;
};
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish | Bird {
	let fish: Fish = {
		name: 'gold fish',
		swim: () => {},
	};
	let bird: Bird = {
		name: 'sparrow',
		fly: () => {},
	};
	return true ? bird : fish;
}
// 这里 pet 的 swim 和 fly 都可以访问了
let pet = getSmallPet();
if (isFish(pet)) {
	pet.swim();
} else {
	pet.fly();
}
