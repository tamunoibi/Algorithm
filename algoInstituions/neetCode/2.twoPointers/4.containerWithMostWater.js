// reference note Jan, 2022: book2 page 15
// Sample input: maxAreaSolutionTwo([1, 8, 6, 2, 5, 4, 8, 3, 7]);

function maxAreaBruteForce(height) {
  let max = Number.MIN_VALUE;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const area = Math.min(height[left], height[right]) * (right - left);
      max = Math.max(max, area);
    }
  }
}
function maxAreaBruteForce(height) {
  let max = Number.MIN_VALUE;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const area = Math.min(height[left], height[right]) * (right - left);
      max = Math.max(max, area);
      /**const area = Math.min(height[left], height[right]) * (right - left);
      This line can be broken down thus:
      const distance = right - left;
      const smallestHeight = Math.min(height[left], height[right]);
      const area = smallestHeight * distance;

      *DISTANCE
      The distance between two vertical bars is the difference between their indexes.
      For example:  

                   *              *
     elements: [1, 2, 3, 4, 5, 6, 7, 8]
     index:     0  1  2  3  4  5  6  7
     What is the distance between element(index 1) two and element 7(index 6) .
     Looking at it visually you can count it from 3, 4, 5, 6, 7: that is 5 items apart.
     programatically  you subtract the big index (6) from the small index 1. That is 
     6 - 1 = 5 
     
     SMALLEST HEIGHT:
     this is better seen visually. Look at the note. The smallest item between the items being compared
     The highest the water can go is the smallest of the vertical bars:
     Example:

     |
     |
     |        |
     |        |
     4        2
     the maximum water to be filled is the 2. Since that is the smallest container.

     AREA
     The regular calculation for area of is length * breadth.
     but also this is better explained visually also. Check note
       */
    }
  }
}

function maxAreaTwoPointer(height) {
  let max = Number.MIN_VALUE;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // area is length * breadth
    // length here is the smallest height
    // bredth is the distance between the two items
    const area = Math.min(height[left], height[right]) * (right - left);
    // we compare our current maximum area with this current area. 
    // we change the maximum area to the bigger of the two
    max = Math.max(max, area);
    // We move the smaller pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
function maxAreaTwoPointer(height) {
  let max = Number.MIN_VALUE;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
