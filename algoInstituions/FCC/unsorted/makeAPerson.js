const Person = function (firstAndLast) {
  this.first = firstAndLast.split(" ")[0];
  this.last = firstAndLast.split(" ")[1];

  this.getFirstName = function () {
    return this.first;
  };
  this.getLastName = function () {
    return this.last;
  };
  this.getFullName = function () {
    return `${this.first} ${this.last}`;
  };
  this.setFirstName = function (str) {
    this.first = str;
  };
  this.setLastName = function (str) {
    this.last = str;
  };
  this.setFullName = function (str) {
    this.first = str.split(" ")[0];
    this.last = str.split(" ")[1];
  };
};
const bob = new Person("Bob Ross");
Object.defineProperties(bob, "first", {
  enumerable: false,
});
Object.defineProperties(bob, "last", {
  enumerable: false,
});
// bob.getFullName()
