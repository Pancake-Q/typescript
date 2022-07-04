const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
// const m: someClass<string>
const m = new someClass('Hello, world');
