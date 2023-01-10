/**
 * 雙迴圈遍歷每一個格子，找到可以搜索的島嶼
 * 從可搜索的陸地（起始點）出發遍歷上下左右，直到碰到邊界或水為止，遍歷完就在總島嶼變數+1，代表該島嶼探索完畢，繼續找下一個島嶼
 * 因為是無向圖的特性，需要紀錄該島嶼是否被遍歷過，否則會無限遍歷，這裡簡單把數字改成2代表遍歷過了就好，遍歷過就直接跳過
 *
 * 雙迴圈跑完等於已經遍歷過每一個可搜索的島嶼，並計算共有幾個島嶼了
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let total = 0;
  // 找可遍歷的島（起點）
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == 1) {
        search(row, col, grid);
        // 搜索過的土地都會被紀錄成走過，該島嶼全部走過，搜索成功，紀錄這座島
        total++;
      }
    }
  }

  return total;
};

function search(row, col, grid) {
  // 碰到邊界/水/走過的島，就跳過
  if (
    row < 0 ||
    col < 0 ||
    col >= grid[0].length ||
    row >= grid.length ||
    grid[row][col] != 1
  ) {
    return;
  }

  grid[row][col] = 2;

  // 下
  search(row + 1, col, grid);
  // 上
  search(row - 1, col, grid);
  // 右
  search(row, col + 1, grid);
  // 左
  search(row, col - 1, grid);
}
