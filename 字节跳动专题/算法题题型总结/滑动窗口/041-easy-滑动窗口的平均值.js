// 剑指 Offer II 041. 滑动窗口的平均值
// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

// 实现 MovingAverage 类：

// MovingAverage(int size) 用窗口大小 size 初始化对象。
// double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。
 

// 示例：

// 输入：
// inputs = ["MovingAverage", "next", "next", "next", "next"]
// inputs = [[3], [1], [10], [3], [5]]
// 输出：
// [null, 1.0, 5.5, 4.66667, 6.0]

// 解释：
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // 返回 1.0 = 1 / 1
// movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
// movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3
 

// 提示：

// 1 <= size <= 1000
// -105 <= val <= 105
// 最多调用 next 方法 104 次
 

// 注意：本题与主站 346 题相同： https://leetcode-cn.com/problems/moving-average-from-data-stream/

// nums当作队列的功能，初始化的时候使用者会告诉队列中窗口最大的长度size
// 当窗口没满的时候，把元素加入队列同时sum中记录和值即可，
// 当窗口满了的时候，把队首元素出队列，同时更新sum中的值（出队列的元素需从sum中减去）
// 根据题意“计算滑动窗口里所有数字的平均值”，所以是用sum/窗口大小

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.nums = [];
  this.capacity = size;
  this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.nums.push(val);
  this.sum += val;
  if (this.nums.length > this.capacity) {
    this.sum -= this.nums.shift();
  }
  return this.sum / this.nums.length;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/qIsx9U/solution/jian-zhi-offer-zhuan-xiang-tu-po-ban-shu-szdl/