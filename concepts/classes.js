class Person {
  constructor(userName) {
    this._userName = userName;
  }
  get userName() {
    return _userName;
  }
  set userName(newUserName) {
    this._userName = newUserName;
  }
}
class BlackPerson extends Person {
  constructor(age, userName) {
    super(userName);
    this.age = age;
  }
  sayHi() {
    console.log("Hi, beautiful");
  }
}

const person = new BlackPerson(2, "Prince");
console.log(person._userName); //Prince

person._userName = "Ib";
console.log(person._userName); //Ib
