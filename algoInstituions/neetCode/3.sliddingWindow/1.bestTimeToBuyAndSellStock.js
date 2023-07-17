function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}
function maxProfitComment(prices) {
  let left = 0; //left is how much we buy
  let right = 1; // right is how much we sell
  let maxProfit = 0;
  // we are looping through the array. we could have used a for loop
  //  you would remove; let right = 1; and this:   right++;
  //   for (let right = 1; right < prices.length; right++) {
  while (right < prices.length) {
    // if the amount we buy i greater than how much we sell
    // that means we bought it for 5k now we can sell it for more example 20k
    // we want to know the profit we have
    if (arr[left] < arr[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      // if the amount we bought is lower than the current price.
      // the means we have found an even cheaper price to buy it
      // so we change our buying that is left to that price
      left = right;
    }
    right++;
  }
  return maxProfit;
}
