/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const hashMap = {}; // value:times
  let result = false;

  nums.forEach((num) => {
    if (hashMap[num] === 1) {
      result = true;
      return;
    }
    hashMap[num] = 1;
  });

  return result;
};
