## QUESTION

[link to the question on hackerrank](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

## Explanation
Given an array `[6, 6, 6, 6, 6, 6, 6]`
If we can move only one step how many times would we move to get to the end?
the answer is 6.
Because we start from:
 the 0th item to the 1st item = 1 move
 the 1st item to the 2nd item = 2 move
 the 2nd item to the 3rd item = 3 move
 the 3rd item to the 4th item = 4 move
 the 4th item to the 5th item = 5 move
 the 5th item to the 6th item = 6 move


Given an array `[6, 6, 6, 6, 6, 6, 6]`
If we can move: 
a. either ONE step or TWO steps.
question: what is FASTEST number of steps it would we move to get to the end?
answer:   3
Tip:  While we can move one time it is definitely faster to move two times each time
Because we start from:
 the 0th item to the 2nd item = 1 move
 the 2nd item to the 4th item = 2 move
 the 4th item to the 6th item = 3 move


Given an array `[0, 0, 1, 0, 0, 1, 0]`
If we can move: 
a. either ONE step or TWO 
b. we can not move into a 1.
question: what is FASTEST number of steps it would we move to get to the end?
answer:   4
Tip:  While we can move one time it is definitely faster to move two times each time. If we attempt to move twice and we are hit by a one we go back to moving once. so on the first item we try 0th to 2nd, the item there is a one so we move back 
Because we start from:
 the 0th item to the 1st item = 1 move
 the 1st item to the 3rd item = 2 move
 the 3rd item to the 4th item = 3 move
 the 4th item to the 6th item = 4 move
 

Given an array `[0, 0, 1, 0, 0, 0, 0, 1, 0, 0]`
answer: 6
Because we start from:
 the 0th item to the 1st item = 1 move
 the 1st item to the 3rd item = 2 move
 the 3rd item to the 5th item = 3 move
 the 5th item to the 6th item = 4 move
 the 6th item to the 8th item = 5 move
 the 8th item to the 9th item = 6 move


## Solution 1
This solution relies on the fact that we know that the loop would execute at least once it is the second time that is conditional
a. whether if we move add another item we would have exceeded the array items. If we have not exceeded the array items add 1 to index. if(nextIndex < c.length)
b. whether the particular element is a 0 or 1. If it is a 0 add one to index if(c[nextIndex] === 0 &&)

## Solution 2

`(index + 2 < arr.length ? index +=  2 : index ++)`
check whether the array has a valid index at index + 2 position before jumping to that position.
We are making sure the i value does not exceed the length of the array or go beyond the range
for example we have a [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
without the check
 the 6th item to the 8th item = 5 move
 the 8th item to the 10th[non existent] item = //  move two steps get to item 10. array length 9

we want to make sure the index does not go outside the loop
 the 6th item to the 8th item = 5 move
 the 8th item to the 9th item = 6 move   // move one step instead of two steps

arr.length = 10;
arr[n]     = 9; // 

8 + 2 < 10 = false // because
even when we move two steps further we are still within the array items
if not on this item we would be attempting to access a


`element === 1 && index--;`
we are attempting to move two steps. But when we move two steps and we discover that it is a 
`1` return move back to the previous item `element === 1 && index--;`


function jumpingOnTheClouds(arr) {
    let value = 0;
    for (let index = 2; index < arr.length; (index + 2 < arr.length ? index +=  2 : index ++)) {
        const element = arr[index];
        console.log(index, 'index statement');
        console.log('element statement', element)

        value += 1

        if (element ===  1) {
            console.log('if statement', element)
            index--;
            // return
        }
        // element && index--; // where the
    }
    return value;
}

## key Features
