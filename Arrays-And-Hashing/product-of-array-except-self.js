/**
 * 思路：
 * nums[i]是nums[i]之外的數所有剩餘數的乘積
 * 也就是說，nums[i]的前面所有元素的乘積(prevFix) * nums[i]後面所有元素的乘積(postFix)
 * 利用兩次迭代，(1)從前開始搜集每一個nums[i]的prevFix (2) 從後開始搜集每一個nums[i] postFix
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [1];
  let counter = 1;

  nums.forEach((num, i) => {
    counter = counter * num;
    const numProfixIndex = i + 1;
    // 避免多一個數字，這個多出來的會是全部數字乘積的結果，因為我們的乘積會排除掉nums[num.length - 1]，不需要紀錄這筆
    if (numProfixIndex !== nums.length) {
      result[numProfixIndex] = counter;
    }
  });

  counter = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    counter = counter * nums[i];
    const pushIndex = i - 1;
    result[pushIndex] = result[pushIndex] * counter;
  }

  return result;
};
