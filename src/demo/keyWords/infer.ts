type isString<T> = T extends string ? string : number;

// a 的类型为 true
let string: isString<'s'>;

// b 的类型为 false
let number: isString<1>;
