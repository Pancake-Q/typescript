interface IHasLength {
	length: number;
}

function getLength<T extends IHasLength>(arg: T) {
	return arg.length;
}

getLength([1, 2, 3]);
getLength('123');

/* error */
/* getLength(true); */
/* getLength(123); */
