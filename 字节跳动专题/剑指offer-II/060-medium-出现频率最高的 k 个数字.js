// 剑指 Offer II 060. 出现频率最高的 k 个数字
// 给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。

 

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
 

// 提示：

// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 

// 进阶：所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

 

// 注意：本题与主站 347 题相同：https://leetcode-cn.com/problems/top-k-frequent-elements/

// 哈希表可以用来统计数组中的数字出现的频率，哈希表的键是数组中出现的数字，而值是数字出现的频率
// 用一个最小堆存储频率最高的k个数字，堆中的每个元素是数组中的数字及其在数组中出现的次数
// 由于比较的是数字的频率，因此最小堆比较元素的规则是让频率最低的数字位于堆的顶部
// 用哈希表统计数组中每个数字出现的频率
// 逐一扫描哈希表中每个数字到频率的映射，以便找到频率最高的k个数字
// 如果最小堆中的元素的数目小于k，直接将从数字到频率的映射添加到最小堆中
// 如果最小堆中已经有k个元素，比较待添加数字的频率和位于堆顶的数字的频率；如果待添加数字的频率低于或等于堆顶的数字的频率，那么堆中的k个数字的频率都比待添加的数字的频率高，它不可能是k个频率最高的数字中的一个，直接忽略
// 如果待添加的数字的频率高于堆顶的数字的频率，那么删除堆顶的数字（最小堆中频率最低的数字），并将待添加的数字添加到最小堆中

// 最小堆
class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a[1] - b[1];
    this.heapify();
  }
  // 建堆
  heapify() {
    if (this.size() < 2) return;
    // 将每个元素插入，往上冒到合适位置
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }
  // 获得堆顶元素
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }
  // 往小顶堆中插入元素
  offer(value) {
    this.data.push(value);
    // 在最后的位置插入且向上冒泡
    this.bubbleUp(this.size() - 1);
  }
  // 移除顶堆元素
  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      // 最末尾元素放到堆顶
      this.data[0] = last;
      // 向下调整直至放到合适位置
      this.bubbleDown(0);
    }
    return result;
  }

  bubbleUp(index) {
    while (index > 0) {
      // 获得父节点索引
      const parentIndex = (index - 1) >> 1;
      // 如果要调整的节点比父节点的值还要小，就需要一直往上冒
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        // 交换位置往上冒
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      // 获得要调整的节点的左子节点和右子节点的索引
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      // 如果左/右子节点的值小于当前要调整的节点的值
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      // 则要交换
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }
  // 交换元素
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }
  // 获得堆大小
  size() {
    return this.data.length;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numToCount = new Map();
  for (let num of nums) {
    numToCount.set(num, (numToCount.get(num) || 0) + 1);
  }
  let minHeap = new MinHeap();
  for (let a of numToCount.entries()) {
    if (minHeap.size() < k) {
      minHeap.offer(a);
    } else if (a[1] > minHeap.peek()[1]) {
      minHeap.poll();
      minHeap.offer(a);
    }
  }
  let result = [];
  for (let a of minHeap.data) {
    result.push(a[0]);
  }
  return result;
};