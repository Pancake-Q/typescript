interface Shape {
	kind: 'circle' | 'square';
	radius?: number;
	sideLength?: number;
}
function handleShape(shape: Shape) {
	// oops!
	if (shape.kind === 'rect') {
		// ...
	}
}

function getArea(shape: Shape) {
	switch (shape.kind) {
		// shape: Circle
		case 'circle':
			return Math.PI * shape.radius ** 2;
		// shape: Square
		case 'square':
			return shape.sideLength ** 2;
	}
}
