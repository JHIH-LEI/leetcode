/**
 * 題意：
 * 給個字串，判斷是否是回文（從頭唸到尾跟從尾唸到頭是一樣的字、一樣順序的排列組合字母）
 * 思路：
 * （先轉小寫，必須去除掉non-alphanumeric characters（非英文,數字的））
 * 用兩個指針，[0] === [s.length - 1] , [1] === [s.length - 2]... 直到兩指交換為止，若都沒有不等於的情況出現，則為回文
 * 在比較過程中，若該字不是數字或英文就跳過
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();

  let l = 0;
  let r = s.length - 1;
  const aCharCode = "a".charCodeAt();
  const zCharCode = "z".charCodeAt();
  const zeroCharCode = "0".charCodeAt();
  const nineCharCode = "9".charCodeAt();

  while (l < r) {
    if (
      !(
        (zCharCode >= s.charCodeAt(l) && s.charCodeAt(l) >= aCharCode) ||
        (nineCharCode >= s.charCodeAt(l) && s.charCodeAt(l) >= zeroCharCode)
      )
    ) {
      l++;
      continue;
    }

    if (
      !(
        (zCharCode >= s.charCodeAt(r) && s.charCodeAt(r) >= aCharCode) ||
        (nineCharCode >= s.charCodeAt(r) && s.charCodeAt(r) >= zeroCharCode)
      )
    ) {
      r--;
      continue;
    }

    if (s.charAt(r) !== s.charAt(l)) {
      return false;
    }

    r--;
    l++;
  }

  return true;
};
