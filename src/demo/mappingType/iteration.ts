interface IProps {
  name: string;
  age: number;
  highSchool: string;
  university: string;
}

// IPropsKey类型为
// type IPropsKey = {
//  name: boolean;
//  age: boolean;
//  highSchool: boolean;
//  university: boolean;
//  }

//适用于类型重写
type IPropsKey = { [K in keyof IProps]: boolean };