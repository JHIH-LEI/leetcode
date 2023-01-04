/**
 * 題意理解：
 * 給定起始點的row跟col以及想要改變成的目標顏色，只要跟起始點相同值的pixel都要改成目標顏色，改變的方向為上下左
 * 右，不斷延伸此規律
 * 思路：
 * recursion, 直到碰到底，以上來說row 小於0就不執行，下：row 大於長度(m)就不行, 右：col大於長度(n)就不行，
 * 左：col小於0不行
 *
 * 其實這樣寫下來就是一種深度優先搜尋法
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, color) {
  fillColor(image, sr, sc, color, image[sr][sc]);
  return image;
};

const fillColor = function (image, sr, sc, color, startColor) {
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc >= image[0].length ||
    image[sr][sc] !== startColor ||
    // 如果沒加上這行，會造成不斷互相調用，起始點向上recursion時，上面那一點又會檢查上下（起點）左右，
    // 造成一直互相做渲染格子的動作，所以加上這行代表如果已經染成目標顏色，就不要在recursion下去
    image[sr][sc] === color
  ) {
    return;
  }

  image[sr][sc] = color;

  // top
  fillColor(image, sr - 1, sc, color, startColor);

  // bottom
  fillColor(image, sr + 1, sc, color, startColor);

  // left
  fillColor(image, sr, sc - 1, color, startColor);

  // right
  fillColor(image, sr, sc + 1, color, startColor);
};
