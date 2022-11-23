/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const length = nums.length - 1;

  if (k > length) {
    k = k % nums.length; // 回到原點n次後還需要移幾位
  }

  if (k === nums.length) {
    return;
  }
  // reverse
  reverse(nums, 0, length);

  // 切成兩半，reverse

  // 第一個part

  reverse(nums, 0, k - 1);

  // 第二個part

  reverse(nums, k, length);
};

const reverse = function (nums, start, end) {
  while (start < end) {
    const newEndNum = nums[start];
    nums[start] = nums[end];
    nums[end] = newEndNum;
    start++;
    end--;
  }
};
