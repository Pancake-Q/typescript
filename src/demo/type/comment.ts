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
