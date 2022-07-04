function updateInventor(arr1, arr2) {
    const inventory = arr1.concat(arr2).reduce(function (acc, next) {
        if (acc[next[1]]) {
            acc[next[1]] += next[0]
        } else {
            acc[next[1]] = next[0]
        }
        return acc;
    }, {});
    const arrItems = Object.keys(inventory).map(function (value) {
        return [inventory[value], value];
    })
    const ans =  arrItems.sort(function (a, b) {
        if (a[1] === b[1]) {
            return 0;
        } else {
            console.log((a[1] < b[1] ? -1 : 1))
            return (a[1] < b[1] ? -1 : 1);
        }
    });
        // console.log(ans)
    return ans;
};

const curInv = [
    [21, 'Bowling Ball'],
    // [2, 'Dirty Sock'],
    // [1, 'Hair Pin'],
    // [5, 'Microphone'],
];
const newInv = [
    [2, 'Hair Pin'],
    // [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    // [7, 'Toothpaste'],
];
updateInventor(curInv, newInv);