## QUESTION
Fill in the object constructor with the following methods bellow:
`getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), setFullName(fistAndLast)`
The methods that take an argument must accept only one argument and it has to be a string.
This methods must be the only way of interacting with the objects
## Explanation

## Solution
 this.first                 = firstAndLast.split(' ')[0];
 const bob                  = new Person('Bob Ross');
 firstAndLast               = 'Bob Ross' // typeof firstAndLast is string
 firstAndLast.split(' ')    = ['Bob', 'Ross'] // split firstAndLast is an array
 firstAndLast.split(' ')[0] = 'Bob'
 firstAndLast.split(' ')[1] = 'Ross'
 this                       = Person {} // this in an object refers to the instance of the Person constructor
 this.first                 = 'Bob'
 this.last                  = 'Ross'
 this                       = Person {first : 'Bob', last: 'Ross' }


* Object.defineProperties(bob, 'first', {
    enumerable: false
});
This is added because the code fails the test '"Object.keys(bob)length" should return 6. By default all the object methods are enumerable so when they are counted it returns 8. Instead of six the question is  expecting.
writable
configurable
I think enumerable false makes it such that the method can not be counted
## key Features
Object methods used
1. Object.defineProperties()
other object 
1. this
2. new
3. getter and setter methods
