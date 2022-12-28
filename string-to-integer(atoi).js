/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0;
  const spaceASCII = " ".charCodeAt();
  const zeroASCII = "0".charCodeAt();
  const nineASCII = "9".charCodeAt();
  const baseMax = Math.pow(2, 31);
  const maxPositive = baseMax - 1;
  const maxPositiveDivideTen = Math.trunc(maxPositive) / 10;
  const maxNegative = -baseMax;
  const maxNegativeDivideTen = Math.trunc(maxNegative) / 10;
  let symbol = 1;

  let currentIndex = 0;
  // skip space
  while (s.charCodeAt(currentIndex) === spaceASCII) {
    console.log("skip space");
    currentIndex++;
  }

  // confirm symbol. if symbol show again after confirm symbol return 0
  if (s.charAt(currentIndex) === "-" || s.charAt(currentIndex) === "+") {
    symbol = s.charAt(currentIndex) === "-" ? -1 : 1;
    currentIndex++;
  }

  while (
    s.charCodeAt(currentIndex) <= nineASCII &&
    s.charCodeAt(currentIndex) >= zeroASCII
  ) {
    console.log(s.charAt(currentIndex));
    if (symbol === -1) {
      if (
        (-result === maxNegativeDivideTen &&
          Number(s.charAt(currentIndex)) <= maxNegative % 10) ||
        -result < maxNegativeDivideTen
      ) {
        return maxNegative;
      }
    }

    if (symbol === 1) {
      if (
        (result === maxPositiveDivideTen &&
          Number(s.charAt(currentIndex)) >= maxPositive % 10) ||
        result > maxPositiveDivideTen
      ) {
        return maxPositive;
      }
    }

    result = result * 10 + Number(s.charAt(currentIndex));
    currentIndex++;
  }

  return result * symbol;
};
