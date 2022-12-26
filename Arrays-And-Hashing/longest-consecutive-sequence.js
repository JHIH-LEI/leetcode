/**
 * 題意：
 * 給一個未排序的數字陣列，返回最長數字可以連續遞增幾次，數字會有正負
 * 思路：
 * 先排序asc
 * 紀錄當前、最長連續幾次，如果數字相同就跳下一個看，數字不同就看該數字-1是否等於前一個（從元素1開始）
 * 若有限制： O(n)
 * 就不能先排序因為會耗時O(n logn)
 * 我們能藉由一個數是否有該數-1來知道他是否是一個起始點，如果是，就往下找+1的數，直到找不到
 * 如果不是起始點，就跳過
 * 藉由一個變數紀錄最長的連續次數，我們最後會得到答案
 * 判斷有無該數，能夠利用set來達成
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let longestConsecutive = 0;
  const uniqueNums = new Set(nums);

  for (let num of uniqueNums) {
    if (uniqueNums.has(num - 1)) {
      continue;
    }

    // 起始點，開始計算連續幾次
    let currentConsecutive = 1;

    while (uniqueNums.has(num + 1)) {
      currentConsecutive++;
      num++;
    }

    if (currentConsecutive > longestConsecutive) {
      longestConsecutive = currentConsecutive;
    }
  }

  return longestConsecutive;
};
