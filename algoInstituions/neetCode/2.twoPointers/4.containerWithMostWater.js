// reference note Jan, 2022: book2 page 15
function maxArea(height) {
  let max = Number.MIN_VALUE;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const area = Math.min(height[left], height[right]) * (right - left);
      max = Math.max(max, area);
    }
  }
}

function maxAreaSolutionTwo(height) {
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
maxAreaSolutionTwo([1, 8, 6, 2, 5, 4, 8, 3, 7]);
