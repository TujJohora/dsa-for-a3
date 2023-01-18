const myStack = [];

// insert
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5); // inserted in last

// get
console.log(myStack.pop()); // 5
console.log(myStack);
console.log(myStack[myStack.length - 1]); // top
