/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let r = height.length - 1;
  let l = 0;
  let rightMax = height[r];
  let leftMax = height[l];
  let result = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      leftMax = Math.max(height[l], leftMax);
      result += leftMax - height[l];
      l++;
    } else {
      rightMax = Math.max(height[r], rightMax);
      result += rightMax - height[r];
      r--;
    }
  }

  return result;
};

// fail
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 兩線的高度取最小的，這個最小的不是0，才能裝水
  // 兩條線能裝的水 = 面積 - 中間的線高總長
  // 找到兩條線的方式，左線比右線矮
  // 如果左線沒有比右線矮，但是已經到底了，就只好算了

  // 雙迴圈
  let water = 0;

  let needToBeSkip = 0;
  let start = 0;
  let end = 1;

  while (end <= height.length - 1) {
    if (height[start] === 0) {
      start++;
      end++;
      continue;
    }

    if (height[end] === 0) {
      end++;
      continue;
    }

    if (height[start] <= height[end]) {
      water = water + (end - start - 1) * height[start] - needToBeSkip;
      needToBeSkip = 0;
      start = end;
      end++;
    } else if (end === height.length - 1) {
      // 到底了，但都還沒找到,要用另外一個邏輯找
      end = start + 2;
      needToBeSkip = height[start + 1];
      while (end <= height.length - 1) {
        const currentTrap =
          (end - start - 1) * Math.min(height[start], height[end]) -
          needToBeSkip;
        if (currentTrap < 0) {
          start++;
          end++;
          needToBeSkip = height[start + 1];
        } else {
          water += currentTrap;
          start = end;
          end = end + 2;
        }
      }
      break;
    } else {
      needToBeSkip = needToBeSkip + height[end];
      end++;
    }
  }

  return water;
};

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     // 兩線的高度取最小的，這個最小的不是0，才能裝水
//     // 兩條線能裝的水 = 面積 - 中間的線高總長
//     // 找到兩條線的方式，左線比右線矮
//     // 如果左線沒有比右線矮，但是已經到底了，就只好算了

//     // 雙迴圈
//     let water = 0;

//     let needToBeSkip = 0;
//     let start = 0;
//     let end = 1;

//     while (end <= height.length - 1) {
//       if (height[start] === 0) {
//         start++;
//         end = end + 2;
//         continue;
//       }

//       if (height[end] === 0) {
//         end++;
//         continue;
//       }

//       if (height[start] <= height[end]) {
//         water = water + (end - start - 1) * height[start] - needToBeSkip;
//         needToBeSkip = 0;
//         start = end;
//         end++;
//       } else if (end === height.length - 1) {
//         water =
//           water +
//           (end - start - 1) * Math.min(height[start], height[end]) -
//           needToBeSkip;

//         break;
//       } else {
//         needToBeSkip = needToBeSkip + height[end];
//         end++;
//       }
//     }

//     return water;
//   };
