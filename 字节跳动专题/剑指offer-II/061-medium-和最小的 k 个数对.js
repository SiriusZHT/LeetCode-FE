// 剑指 Offer II 061. 和最小的 k 个数对
// 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。

// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

// 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

 

// 示例 1:

// 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// 输出: [1,2],[1,4],[1,6]
// 解释: 返回序列中的前 3 对数：
//     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// 示例 2:

// 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// 输出: [1,1],[1,1]
// 解释: 返回序列中的前 2 对数：
//      [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
// 示例 3:

// 输入: nums1 = [1,2], nums2 = [3], k = 3 
// 输出: [1,3],[2,3]
// 解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
 

// 提示:

// 1 <= nums1.length, nums2.length <= 104
// -109 <= nums1[i], nums2[i] <= 109
// nums1, nums2 均为升序排列
// 1 <= k <= 1000
 

// 注意：本题与主站 373 题相同：https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (nums1.length * nums2.length === 0) return [];
    const heap = new MinHeap(nums1, nums2);
    heap.push([0,0]);
    const result = [];
    while (!heap.isEmpty() && result.length < k) {
        const [i, j] = heap.pop();
        result.push([nums1[i], nums2[j]]);
        if (i + 1 < nums1.length) heap.push([i + 1, j])
        if (j + 1 < nums2.length) heap.push([i, j + 1])
    }
    return result;
};

class MinHeap {
    constructor(nums1, nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.store = [];
        this.seen = new Set();
    }
    
    isEmpty() {
        return this.store.length === 0;
    }
    
    push(value)  {
        const str = value.join('-');
        if (this.seen.has(str)) return;
        this.seen.add(str);
        this.store.push(value);
        this.heapifyUp(this.store.length - 1);
    }
    
    pop() {
        if (this.store.length < 2) return this.store.pop();
        const value = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return value;
    }
    
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            if (this.value(child) < this.value(parent)) {
                this.swap(child, parent);
                child = parent;
            } else {
                return child;
            }
        }
    }
    
    heapifyDown(parent) {
        while (true) {
            const [child1, child2] = [1,2].map((n) => parent * 2 + n).filter((n) => n < this.store.length);
            let child = child1;
            if (child2 && this.value(child2) < this.value(child1)) {
                child = child2;
            }
            if (child && this.value(child) < this.value(parent)) {
                this.swap(child, parent);
                parent = child;
            } else {
                return parent;
            }
        }
    }
    
    value(idx) {
        const [i, j] = this.store[idx];
        return this.nums1[i] + this.nums2[j];
    }
    
    swap(idx1, idx2) {
        [this.store[idx1], this.store[idx2]] = [this.store[idx2], this.store[idx1]]
    }
}