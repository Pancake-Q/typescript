function toArray<X>(xs: Iterable<X>): X[] {
  return [...xs];
}
// for of
let someArray = [1, 'string', false];
for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}
