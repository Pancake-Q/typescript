enum ShapeKind {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
let c: Circle = {
  kind: ShapeKind.Square,
  // Ⓧ 类型 'ShapeKind.Square' 不能被分配给类型 'ShapeKind.Circle'
  radius: 100,
};
