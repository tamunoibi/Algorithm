// question: https://www.chegg.com/homework-help/questions-and-answers/7-merge-sort-counts-merge-sort-one-well-known-sorting-algorithms-problem-mergesort-takes-a-q92923592
function mergeSortCount(params) {
    const merge = (left, right) => {
      let sortedArr = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
      return [...sortedArr, ...left, ...right];
    }
      if (params.length <= 1) {
        return params;
      }
      const half = Math.floor((params.length + 1) / 2);
      const left = params.splice(0, half);
      const right = params;
      return merge(mergeSort(left), mergeSort(right));
}

