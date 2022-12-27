/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let r = numbers.length - 1;
  let l = 0;

  while (l < r) {
    const sum = numbers[r] + numbers[l];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum > target) {
      // 太大了，讓相加的其中一數變小，右指針往前
      r--;
    } else {
      // 太小了，讓相加得其中一數變大，左指針往後
      l++;
    }
  }
  return [];
};
