/**
 * 思路：
 * 先搜集每一個數字出現幾次，再迭代一次map把資料存成陣列索引等於次數，值等於符合該次數的數字們的資料格式
 * 陣列的尾端紀錄著該數組中出現最頻繁的數字們，頭紀錄出現最少的數字們
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const res = [];
  const map = new Map(); // { num : times }
  let frequenlyByAsc = []; // index = frenquent value is num

  // record each number occur times

  nums.forEach((num) => {
    const oldTimes = map.get(num);
    const newTimes = oldTimes ? oldTimes + 1 : 1;
    map.set(num, newTimes);
  });

  map.forEach((times, num) => {
    const exsitNum = frequenlyByAsc[times];
    if (exsitNum) {
      frequenlyByAsc[times].push(num);
    } else {
      frequenlyByAsc[times] = [num];
    }
  });

  frequenlyByAsc = frequenlyByAsc.filter(
    (frequencyNums) => frequencyNums !== undefined
  );

  // get k frenquent elements

  for (let i = frequenlyByAsc.length - 1; i >= 0; i--) {
    frequenlyByAsc[i].forEach((num) => {
      if (res.length === k) {
        return res;
      }
      res.push(num);
    });
  }

  return res;
};

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
