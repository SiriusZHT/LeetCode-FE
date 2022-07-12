// 146. LRU 缓存
// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

 

// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4

// 方法一：双向链表
class ListNode {
    constructor(key, value) {//双向链表的单个节点
        this.key = key
        this.value = value
        this.next = null //指向后一个节点
        this.prev = null //指向前一个节点
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity //容量
        this.hashTable = {} //存放键值对信息
        this.count = 0 //键值对数量
        this.dummyHead = new ListNode() //dummy头节点 方便在链表从开始的地方插入
        this.dummyTail = new ListNode()	//dummy尾节点 方便在链表从末尾删除
        this.dummyHead.next = this.dummyTail //dummyHead和dummyTail相互连接
        this.dummyTail.prev = this.dummyHead
    }

    get(key) {
        let node = this.hashTable[key]//查找哈希表中的键值对
        if (node == null) return -1 //不存在该键值对 返回-1
        this.moveToHead(node) //移动到链表头
        return node.value
    }

    put(key, value) {
        let node = this.hashTable[key] //哈希表中查找该键值对
        if (node == null) {
            let newNode = new ListNode(key, value) //不存在就创建节点
            this.hashTable[key] = newNode //加入哈希表
            this.addToHead(newNode) //加入链表头
            this.count++ //节点数+1
            if (this.count > this.capacity) { //超过容量 从队尾删除一个
                this.removeLRUItem()
            }
        } else {
            node.value = value //键值对存在于哈希表中 就更新
            this.moveToHead(node) //移动到队头
        }
    }

    moveToHead(node) {
        this.removeFromList(node)//从链表中删除节点
        this.addToHead(node)//将该节点添加到链表头
    }

    removeFromList(node) {//删除的指针操作
        let tempForPrev = node.prev
        let tempForNext = node.next
        tempForPrev.next = tempForNext
        tempForNext.prev = tempForPrev
    }

    addToHead(node) {//加入链表头的指针操作
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    removeLRUItem() {
        let tail = this.popTail()//从链表中删除
        delete this.hashTable[tail.key]//从哈希表中删除
        this.count--
    }

    popTail() {
        let tailItem = this.dummyTail.prev//通过dummyTail拿到最后一个节点 然后删除
        this.removeFromList(tailItem)
        return tailItem
    }
}


// 方法二：map + 迭代器（JS map特性）
// 每次get时，都通过delete和set更新一下插入顺序。
// 每次put时，如果有旧值，通过delete删除，判断当前map的长度是否超出，如果是，删除map的第一个键值对。


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
};