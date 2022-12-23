/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const result = [];

  nums.forEach((num, index) => {
    const needNum = target - num;

    if (needNum < 0) {
      return;
    }

    const needNumIndex = nums.findIndex((num) => num === needNum);

    if (needNumIndex === undefined) {
      return;
    }

    result[0] = index;
    result[1] = needNumIndex;
  });

  return result;
};
