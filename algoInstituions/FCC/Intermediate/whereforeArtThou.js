function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  //If filter returns true the item stays if it returns false it goes
  //The question is to go through the array
  // and for each object keep that object if that object has all the properties in the source object
  // example: collection: [{a: 1, b:2}] source: {a:1}
  // this item would be kept even though both items are not identical
  // it would be kept because all items in source are in the collection obj
  return collection.filter(
    (obj) => sourceKeys.every((key) => obj[key] === source[key])
    // example: collection: [{a: 1, b:2}] source: {a:1}
    // keys = [a];
    // obj = {a: 1, b:2}
    // every checks whether obj.a is equal source.a
    // that is 1  == 1
    // this returns true.
    // that means that object is added to the array to be returned
    // since every property in sourceObject matches every property in that object
    //the array method every returns true if EVERY item pass the test
  );
  // there are a lot implicit returns so I decided to break out the full code
  //the first return is returning from the function
  //   return collection.filter((obj) => {
  //the second return is returning from filter function
  //     return keys.every((key) => {
  //the third return is returning from every function
  //       return source[key] === obj[key];
  //     });
  //   });
}

whatIsInAName(
  [
    { a: 1},
    { b: 2 },
    { c: 3},
  ],
  { a: 1 }
);
