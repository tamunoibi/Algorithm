/**
 * Return the second largest array
 * example
 * [4, 1, 2, 3] returns 3
 * [1, 1, 2, 2] returns 1
 * [1, 1] returns -1
 */
function sec(arr) {
    let second = -Infinity;
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr > largest) {
            second = largest;
            largest = curr;
        }
        if (arr[i] > second && curr < largest) {
            second = curr;
        }
    }
    return second ? second : -1;
}
function secComment(arr) {
    let second = -Infinity;
    let largest = -Infinity;
    // I was tempted to use null as the default value
    // this would not work as null > -4 would get coearced to the number
    // and that would be wrong as -4 is the smaller and not null
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
/**NULL 
 *   null gets coearced to 0
 *   Question this would not work on this array 
 *   because the check if null > 1 would return NaN. WRONG
 *    actually it returns false. Because in js when performing 
 *   comparison of different types. There is an attempt 
 *   to convert them to same type so null i converted to 0.
 *   so it is like `0 > 1` which is false
 * 
 *  same with if you compare null == undefined
 *  it would return true. 
 *  this is because the equality operator performs type coercion,
 *   which means it converts the operands to the same type before making the comparison. In the case of undefined and null,
 *  they are considered equal when using the == operator.  Both null and undefined are loosely equal.
 * 
 * 
 * 
 *   what if I use Number.NEGATIVE_INFINITY?
 *  this would work it is same as -Infinity
 */
        if (curr > largest) {
            second = largest;
            largest = curr;
        }
        if (arr[i] > second && curr < largest) {
            second = curr;
        }
    }
    return second ? second : -1;
}

// another solution would be to sort it removing duplicates 
// and then return the second to the last item
function secSort(arr) {
    
}
// another solution would be to use the first and second items of the array as the 
// let largest = arr[0]; let sec = arr[1];
function secTwoArrays(arr) {
    
}