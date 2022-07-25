interface Pet {
  name: string;
}
let pet: Pet;
// dog's 推断类型是 { name: string; owner: string; }
let dog = { name: 'Lassie', owner: 'Rudd Weatherwax' };
pet = dog;