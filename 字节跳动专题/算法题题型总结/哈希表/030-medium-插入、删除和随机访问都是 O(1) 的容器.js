// 剑指 Offer II 030. 插入、删除和随机访问都是 O(1) 的容器
// 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构：

// insert(val)：当元素 val 不存在时返回 true ，并向集合中插入该项，否则返回 false 。
// remove(val)：当元素 val 存在时返回 true ，并从集合中移除该项，否则返回 false 。
// getRandom：随机返回现有集合中的一项。每个元素应该有 相同的概率 被返回。
 

// 示例 :

// 输入: inputs = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// 输出: [null, true, false, true, 2, true, false, 2]
// 解释:
// RandomizedSet randomSet = new RandomizedSet();  // 初始化一个空的集合
// randomSet.insert(1); // 向集合中插入 1 ， 返回 true 表示 1 被成功地插入

// randomSet.remove(2); // 返回 false，表示集合中不存在 2 

// randomSet.insert(2); // 向集合中插入 2 返回 true ，集合现在包含 [1,2] 

// randomSet.getRandom(); // getRandom 应随机返回 1 或 2 
  
// randomSet.remove(1); // 从集合中移除 1 返回 true 。集合现在包含 [2] 

// randomSet.insert(2); // 2 已在集合中，所以返回 false 

// randomSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 
 

// 提示：

// -231 <= val <= 231 - 1
// 最多进行 2 * 105 次 insert ， remove 和 getRandom 方法调用
// 当调用 getRandom 方法时，集合中至少有一个元素
 

// 注意：本题与主站 380 题相同：https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
// 方法一：set
var RandomizedSet = function() {
    this.set = new Set()
}

RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) {
        return false
    }
    this.set.add(val)
    return true
}

RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) {
        return false
    }
    this.set.delete(val)
    return true
}

RandomizedSet.prototype.getRandom = function() {
    const random = parseInt(Math.random()*(this.set.size))
    return [...this.set][random]
}


// 方法二：map + 数组
var RandomizedSet = function() {
    this.map = new Map()
    this.values = []
};

RandomizedSet.prototype.insert = function(val) {
    // 存在
    if(this.map.has(val)) {
        return false
    }
    // 不存在
    this.map.set(val, this.values.length)
    this.values.push(val)
    return true
};

RandomizedSet.prototype.remove = function(val) {
    // 不存在
    if(!this.map.has(val)) {
        return false
    } 
    
    const index = this.map.get(val)
    // 存在且为最后一个元素
    if(index === this.values.length - 1) {
        this.values.pop()
        this.map.delete(val)
    } else { // 存在不为最后一个元素
        const lastValue = this.values.pop()
        this.values[index] = lastValue
        this.map.set(lastValue, index)
        this.map.delete(val)
    }
    return true
};

RandomizedSet.prototype.getRandom = function() {
    const length = this.values.length
    const random = Math.floor(Math.random() * length)
    return this.values[random];
};