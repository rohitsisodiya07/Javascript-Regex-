// 11. What is this keyword inside an object?
// = Inside Object, this refers to the object that call the method.

let user = {
  name: "Rohit",
  age: 22,
  showName() {
    console.log(`My Name is ${this.name} `);
  },
};

user.showName()