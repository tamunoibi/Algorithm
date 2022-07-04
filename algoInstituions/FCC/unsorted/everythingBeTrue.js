/**
 * Checks if an objects property is truthy. 
 * @param {array} collection - The collection to perform the search on. It is an array of objects
 * @param {string} pre - the search query. Pre is an object property(key). it is
 * @returns {boolean} - true if the item is a truthy value and false if the item is a falsy value. The item is the objects value. 
 */
function truthCheck(collection, pre) {
    return collection.every(function(obj) {
      return obj[pre];  // It is note worthy that this is a check. this either evaluates to true or false based on whether the value is a truthy value or falsy value
    });
  };
  // function truthCheck(collection, pre) {
  //   let value;
  //   for (let index = 0; index < collection.length; index++) {
  //       const user = collection[index];   // This is each individual object in the collection
  //       console.log(user);
  //       const item = user[pre];          // item is set to the objects value eg item = 'ib'
  //       value = item  ? true : false;   // this checks if item is true. Then returns true. N/b that all falsy values like 0 would return false when checked
  //   }
  //   console.log(value);
  //   return value;
  // }
//   Falsy valiues in js are null, undefined, 0, '', NaN;

truthCheck([{"user": "good"}, {'user2' : 'joy'}], 'user');
//   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");