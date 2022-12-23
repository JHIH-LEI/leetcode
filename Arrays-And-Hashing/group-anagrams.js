/**
 * 思路：
 * 相同字母組合並且同個字母出現次數皆相同，就會在同一組
 * 可以把次數紀錄結果作為hashMap的key，value存放符合的字串們
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = new Map();

  strs.forEach((str) => {
    const counts = new Array(26).fill(0);
    // for (let i = 0; i < str.length; i++) {
    //   const charCountIndex = str.charCodeAt(i) - "a".charCodeAt(0);
    //   counts[charCountIndex]++;
    // }

    for (const char of str) {
      counts[char.charCodeAt() - "a".charCodeAt()]++;
    }

    const key = counts.toString();
    const list = result.get(key) || [];
    list.push(str);
    result.set(key, list);
  });

  return Array.from(result.values());
};

/**
 * O(n^3) 搜集字,檢查組,比較counts
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = [];
  // 第幾組, 字 -> 幾次
  const groupCharMap = new Map();

  // 用組別的方式
  // 第一組，有什麼字母，字母出現幾次
  // 迭代到的時候去看目前有的組別，知道說是不是屬於任一組，不是的話就自成一組
  strs.forEach((str) => {
    const map = new Map();

    // 搜集
    for (const char of str) {
      if (!map.has(char)) {
        map.set(char, 1);
      } else {
        map.set(char, map.get(char) + 1);
      }
    }

    // 看看屬於哪一組

    // 最慘的情況下是每一個單字都自成一組，那就有100組，而且每一個字串有10000
    const belongedGroup = belongToGroup(str, map, groups, groupCharMap);
    if (belongedGroup === -1) {
      // 新的組
      groups.push([str]);
      groupCharMap.set(groups.length - 1, map);
    } else {
      groups[belongedGroup].push(str);
    }
  });

  return groups;
};

function belongToGroup(newString, newStringMap, groups, groupCharMap) {
  let belongedGroup = -1;

  groups.forEach((group, i) => {
    const string = group[0];

    // 這兩格字是否互為anagrams
    if (string.length !== newString.length) {
      return -1;
    }

    const iGroupCharMap = groupCharMap.get(i);

    for (const [char, times] of iGroupCharMap) {
      if (!newStringMap.has(char)) {
        return -1;
      } else {
        if (newStringMap.get(char) !== times) {
          return -1;
        }
      }
    }

    belongedGroup = i;
  });
  return belongedGroup;
}
