function search(nums, target) {
  let start = 0;
   let stop = nums.length - 1;
   while(start <= stop) {
     let mid = Math.ceil((start + stop) / 2);
     const pivot = nums[mid];
     if(target === pivot) {
       return mid;
     } else if(target < pivot)  {
       stop = mid - 1;
     } else {
       start = mid + 1;
     }
   }
    return -1;
}
console.log(Math.ceil((start + stop) / 2))