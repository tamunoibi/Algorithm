/**
 * 
 * Linear 
 */
/**
 * Sequentially checks each element of the list until a match is found o
 * @param {array} arr - The array of values to search through
 * @param {string || number } query - The item to find a match in the array for
 */
function linearSearch(arr, query) {
    let item;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element === query ? item = query : null;
    }
    console.log(item ? `The item ${item} was found` : 'No such item');

}
linearSearch([3, 4, 6], 6);