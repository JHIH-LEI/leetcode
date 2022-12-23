/**
 * 收集每個數字出現的次數，利用recursion拿最頻繁的數字放在結果陣列後再把數字從map刪掉，等到抓過k個後自然得出結果。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      const oldTimes = map.get(num);
      const newTimes = oldTimes + 1;
      map.set(num, newTimes);
    } else {
      map.set(num, 1);
    }
  });

  const descByFrequent = getKFrequentElement(k, map, []);

  return descByFrequent;
};

function getKFrequentElement(k, map, descByFrequent) {
  if (k === 0) {
    return descByFrequent;
  }
  let mostFrequentTimes = 0;
  let mostFrequentNum;

  for (const [num, times] of map) {
    if (times > mostFrequentTimes) {
      mostFrequentNum = num;
      mostFrequentTimes = times;
    }
  }
  descByFrequent.push(mostFrequentNum);
  map.delete(mostFrequentNum);
  return getKFrequentElement(k - 1, map, descByFrequent);
}
