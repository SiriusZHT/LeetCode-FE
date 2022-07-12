// 剑指 Offer 59 - II. 队列的最大值
// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

// 若队列为空，pop_front 和 max_value 需要返回 -1

// 示例 1：

// 输入: 
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
// 示例 2：

// 输入: 
// ["MaxQueue","pop_front","max_value"]
// [[],[],[]]
// 输出: [null,-1,-1]


var MaxQueue = function () {
  this.queue = [];
  // 当前单调队列
  this.monotonicQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  // 既然是单调队列，并且是单调递减的，那队列的第0个元素肯定是最大的
  if (this.monotonicQueue.length) return this.monotonicQueue[0];
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value);
  // 将前面小于自己的元素都删除，保持当前队列的单调递减性
  while (
    this.monotonicQueue.length &&
    this.monotonicQueue[this.monotonicQueue.length - 1] < value
  )
    this.monotonicQueue.pop();
  this.monotonicQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  // 队列中没有元素了
  if (!this.queue.length) return -1;
  // 如果当前要弹出的元素正好是单调队列的最大值，也需要相应的把它从单调队列中弹出
  const val = this.queue.shift();
  if (val == this.monotonicQueue[0]) this.monotonicQueue.shift();
  return val;
};
