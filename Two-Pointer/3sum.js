/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  nums.forEach((firstNum, i) => {
    if (firstNum !== nums[i - 1]) {
      let right = i + 1;
      let left = nums.length - 1;
      while (right < left) {
        const threeSum = firstNum + nums[right] + nums[left];
        if (threeSum === 0) {
          result.push([firstNum, nums[right], nums[left]]);
          while (nums[right] === nums[right + 1]) right++;
          while (right < left && nums[left] === nums[left - 1]) left--;
          right++;
          left--;
        } else if (threeSum < 0) {
          left++;
        } else {
          right++;
        }
      }
    }
  });

  return result;
};
