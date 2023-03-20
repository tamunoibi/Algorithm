function longestSequence(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  const set = new Set(nums);
  let max = 0;
  for (const num of set) {
    if (set.has(num - i)) {
      continue;
    }
    let currNum = num;
    let currMax = 1;
    while (set.has(num + i)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}
longestSequence([100, 4, 200, 1, 3, 2]);
