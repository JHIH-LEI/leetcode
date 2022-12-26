/**
 * 題意：
 * 給一個未排序的數字陣列，返回最長數字可以連續遞增幾次，數字會有正負
 * 限制： O(n)
 * 思路：
 * 先排序asc
 * 紀錄當前、最長連續幾次，如果數字相同就跳下一個看，數字不同就看該數字-1是否等於前一個（從元素1開始）
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let longestConsecutive = 1;
  let currentConsecutive = 1;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    if (nums[i] === prevNum) {
      continue;
    }

    if (nums[i] - 1 === prevNum) {
      currentConsecutive++;
      longestConsecutive =
        currentConsecutive > longestConsecutive
          ? currentConsecutive
          : longestConsecutive;
    } else {
      currentConsecutive = 1;
    }
  }

  return longestConsecutive;
};
