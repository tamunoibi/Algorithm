//Solution A
function diffArray(arr1, arr2) {
  const pushDifference = (querryArr, arrB) => {
    const diffArr = [];
    for (let i = 0; i < querryArr.length; i++) {
      const key = querryArr[i];
      if (!isFound(key, arrB)) {
        diffArr.push(key);
      }
    }
    return diffArr;
  };

  const isFound = (needle, haystack) => {
    for (let index = 0; index < haystack.length; index++) {
      const item = haystack[index];
      if (needle === item) {
        return true;
      }
    }
    return false;
  };
  return [...pushDifference(arr1, arr2), ...pushDifference(arr2, arr1)];
}

//Solution B
function diffArray2(arr1, arr2) {
  // the reason for concatenation is so that I do not have to run the function on the 
  // first array then on the second array. I just join all the elements and compare
  const newArr = arr1.concat(arr2);

  return newArr.filter((elem) => {
    return !(arr1.includes(elem) && arr2.includes(elem));
  });
}

//Solution B with detailed explanation explanation
function diffArray(arr1, arr2) {
  const combinedArr = arr1.concat(arr2);
  const callBack = (item) => {
    return !(arr1.includes(item) && arr2.includes(item));
  };
  const newArr = combinedArr.filter(callBack);
  // example given an array: ['rat', 'cockroach'] ['goat', 'rat']
  // RAT--> This is an example of an item I do not want to keep because it is found in both places.
  // arr1.includes(rat) = true,
  // arr2.includes(rat)-> true.
  // !(true) = false, which means I do not want that item to stay.

  // COAKROACH--> This is an example of an item I want to keep because it is found in only one place. I want unique items not mass production items
  // arr1.includes('cockroach') = true,
  // arr2.includes('cockroach')-> fale.
  // that means this array returns false. Filter asks should I keep this item? If you say 'false' which is no the item is promptly thrown away. But
  // !(false) = true, which means want that item to stay.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 4, 5]);



console.log({ diff: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) });
