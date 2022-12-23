/**
 * 思路： 希望兩個字串都有一樣的字，同樣的字出現的次數也要相同
 * 先搜集一個字串有的字跟該字出現的次數
 * 迭代另一個字串，如果有找不到的字或是次數超用代表不是anagram
 * 例外： 如果兩字串長度不同，程式會有bug，有可能搜集的字多於要被檢查的字串，但我們希望每一個蒐集到的字都要用到，這時寫的邏輯不會檢查到，所以在一開始需要過濾掉
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = {};

  if (s.length !== t.length) {
    return false;
  }

  for (const char of t) {
    map[char] = map[char] === undefined ? 1 : map[char] + 1;
  }

  for (const char of s) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }

  return true;
};

/**
 * 思路： 希望兩個字串都有一樣的字，同樣的字出現的次數也要相同
 * 先搜集一個字串有的字跟該字出現的次數
 * 迭代另一個字串，如果有找不到的字或是次數超用代表不是anagram
 * 例外： 如果兩字串長度不同，程式會有bug，有可能搜集的字多於要被檢查的字串，但我們希望每一個蒐集到的字都要用到，這時寫的邏輯不會檢查到，所以在一開始需要過濾掉
 * 使用雙指針的方式，期望能加快處理，但是程式邏輯變得比較複雜，因為需要判斷是否指到同一個字，避免重複加減
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  const map = {};

  if (s.length !== t.length) {
    return false;
  }

  let r = t.length - 1;
  let l = 0;

  while (l <= r) {
    const rightChar = t.charAt(r);
    if (l === r) {
      map[rightChar] = map[rightChar] === undefined ? 1 : map[rightChar] + 1;
      l++;
      r--;
      continue;
    }
    const leftChar = t.charAt(l);
    map[rightChar] = map[rightChar] === undefined ? 1 : map[rightChar] + 1;
    map[leftChar] = map[leftChar] === undefined ? 1 : map[leftChar] + 1;
    l++;
    r--;
  }

  r = s.length - 1;
  l = 0;

  while (l <= r) {
    const rightChar = s.charAt(r);
    if (l === r) {
      if (!map[rightChar]) {
        return false;
      }
      map[rightChar]--;
      l++;
      r--;
      continue;
    }
    const leftChar = s.charAt(l);
    if (!map[rightChar]) {
      return false;
    }
    map[rightChar]--;
    if (!map[leftChar]) {
      return false;
    }
    map[leftChar]--;
    l++;
    r--;
  }

  return true;
};
