/**
 * Given a signed 32-bit integer x, return x with its
 * digits reversed. If reversing x causes the value
 * to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store
 * 64-bit integers (signed or unsigned).
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  const limit = Math.pow(2, 31);
  const max = limit - 1;
  const min = -limit;

  while (x !== 0) {
    // 在放入結果之前要先確保不會overflow
    const digit = x % 10;

    if (
      (result === Math.trunc(max / 10) && digit >= max % 10) ||
      result > Math.trunc(max / 10)
    ) {
      result = 0;
      return result;
    } else if (
      (result === Math.trunc(min / 10) && digit <= min % 10) ||
      result < Math.trunc(min / 10)
    ) {
      result = 0;
      return result;
    }

    // 原本的數字向左移一位，加上新的數
    result = result * 10 + digit;
    x = Math.trunc(x / 10);
  }
  return result;
};
