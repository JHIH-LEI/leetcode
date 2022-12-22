/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let r = nums.length - 1;
  let l = 0;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 旋轉後的陣列
    if (nums[mid] < nums[l]) {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 左陣列
      if (target < nums[mid]) {
        if (nums[l] > target) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
};
