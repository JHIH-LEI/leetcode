/**
 * 題意：
 * 給定一組數字陣列，索引為x值(i), 數字為y值(height[i])，兩端點(x,y)個別為：(i,0),(i,height[i])，
 * 請出兩條線，在兩線之間能乘載最多的水（面積 長*寬）
 * 限制：容器不能傾斜，代表兩線容器的高度會取最小值
 * 寬= A的i - B的i 取絕對值
 * 長：A的高 跟 B的高中取最矮的
 *
 * 最直覺的方式是用兩個loop，O(n^2)，去更新最大容器變數
 * 但這樣太慢了
 *
 * 思路：
 * 可以發現，如果左指針是最矮的，那最右邊那條線的就是假設線A是左指針的最大組合了，因為高已經固定，這時要求寬最大。
 * 計算面積，面積算法：
 * 寬= A的i - B的i 取絕對值
 * 長：A的高 跟 B的高中取最矮的
 * 比較該組合最大面積跟目前紀錄的最大面積後做更新，復原右指針，繼續找（下一個固定左線後的最大水量為何）
 * 直到左指針為最後一位為止，代表左線===右線，已經找完所有最大的可能性
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let currentMaxArea = 0;
  let endIndex = height.length - 1;
  let r = endIndex;
  let l = 0;

  while (l < endIndex) {
    const currentArea = Math.min(height[l], height[r]) * r - l;
    currentMaxArea = Math.max(currentArea, currentMaxArea);
    if (height[l] <= height[r]) {
      // 等於高已經固定了，這時需要找最大的寬（也就是最右邊的線）
      l++; // 該左線最大的可能性已經找到，把左線換下一位
      r = endIndex; // 回位
    } else {
      // 高度還未固定，繼續計算a線為l的所有組合
      r--;
    }
  }

  return currentMaxArea;
};
