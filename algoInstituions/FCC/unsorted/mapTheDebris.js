/**
 * Question:
 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * 
 * 
 * 
 * We are given array with an object or multiple objects. ([{}, {}]). Note an array of objects is a collection. So we are given a collection
 * Each object contains name and average altitude (called avgAlt)
 * Eg.  orbitalPeriod({name: "iss", avgAlt: 413.6})
 * 
 * 
 * we are to  return a new array and use the average to calculate the orbital period.
 * 
 * HOW TO CALCULATE ORBITAL PERIOD:
 * 
 * The Values to calculate the orbital period
 * We need three values to calculated the orbital period
 * 1. the average altidute                                       --> this is passed in the object. Exampe orbitalPeriod({name: "iss", avgAlt: 413.6}) the average altitude is 413.6
 * 2. The the standard gravitational parameter sort version GM   --> this is already provided for you in the question. It is three hundred thousand and change.It is exactly  398,600.4418;
 * 3. The earth Radius                                           --> tthis is already provided for you in the question.  It is six  thousand and change. exactly is 6367.4447;
 * Remember:
 * The question already gives us two of the values we need to perform the calculation:
 *     const GM = 398600.4418;
 *     const earthRadius = 6367.4447;
 * The third Value average altitude is gotten from the userInput  example orbitalPeriod({name: "iss", avgAlt: 413.6}). The average altitude is  413.6
 * 
 * 
 * The Way to calculate the orbital period (that is the formula for orbital period):
 * Eg.  orbitalPeriod({name: "iss", avgAlt: 413.6})
 * 
 * I break the maths into two parts.
 *  We multiply the first part by the second part.
 * Part A: 
 * You multiply partA times ParB 
 *     (2 * Math.PI) *  Math.sqrt((earthRadius + avgAlt) ^ 3 ) / GM)
 *     6.283185307179586 * 0.1304397641430452 = 0.8195772095355522
 * 
 * Part B: 
 * 1. (earthRadius + avgAlt) ^ 3
 * Cube the 
 *     the Earth Radius plus the the Average Altitude 
 *     (earthRadius + avgAlt) ^ 3
 *     (6367.4447 + avgAlt) ^ 3
 *     (6367.4447 + 413.6) ^ 3
 *      6781.0447 ^ 3 = 6782
 * 
 * 2. (earthRadius + avgAlt) ^ 3 ) / GM
 *    divide the previous calculation by the standard gravitational parameter
 *     (6367.4447 + 413.6) ^ 3 / 398600.4418
 *     6782 / 398600.4418 = 0.017014532069693257
 * 
 * 3. Math.square((earthRadius + avgAlt) ^ 3 ) / GM)
 *      Math.sqrt((earthRadius + avgAlt) ^ 3 ) / GM)
 *      Math.sqrt(0.017014532069693257) = 0.1304397641430452
 *     
 *
 * Combining the answer:
 *  1.. You multiply partA times ParB 
 *     (2 * Math.PI) *  Math.sqrt((earthRadius + avgAlt) ^ 3 ) / GM)
 *     6.283185307179586 * 0.1304397641430452 = 0.8195772095355522
 * 
 * 2. You round the answer to the nearest whole number. 
 *      Math.round(0.8195772095355522) = 1
 * 
 * To summarize it:
   const orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
 * 
 * 

 * Example 2:
 * The array may have multile values. Like in this case the array has 3 items
 * orbitalPeriod([
 *   {name: "iss", avgAlt: 413.6},
 *   {name: "hubble", avgAlt: 556.7},
 *   {name: "moon", avgAlt: 378632.553}
 * ])
 * should return [
 *  {name : "iss", orbitalPeriod: 5557},
 *  {name: "hubble", orbitalPeriod: 5734},
 *  {name: "moon", orbitalPeriod: 2377399}
 * ]
 * Explanation:
 * 1. We would go through each of the items.
 *    first the item
 * 2.
 * 
 * 
 * Test Cases:
   orbitalPeriod([{name: 'sputnik', avgAlt: 35873.5553}]); // {name: 'sputnik', avgAlt: 35873.5553}
   
   orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) //  [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
 */

// the empty function we are to calculate
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr;
}

// Using forEach();
function orbitalPeriodForEach2(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbitalPeriodResults = [];

  const calculateOribitalPeriod = (averageAlt) => {
    // part a
    const twoTimesPi = Math.PI * 2;

    // part b: topOfDivider
    const earthRadiusPlusAverageAltitude = earthRadius + averageAlt;
    const topOfDivider = Math.pow(earthRadiusPlusAverageAltitude, 3);
    // cube means multiplied by itself three times.
    // alternative ways of writing cube
    // const topOfDivider = earthRadiusPlusAverageAltitude ^ 3;
    //   const topOfDivider = earthRadiusPlusAverageAltitude * earthRadiusPlusAverageAltitude * earthRadiusPlusAverageAltitude;
    // part b: divide top by bottom
    const numberToSquareRoot = topOfDivider / GM;
    // part b: get squareroot of the topDivider and bottom divider
    const squaredRootResult = Math.sqrt(numberToSquareRoot);

    // combine part a and part b and round of to  of to the nearest whole number
    const orbitalPeriod = twoTimesPi * squaredRootResult;
    const orbitalPeriodRound = Math.round(orbitalPeriod);
    return orbitalPeriodRound;
  };

  // we would go through each object in the array given to us.
  // For each object we create a new object.
  // We set its name to be that objects name and its average altitude property to the value calculated
  arr.forEach((dataPoint) => {
    const translatedDataPoint = {};

    // we set the name property of the empty object to this elements object name
    translatedDataPoint.name = dataPoint.name;

    // we set the orbitalPeriod property of the former empty object (it now has a name property {name}) to the result of the calculation
    // to calculate the oribital period we need to pass the average altitude average period
    const orbitalPeriod = calculateOribitalPeriod(dataPoint.avgAlt);
    translatedDataPoint.orbitalPeriod = orbitalPeriod;

    // we push the constructed object  into the orbitalPeeiodResults array
    orbitalPeriodResults.push(translatedDataPoint);
  });
  console.log(orbitalPeriodResults);
  return orbitalPeriodResults;
}

// Using reduce();
function orbitalPeriodReduce(arr) {
  const GM = 398600.4418;
  const earthRadius = 636.4447;
  const result = [];

  return arr.reduce(function (acc, obj) {
    const orbPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    );
    acc.push({ name: obj.name, orbitalPeriod: orbPeriod });
    return acc;
  }, []);
}

// Using forEach();
function orbitalPeriodForEach2(arr) {
  const GM = 398600.4418;
  const earthRadius = 636.4447;
  const result = [];

  arr.forEach((obj) => {
    const orbPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    );
    obj.orbitalPeriod = orbPeriod;
    delete obj.avgAlt;
  });
  return arr;
}

// Using forEach();
function orbitalPeriodForEach(arr) {
  const GM = 398600.4418;
  const earthRadius = 636.4447;
  const result = [];

  arr.forEach((obj) => {
    const orbPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    );
    obj.orbitalPeriod = orbPeriod;
    delete obj.avgAlt;
  });
  return arr;
}

// Using map();
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbitalPeriodResults = [];

  const calculateOribitalPeriod = (averageAlt) => {
    // part a
    const twoTimesPi = Math.PI * 2;

    // part b: topOfDivider

    const earthRadiusPlusAverageAltitude = earthRadius + averageAlt;
    const topOfDivider = Math.pow(earthRadiusPlusAverageAltitude, 3);
    // cube means multiplied by itself three times.
    // alternative ways of writting cube
    // const topOfDivider = earthRadiusPlusAverageAltitude ^ 3;
    //   const topOfDivider = earthRadiusPlusAverageAltitude * earthRadiusPlusAverageAltitude * earthRadiusPlusAverageAltitude;
    // part b: divide top by bottom
    const numberToSquareRoot = topOfDivider / GM;
    // part b: get squareroot of the topDivider and bottom divider
    const squaredRootResult = Math.sqrt(numberToSquareRoot);

    // combine part a and part b and round of to  of to the nearest whole number
    const orbitalPeriod = twoTimesPi * squaredRootResult;
    const orbitalPeriodRound = Math.round(orbitalPeriod);

    return orbitalPeriodRound;
  };

  // we would go through each object in the array given to us.
  // For each object we create a new object.
  // We set its name to be that objects name and its average altitude property to the value calculated
  return arr.map((dataPoint) => {
    // we return an object for each of the values of the array
    return {
      name: dataPoint.name,
      orbitalPeriod: calculateOribitalPeriod(dataPoint.avgAlt),
    };
    // the final array returned by map would contain an object of objects
  });

}
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);



// orbitalPeriod([{name: 'sputnik', avgAlt: 35873.5553}]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
