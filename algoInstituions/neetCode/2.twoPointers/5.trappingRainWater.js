// Time O(N ^ 2)
function trapBruteForce(height) {
  /**
   * Some notes: yiy
   * 1. If you hae only one element you can not store any water. Example height = [ 9]
   * 2. if you have two elements you can not store any water.
   *        Example height = [10, 20]      -> the first element is less than the second
   *        Example height = [10, 10]      -> the first element is equal to the second
   *        Example height = [20, 10]      -> the first element is greater than the second
   *
   *
   * In order to trap water we must form a POCKET or a HOLD.
   * That is like a hole. The item in the middle must be less than the items on the right and left
   *
   *  __4___
   *  ||  ||        __3___         _the maximum water is the minimum of the left and right - the current item___
   *  ||  ||        ||  ||
   *  ||  || __1___ ||  ||         waterLevel  =  Math.min(4, 3) - 1 = 2
   *  ||  || ||  || ||  ||
   *         2 water
   *
   *dhbchfdgifGSd dgciygsdfv d
   */
  let sum = 0;
  // the first and the last blocks can not store waterfgcddsmndxvbycdg
  // we start the loop at the second block.
  for (let i = 1; i < height.length; i++) {
    // the formular for getting the water stored
    // the smaller between all the items to the left and all the items to the right
    // Math.max(maxLeft, maxRight) - height[i]

    // How do we get the items on the left and the items on the right
    let maxLeft = 0;
    let maxRight = 0;
    for (let j = 0; j < height.length; j++) {
      // if we are on the left hand side
      if (j < i) {
        // if we have a new
        if (height[j] > maxLeft) {
          maxLeft = height[j];
        }
      } else if (j > i) {
        // if we are on the right hand side
        if (height[j] > maxRight) {
          maxRight = height[j];
        }
      }
    }
    const waterLevel = Math.min(maxLeft, maxRight) - height[i];
    // console.log({waterLevel})
    /**The need for the check if waterLevel is < 0 is to prevent negative values. For example:
    height = [8, 1];
    that means waterlevel on the first iteration that is the second bloc that is 1 is
    waterLevel = Math.min(8, 0) -  1;
    waterLevel = 0 - 1;
    waterLevel = -1;

    Notice that waterLevel is in the negative. 
   */

    sum += waterLevel < 0 ? 0 : waterLevel;
  }
  return sum;
}

// Time O(N) takes extra space
function trapTwoArrays(height) {
  const leftMaxArr = [];
  let leftMax = 0;
  // so we start from the first and stop at the last item
  for (let i = 0; i < height.length; i++) {
    // the order matters you must push the leftMax before you update the  leftMax
    leftMaxArr.push(leftMax);
    // change the leftMax to the current item if it is bigger than
    if (height[i] > leftMax) {
      leftMax = height[i];
    }
  }
  const rightMaxArr = [];
  let rightMax = 0;
  // so we start from the last and stop at the first item
  for (let i = height.length - 1; i >= 0; i--) {
    // the order matters you must push the rightMax before you update the  rightMax
    rightMaxArr.unshift(rightMax);
    // change the rightMax to the current item if it is bigger than
    if (height[i] > rightMax) {
      rightMax = height[i];
    }
  }

  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    // there could be a negative value. So we check if it is less than 0 and make it 0
    const waterLevel = Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
    sum += waterLevel < 0 ? 0 : waterLevel;
  }
  return sum;
}

trapTwoArrays([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// Time O(N) does NOT take extra space
function trapTwoPointer(height) {
  if (!height) {
    return 0;
  }
  // left starts at the first element
  let left = 0;
  // right starts at the last element
  let right = height.length - 1;
  // left max starts at the first element
  let leftMax = height[left];
  // right max starts at the last element
  let rightMax = height[right];
  let res = 0;

  // we would run this loop before they meet each other
  while (left < right) {
    // while leftMax is less than rightMax then we increase lef by one
    // why are we doing this?
    if (leftMax < rightMax) {
      left++;
      //   what is this
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }
  return res;
}
// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
