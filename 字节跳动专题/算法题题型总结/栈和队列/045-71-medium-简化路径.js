// 示例 1：
// 输入：path = "/home/"
// 输出："/home"
// 解释：注意，最后一个目录名后面没有斜杠。 
// 示例 2：
// 输入：path = "/../"
// 输出："/"
// 解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。
// 示例 3：
// 输入：path = "/home//foo/"
// 输出："/home/foo"
// 解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let helperStack = ['/'];
  // 会出现字符 ''，pathname，.,.. 等
  let pathArr = path.split('/');
  console.log(pathArr);
  for(let i =0; i< pathArr.length; i++) {
    switch(pathArr[i]) {
      case '': {
        // donothing
        break;
      }
      case '.': {
        // donothing
        break;
      }
      case '..': {
        if (helperStack.length > 1) {
          let popVal = helperStack.pop();
          if (popVal === '/') {
            helperStack.pop()
          }
        }
        break;
      }
      default: {
        let lastVal = helperStack[helperStack.length - 1];
        if (lastVal !== '/') {
          helperStack.push('/');
        }
        helperStack.push(pathArr[i]);
      }
    }
  }
  if (helperStack.length > 1 && helperStack[helperStack.length -1] === '/') {
    helperStack.pop();
  }
  return helperStack.join('');
};