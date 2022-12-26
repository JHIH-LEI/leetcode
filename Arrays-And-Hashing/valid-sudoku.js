/**
 * 題意：
 * 給定一個9 * 9的數獨，有些空格已經被填好（空格用.表示），需要去驗證這些填好的數字是否合法
 * 同一row不能有相同的數字
 * 同一col不能有相同的數字
 * 3 * 3 內不能有相同的數字
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = new Map([
    [0, new Set()],
    [1, new Set()],
    [2, new Set()],
    [3, new Set()],
    [4, new Set()],
    [5, new Set()],
    [6, new Set()],
    [7, new Set()],
    [8, new Set()],
  ]); // 第幾個row, 有的數字：[] 索引代表該數字，有就是true

  const colMap = new Map([
    [0, new Set()],
    [1, new Set()],
    [2, new Set()],
    [3, new Set()],
    [4, new Set()],
    [5, new Set()],
    [6, new Set()],
    [7, new Set()],
    [8, new Set()],
  ]);

  const subBoardMap = new Map([
    ["00", new Set()],
    ["01", new Set()],
    ["02", new Set()],
    ["10", new Set()],
    ["11", new Set()],
    ["12", new Set()],
    ["20", new Set()],
    ["21", new Set()],
    ["22", new Set()],
  ]); // 分九區，可以想成3 * 3的表格，borad[Math.floor(r/3)][Math.floor(c/3]就可以知道在3*3的哪一格。 'rowCol' : []

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const num = board[row][col];
      if (num !== ".") {
        // 檢查
        const subBoardRow = Math.floor(row / 3);
        const subBoardCol = Math.floor(col / 3);
        const subBoardMapKey = `${subBoardRow}${subBoardCol}`;
        if (
          rowMap.get(row).has(num) ||
          colMap.get(col).has(num) ||
          subBoardMap.get(subBoardMapKey).has(num)
        ) {
          return false;
        } else {
          rowMap.get(row).add(num);
          colMap.get(col).add(num);
          subBoardMap.get(subBoardMapKey).add(num);
        }
      }
    }
  }
  return true;
};
