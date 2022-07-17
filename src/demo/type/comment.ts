//公共类型
/**
 * Partial <Type>
 */
interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};
const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

/**
 * Required <Type> :构建一个由 Type 的所有属性组成的类型，设置为必填。与 Partial 相反
 */
interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 };

/**
 * Readonly <Type> :构建一个类型， Type 的所有属性设置为 readonly ，这意味着构建的类型的属性不能被重新设置值。
 */
interface Todo {
  title: string;
}
const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};
todo.title = 'Hello';

/**
 * Record<Keys, Type>:构建一个对象类型，其属性键是 Keys ，其属性值是 Type 。这个工具可以用来将一个类型的属性映射
 * 到另一个类型
 */
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = 'miffy' | 'boris' | 'mordred';
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};
// const cats: Record<CatName, CatInfo>
cats.boris;

/**
 * Pick<Type, Keys>:通过从 Type 中选取属性集合Keys （属性名或属性名的联合）来构造一个类型。
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>;
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
// const todo: TodoPreview
todo;

/**
 * Omit<Type, Keys>:通过从 Type 中选取所有属性，然后删除 Keys （属性名或属性名的联合）来构造一个类型。
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
type TodoPreview = Omit<Todo, 'description'>;
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};
// const todo: TodoPreview
todo;
type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;
const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};
// const todoInfo: TodoInfo
todoInfo;

/**
 * Extract<Type, Union>:通过从 Type 中提取可分配给 Union 的所有 union 成员，构造一个类型。
 */
// type T0 = "a"
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// type T1 = () => void
type T1 = Extract<string | number | (() => void), Function>;

/**
 * NonNullable:通过从 Type 中排除 null 和undefined 来构造一个类型。
 */
// type T0 = string | number
type T0 = NonNullable<string | number | undefined>;
// type T1 = string[]
type T1 = NonNullable<string[] | null | undefined>;
/**
 * Parameters:从一个函数类型 Type 的参数中使用的类型构建一个元组类型。
 */
declare function f1(arg: { a: number; b: string }): void;
// type T0 = []
type T0 = Parameters<() => string>;
// type T1 = [s: string]
type T1 = Parameters<(s: string) => void>;
// type T2 = [arg: unknown]
type T2 = Parameters<<T>(arg: T) => T>;
/*
 type T3 = [arg: {
 a: number;
 b: string;
 }]
 */
type T3 = Parameters<typeof f1>;
// type T4 = unknown[]
type T4 = Parameters<any>;
// type T5 = never
type T5 = Parameters<never>;
// type T6 = never
type T6 = Parameters<string>;
// type T7 = never
type T7 = Parameters<Function>;

/**
 * ConstructorParameters:从构造函数的类型中构造一个元组或数组类型。它产生一个具有所有参数类型的元组类型（如果 Type
 * 不是一个函数，则为 never 类型）。
 */
// type T0 = [message?: string]
type T0 = ConstructorParameters<ErrorConstructor>;
// type T1 = string[]
type T1 = ConstructorParameters<FunctionConstructor>;
// type T2 = [pattern: string | RegExp, flags?: string]
type T2 = ConstructorParameters<RegExpConstructor>;
// type T3 = unknown[]
type T3 = ConstructorParameters<any>;
// type T4 = never
type T4 = ConstructorParameters<Function>;
/**
 * ReturnType:构建一个由函数 Type 的返回类型组成的类型。
 */
declare function f1(): { a: number; b: string };
// type T0 = string
type T0 = ReturnType<() => string>;
// type T1 = void
type T1 = ReturnType<(s: string) => void>;
// type T2 = unknown
type T2 = ReturnType<<T>() => T>;
// type T3 = number[]
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
/*
 type T4 = {
 a: number;
 b: string;
 }
 */
type T4 = ReturnType<typeof f1>;
// type T5 = any
type T5 = ReturnType<any>;
// type T6 = never
type T6 = ReturnType<never>;
// type T7 = any 报错
type T7 = ReturnType<string>;
// type T8 = any 报错
type T8 = ReturnType<Function>;
/**
 * InstanceType:构建一个由 Type 中构造函数的实例类型组成的类型。
 */
class C {
  x = 0;
  y = 0;
}
// type T0 = C
type T0 = InstanceType<typeof C>;
// type T1 = any
type T1 = InstanceType<any>;
// type T2 = never
type T2 = InstanceType<never>;
// type T3 = any
type T3 = InstanceType<string>;
// type T4 = any
type T4 = InstanceType<Function>;
/**
 * ThisParameterType:提取一个函数类型的this 参数的类型，如果该函数类型没有 this 参数，则为 unknown 。
 */
function toHex(this: Number) {
  return this.toString(16);
}
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
/**
 * OmitThisParameter:移除 Type 的this 参数。如果Type 没有明确声明的this 参数，结果只是Type 。否则，一个没有
 * this 参数的新函数类型将从Type 创建。泛型被擦除，只有最后的重载签名被传播到新的函数类型。。
 */
function toHex(this: Number) {
  return this.toString(16);
}
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
console.log(fiveToHex());
/**
 * ThisType:这个工具并不返回一个转换后的类型。相反，它作为一个上下文的 this 类型的标记。注意，必须启用
 * noImplicitThis 标志才能使用这个工具。
 */
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // 方法中的 'this' 类型是 D & M
};
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}
let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
