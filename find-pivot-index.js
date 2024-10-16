/**
 * @param {number[]} nums
 * @return {number}
 */
// pivot左半跟右半相等，就返回index, 否則返回-1
var pivotIndex = function (nums) {
  const sum = nums.reduce((prev, acc) => (acc += prev), 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      // leftmost, 所以第一個找到的結果即可返回，loop是從左->右
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
