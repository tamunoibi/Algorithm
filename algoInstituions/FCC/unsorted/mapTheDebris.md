## Question
Return a new array that transforms the element's average altitude into their orbital periods.

The array would contain objects in the format `{name: name, avgAlt avgAlt}`

The values should be rounded off to the nearest whole number. The body being orbited in Earth.

The radius of the earth is 636.4447 kilometers, and the GM value of the earth is 398600.4418km3s-2
Example:
1. {name: 'sputnik', avgAlt: 35873.5553} becomes {name: 'sputnik', avgAlt: 35873.5553} 

2. [{name: 'iss', avgAlt: 413.6}, {name: 'hubble', avgAlt: 556.7}, {name: 'moon', avgAlt: 378632.553}] becomes [{name: 'iss', orbitalPeriod: orbitalPeriod: 5557}, {name: 'hubble', orbitalPeriod: 5734}, {name: 'moon', orbitalPeriod: 2377399}] 

## Explanation
We are given an array with two properties `name` and `avgAlt`
The name we would still be returned. But we would use the `avgAlt`  to calculate the `orbitalPeriod`
The question already give you two values GM(Gravitational constant) and earthRadius
 const GM = 398600.4418;
 earthRadius = 636.4447;
### Formula for calculating Orbital period is
const orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
You can read more about it online.

Used to round up a number to the nearest even number.
TODO: give examples
Math.Pow()    :
Math.sqrt()   :
Math.PI       :
Math.round()  :

## Solution Using arr.reduce
arr.reduce(function(acc, obj) {}, []);
arr.reduce(), TODO: What does it do?
It returns an array.
we are iterating through all the objects and accessing their average altitude. The earth radius plus the average altitude.
example: 
arr = [{name: 'sputnik', avgAlt: 35873.5553}]
acc = []; // acc means accumulator. It is an empty array the second argument of reduce
obj = {name: 'sputnik', avgAlt: 35873.5553}// we access obj.avgAlt which is35873.5553
* acc.push({name: obj.name, orbitalPeriod: orbPeriod});
The acc is originally an empty array  []. We now push an object to it. so it is an array with object.
* return acc
We return the accumulator. Which is an object



## Solution Using forEach()
forEach returns a new modified array. It mutates the original array but returns undefined(I wonder why they did not make it such that it returns the modified array? like?).

We loop through the array. For each array item we 
a.  create a new property called orbitalPeriod. If a property doesn't already exist in an object and we do an assignment like we did it creates the property on the fly. obj.orbitalPeriod = orbPeriod; 
b.  delete the property avgAlt, delete obj.avgAlt; If you want to delete an objects property you use the `delete` keyword. 

### key Features
Array Methods Used
 1. reduce()
 2. forEach()
Math Methods and Properties Used
 1. Math.Pow()    
 2. Math.sqrt()   
 3. Math.PI       
 4. Math.round()  
Object Properties
 1. delete


