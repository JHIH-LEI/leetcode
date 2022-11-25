/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Runtime: 81 ms, faster than 78.03% of JavaScript online submissions for Running Sum of 1d Array.
 * Memory Usage: 42 MB, less than 87.17% of JavaScript online submissions for Running Sum of 1d Array.
 */
var runningSum = function (nums) {
  let prevNum = 0;
  nums.forEach((num, i) => {
    const newNum = prevNum + num;
    nums[i] = newNum;
    prevNum = newNum;
  });
  return nums;
};
