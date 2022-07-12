// 剑指 Offer II 058. 日程表
// 请实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。

// MyCalendar 有一个 book(int start, int end)方法。它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end。

// 当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生重复预订。

// 每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。

// 请按照以下步骤调用 MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

 

// 示例:

// 输入:
// ["MyCalendar","book","book","book"]
// [[],[10,20],[15,25],[20,30]]
// 输出: [null,true,false,true]
// 解释: 
// MyCalendar myCalendar = new MyCalendar();
// MyCalendar.book(10, 20); // returns true 
// MyCalendar.book(15, 25); // returns false ，第二个日程安排不能添加到日历中，因为时间 15 已经被第一个日程安排预定了
// MyCalendar.book(20, 30); // returns true ，第三个日程安排可以添加到日历中，因为第一个日程安排并不包含时间 20 
 

 

// 提示：

// 每个测试用例，调用 MyCalendar.book 函数最多不超过 1000次。
// 0 <= start < end <= 109
 

// 注意：本题与主站 729 题相同： https://leetcode-cn.com/problems/my-calendar-i/

// 添加事项的时候按照顺序添加进去，查找的时候就能利用二分查找来快速定位区间
// 根据时间区间的开始时间进行排序，通过排序之后能够优化查找我效率
var MyCalendar = function () {
  this.events = [];
};
// 查找要插入的点的最左侧边界
MyCalendar.prototype.findInsertIndex = function (start) {
  var left = 0;
  var right = this.events.length - 1;
  // 左闭右闭区间
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    // 如果要插入的区间的起始点刚好跟当前区间的起始点相同，则找到了要插入的区间位置
    if (this.events[mid][0] === start) {
      return mid;
    } else if (this.events[mid][0] < start) {
      //  在后半段中查找
      left = mid + 1;
    } else {
      // 在前半段中查找
      right = mid - 1;
    }
  }
  return left;
};

MyCalendar.prototype.book = function (start, end) {
  let index = this.findInsertIndex(start);
  if (
    // 当前要插入的区间的起始点小于要插入的区间前一个区间的结束点
    (this.events[index - 1] && start < this.events[index - 1][1]) ||
    // 当前要插入的区间的结束点大于要插入的区间的起始点
    (this.events[index] && end > this.events[index][0])
  ) {
    // 表示有重叠  则不能插入（预订）
    return false;
  }
  this.events.splice(index, 0, [start, end]);
  return true;
};
