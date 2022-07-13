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
