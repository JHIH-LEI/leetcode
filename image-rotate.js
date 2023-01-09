/**
 * 思路：
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 思路，第一排會變成最後一列，第二排變成倒數第二列，最後一排變成第一列
  // 那就先讓排變成列, 對角線交換
  // 1 2 3
  // 4 5 6
  // 7 8 9

  // 1 4 7
  // 2 5 8
  // 3 6 9

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix.length; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  // 最用2 pointer兩兩交換
  for (let row = 0; row < matrix.length; row++) {
    let l = 0;
    let r = matrix.length - 1;
    while (l < r) {
      const temp = matrix[row][l];
      matrix[row][l] = matrix[row][r];
      matrix[row][r] = temp;
      l++;
      r--;
    }
  }
};
