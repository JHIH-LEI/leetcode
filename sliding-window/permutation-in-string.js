/**
 * s1 和 s2 是否是 anagram, 比較兩個hash map(s1, window)是否一樣
 * sliding window,保持s2的窗口大小等於s1, 走完如果沒有找到anagram, 返回false
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const windowSize = s1.length;
  if (windowSize > s2.length) {
    return false;
  }
  const targetCount = Array.from({ length: 26 }, () => 0); // index 0 = a的次數
  const windowCount = Array.from({ length: 26 }, () => 0);

  // init window
  const offset = "a".charCodeAt();
  for (let i = 0; i < windowSize; i++) {
    const index = s1.charCodeAt(i) - offset;
    const windowIndex = s2.charCodeAt(i) - offset;
    targetCount[index]++;
    windowCount[windowIndex]++;
  }

  // sliding window
  let r = windowSize;
  let l = 0;

  while (r < s2.length) {
    // 前一個-,後一個+
    let match = 0;
    for (let i = 0; 26 > i; i++) {
      if (targetCount[i] === windowCount[i]) {
        match++;
      }
    }

    if (match === 26) {
      return true;
    }

    // 更新windowCount
    l++;
    const dropCharIndex = s2.charCodeAt(l - 1) - offset;
    const newCharIndex = s2.charCodeAt(r) - offset;
    windowCount[newCharIndex]++;
    windowCount[dropCharIndex]--;
    r++;
  }

  // 檢查最後一次的window
  let match = 0;
  for (let i = 0; 26 > i; i++) {
    if (targetCount[i] === windowCount[i]) {
      match++;
    }
  }

  if (match === 26) {
    return true;
  }

  return false;
};
