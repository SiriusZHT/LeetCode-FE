/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  // 行数、列数
  let rows = mat.length,
    columns = mat[0].length;
  // 总的元素数量
  let totalCount = rows * columns;
  let res = [];
  // vertical 垂直方向，horizontal 水平方向（因为默认是右上，所以水平方向是+1，垂直方向是-1）
  let vertical = -1,
    horizontal = 1;
  // 当前索引行号  列号
  let row = 0,
    column = 0;
  for (let i = 0; i < totalCount; i++) {
    res.push(mat[row][column]);
    // 新的行号和列号
    let newRow = row + vertical,
      newColumn = column + horizontal;
    switch (true) {
      case newColumn >= columns:
        // 右上超出了列的边界了，要进入下一轮对角线，变化成左下方向
        row++;
        vertical = 1;
        horizontal = -1;
        break;
      case newRow < 0:
        // 右上超出了行边界了，要进入下一轮对角线，变化成左下方向
        column++;
        vertical = 1;
        horizontal = -1;
        break;
      case newRow >= rows:
        // 左下超出列边界了，要进入下一轮对角线，变化成右上方向
        column++;
        vertical = -1;
        horizontal = 1;
        break;
      case newColumn < 0:
        // 左下超出行边界了，要进入下一轮对角线，变化成右上方向
        row++;
        vertical = -1;
        horizontal = 1;
        break;
      default:
        // 没有超出索引边界，按照方向遍历就好了
        row = newRow;
        column = newColumn;
    }
  }
  return res;
};
