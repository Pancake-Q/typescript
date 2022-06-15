type CreateMutable<Type> = {
  -readonly // 从一个类型的属性中删除 "readonly"属性
  [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
/*
	type UnlockedAccount = {
	id: string;
	name: string;
	}
	*/
type UnlockedAccount = CreateMutable<LockedAccount>;
// 从一个类型的属性中删除 "可选" 属性
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
/*
	type User = {
	id: string;
	name: string;
	age: number;
	}
	*/
type User = Concrete<MaybeUser>;
