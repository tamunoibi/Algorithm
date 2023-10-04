/**
 * The question is fill in the object constructor with the following methods bellow
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * 
 * What is an object constructor? 
 * It is function that can be used to construct an object. Example: the function Person is an object constructor. 
 * It is called constructor because it can be used to construct objects
 * as a best practice it is named using capital letter. Person. person woul
 const Person = function(firstAndLast) {
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};
Example:
 const Shape = function(firstAndLast) {
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const rectangle = new Shape();

 */

// Get  First name
const PersonFirstName = function (firstAndLast) {
  /** Example: new Person('Bob Ross');
   *  split is used to get the first name example you pass in: 'Bob Ross'
   * const arr = 'Bob Ross'.split(' ')  // would split it into an array. With two properties It ['Bob', 'Ross']
   * The first index of the array is arr[0] would be the string 'Bob'
   *
   *  */
  let fullName = firstAndLast;

  this.getFirstName = function () {
    const split = fullName.split(' ');
    return split[0];
  };
};
// Get  Last name
const PersonLastName = function (firstAndLast) {
  /** Example: new Person('Bob Ross');
   *  split is used to get the first name example you pass in: 'Bob Ross'
   * const arr = 'Bob Ross'.split(' ')  // would split it into an array. With two properties It ['Bob', 'Ross']
   * The first index of the array is arr[1] would be the string 'Ross'
   *
   *  */
  let fullName = firstAndLast;

  this.getLastName = function () {
    const split = lastName.split(" ");
    return split[1];
  };
};

// Get Full name
const PersonFullName = function (firstAndLast) {
  /** Example: new Person('Bob Ross');
   *  split is used to get the first name example you pass in: 'Bob Ross'
   * const arr = 'Bob Ross'.split(' ')  // would split it into an array. With two properties It ['Bob', 'Ross']
   * The first index of the array is arr[1] would be the string 'Ross'
   *
   *  */
  let fullName = firstAndLast;
  this.getFullName = function () {
    return fullName;
  };
};

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
// bob.getFullName()
