/**
 * 思路：
 * 求n個子陣列，或許可用sliding window來做，超出限制就shrink(move l++)，否則一直擴展window(move r++)
 * 當找到滿足條件的window時，去算該window下所有的子陣列排列組合有多少個。(r - l + 1)
 * 想得到公式，只需要去想在第i個元素時，答案會是多少，跑幾個例子就可以抓到這個pattern了
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  let l = 0,
    ans = 0,
    cur = 1;

  for (let r = 0; r < nums.length; r++) {
    cur *= nums[r];

    while (cur >= k) {
      cur /= nums[l];
      l++;
    }

    ans += r - l + 1;
  }

  return ans;
};
