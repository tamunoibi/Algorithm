// reference note Jan, 2022: book2 page 15
// Sample input: maxAreaSolutionTwo([1, 8, 6, 2, 5, 4, 8, 3, 7]);

/**Explaining the question
 * When dealing with graphing two points are given.
 * the first point is the x axis the second point is the y axis.
 * A tip to remember this is x comes before y in the alphabet.
 * But how would I remember that x is left and right and y is up and down.
 * For now I don't have a tip to remember it it might just be from force of habit.
 * 
 * 
 * 
 * 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * height = [1,8,6,2,5,4,8,3,7]
 * There are two endpoints. 
 * one endpoint signify the Xaxis(left and right) and the y axis(up and down) for the top of the line
 * one endpoint signify the Xaxis(left and right) and the y axis(up and down) for the bottom of the line
 * This would be clearer with an example
 * 
 * The two endpoints of element 8 that is index 6 [1,8,6,2,5,4,*8*,3,7] is 
 * (i, 0) (i, height[i])
 * 
 * down point: (i, 0)  
 * i                  = 6
 * Xaxis(left, right) =  6
 * Yaxis(up, down)    =  0
 * 
 *      ------------------------*--------- 
 *      0   1   2   3   4   5   6   7   8
 * 
 * upper point : (i, height[i])  
 * height[i]          = height[6] = 8
 * Xaxis(left, right) =  6
 * Yaxis(up, down)    =  8
 *     8|                       +
 *     7| 
 *     6|     
 *     5| 
 *     4| 
 *     3| 
 *     2| 
 *     1| 
 *     0 -------------------------------- 
 *      0   1   2   3   4   5   6   7   8
 * 
 * 
 * TOGETHER
 * (i, 0)  down point: (i, height[i])  upper point:
 *     8|                       *
 *     7| 
 *     6|     
 *     5| 
 *     4| 
 *     3| 
 *     2| 
 *     1| 
 *     0 -----------------------*-------- 
 *      0   1   2   3   4   5   6   7   8
 *           This is endpoint (0, 6) i is 6. That is xAxis is 6, yAxis is 0
 * 
 * EXAMPLE 2: [*1*,8,6,2,5,4,8,3,7]
 * one endpoint signify the Xaxis(left and right) and the y axis(up and down) for the bottom of the vertical line
 * 4|
 * 3|
 * 2|  
 * 1|   
 * 0|___+________________
 *      0      2  
 *     This is endpoint (0, 0) i is 0. That is xAxis is 0, yAxis is 0
 * 
 * 
 * EXAMPLE 3: [1,8,*6*,2,5,4,8,3,7]
 * 4|
 * 3|
 * 2|  
 * 1|   
 * 0|____________+_________
 *      0   1    2  
 *     This is endpoint (2, 0) i is 2. That is xAxis is 2, yAxis is 0
 * 
 * 
 * 
 * 
 * ALL the endpoints: [1,8,6,2,5,4,8,3,7]
 *              pointA  pointB
 *              x,  y  x,  y
 * ----------------------------------
 * index = 0 -> (0, 0) (0, 1)
 * index = 1 -> (1, 0) (1, 8)
 * index = 2 -> (2, 0) (2, 6)
 * index = 3 -> (3, 0) (3, 2)
 * index = 4 -> (4, 0) (4, 5)
 * index = 5 -> (5, 0) (5, 4)
 * index = 6 -> (6, 0) (6, 8)
 * index = 7 -> (7, 0) (7, 3)
 * index = 7 -> (7, 0) (8, 7)
 * 
 */

/**The implication of (i, 0) on a grphing is we are placing on the bottoom of the graph
  x-axis or leftRigt: (i, _) (i, _) 
  x  value as i means that: left and right we are moving forward
i means that the intervals between the points are increasing by 1,  
the values of i are 0, 1, 2.
 it is asking where on the horizontal line would this bar be and the answer is every subbsequent item should be placed forward

            *     *
       *-----------
       0    1     2  
I am just placing it up and down randomly because we don't know where it would be placed up and down but left and right progressively forward



y-axis or upDown:, (_, 0)
the points would always be 0 on the y-axis. That means it would always be 
at the start of the y-axis. The y axis is asking how high, and the height is 0. that aleady gives you a sense that it is the bottom of the vertical bar. since we are drawing point  0

            5| 
            4| 
            3| 
            2| 
            1| 
here---->   0| ******
I am just placing it left and right randomly because we don't know where it would be placed left and right but up  and down is always at 0



Combining it togethher: (i, 0)  (leftRight, upDown) 
We know i is increasing by 1, 2, 3,  so each next point would be moving towards the right
while up and down it remains 0. This probably means it is the bottom vertical bars 
it means that on the left and right we are moving but up and down we remain at 0.
y-axis is always at 0
sevral lines with given endpoint as  (i, 0) becomes something like:
(0, 0) (1, 0) (2, 0).(3, 0).

 | 
 | 
 | 
 | 
 | 
 |  
  ----*-----*---*----*-----*---
      0     1   2    3     4     
 */

/** GRAPHS
 * 1. what do x and y axis mean
 * xAxis is left and right
 * yAxis is up and down
 * Tip to remember XAxis and Yaxis
 * how would I remember that x is left and right and y is up and down.
 * For now I don't have a tip to remember it it might just be from force of habit having worked with it for long.
 * I now have a tip 😆
 * The letter Y is standing straight. straighter than x which is slanted. Notice that capital Y is a strighat line and half of an x at the top
 * so the straight line signifies up and down
 * while the slanted line X is the left and right X is more bent towards a X -------
 * 
 * X is more bent towards
 *           X-------notice that X is half bent already
 *      
 * 
 * Y is more straight towards
 *          Y notice that Y is almost part of the straiht line
 *          |
 *          |
 *          |
 *          |
 *          |
 *          |
 * 
 *          X notice that x did not blend in well? 
 *          |
 *          |
 *          |
 *          |
 *          |
 *          |
 *   
 * 
 * 2. When given a point example (2, 4) the first number is the xAxis the second yAxis
 * When dealing with graphing two numbers are given.
 * the first number is the x axis the number is the y axis.
 * A tip to remember this is x comes before y in the alphabet.
 */
// O(N)
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

function maxAreaTwoPointerAgain(height) {
    let max = Number.MIN_VALUE;
    /**
     * Number.MIN_VALUE is the smallest positive number.
     * note it is not the smallest Posible number 
     * as it is even greater than 0; console.log( Number.MIN_VALUE > 0); // returns true
     * console.log( Number.MIN_VALUE > -2); // returns true
     * A common error is that you try to use this as the smallest 
     * possible number and this doesn't work as it is not the smallest possible number.
     * 
     */
    let left = 0;
    let right = height.length -1;
    while(left < right) {
        const len = right - left;
        const breadth = Math.min(height[left], height[right]);
        const area = len * breadth;
        max = Math.max(area, max)
        if(height[left] < height[right]) {
           left++
        } else {
            right--
        }
    }
    return max;
};

// O(N^2)
function maxAreaBruteForce(height) {
  let max = Number.MIN_VALUE;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const area = Math.min(height[left], height[right]) * (right - left);
      max = Math.max(max, area);
    }
  }
}

// O(N)
function maxAreaTwoPointerExplanation(height) {
  // we start max at the smallest possible number. We would replace it 
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

// O(N ^2)
function maxAreaBruteForceExplanation(height) {
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
     What is the distance between element 2(index 1) and element 7(index 6) .
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


     heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
     Areas
     8 * 1 = 8
     7 * 7 = 49
     6 * 3 = 18
     5 * 8 = 40
     4 * 4 = 16
     3 * 5 = 15
     2 * 2 = 4
     1 * 6 = 6

     iteration 1: 
      0  1  2  3  4  5  6  7  8
     [1, 8, 6, 2, 5, 4, 8, 3, 7]
      L                       R
      distance        = 8 - 0 = 8
      minimumHeight   = 1
      area = 8 * 1    = 8

     iteration 2: 
      0  1  2  3  4  5  6  7  8
     [1, 8, 6, 2, 5, 4, 8, 3, 7]
         L                    R
      distance        = 8 - 1 = 7
      minimumHeight   = 7
      area = 7 * 7    = 49

     iteration 3: 
      0  1  2  3  4  5  6  7  8
     [1, 8, 6, 2, 5, 4, 8, 3, 7]
         L                 R
      distance        = 7 - 1 = 6
      minimumHeight   = 3
      area = 6 * 3    = 18

       */
    }
  }
}

/**Questions
 * 1. Can I start the left and right at the center and move up? Must I start it at the two edges. I understand that 
 * starting it at the two edges means you have the widest width then what you are looking for is the highest, I know there
 * is some quick as to why this works
 * 2. 
 */