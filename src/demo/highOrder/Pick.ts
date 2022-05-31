type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};
type User = {
	id: number;
	name: string;
	address: string;
};
type PickedUser = MyPick<User, 'id' | 'name'>;
