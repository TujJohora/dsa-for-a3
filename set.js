const arr = [4, 5, 6, 7, 4, 8, 7];
const mySet = new Set(arr);

console.log([...mySet]);

mySet.add(9);
mySet.add(11);
mySet.delete(8);
console.log(mySet.has(4));
