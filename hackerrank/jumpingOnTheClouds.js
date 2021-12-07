function jumpingOnTheClouds(c) {
    let count = 0;
    for (let index = 1; index < c.length; index++) {
        const nextIndex = index + 1;
        if (c[nextIndex] === 0 && nextIndex < c.length) {
            index++;
        }
        count += 1
    }
    return count;
}

// function jumpingOnTheClouds(c) {
//     let count = 0;
//     for (let index = 2; index < c.length; (index + 2 < c.length ? index +=  2 : index ++)) {
//         const element = c[index];
//         element && index --
//         count += 1
//     }
//     return count;
// }


// function jumpingOnTheClouds(c) {
//     let count = 0;
//     for (let index = 2; index < c.length; (index + 2 < c.length ? index +=  2 : index ++)) {
//         const element = c[index];
//         if (element ===  1) {
//             console.log('if statement', element)
//             index--;
//         }
//         count += 1
//     }
//     return count;
// }
// const quest = jumpingOnTheClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0]);
const quest = jumpingOnTheClouds([0, 0, 0, 0, 1, 0]);
// const quest = jumpingOnTheClouds([0, 0, 1, 0, 0, 1, 0]);

// quest;
console.log(quest, 'I am answer');