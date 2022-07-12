// 剑指 Offer II 067. 最大的异或
// 给定一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

 

// 示例 1：

// 输入：nums = [3,10,5,25,2,8]
// 输出：28
// 解释：最大运算结果是 5 XOR 25 = 28.
// 示例 2：

// 输入：nums = [0]
// 输出：0
// 示例 3：

// 输入：nums = [2,4]
// 输出：6
// 示例 4：

// 输入：nums = [8,10,2]
// 输出：10
// 示例 5：

// 输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// 输出：127
 

// 提示：

// 1 <= nums.length <= 2 * 104
// 0 <= nums[i] <= 231 - 1
 

// 进阶：你可以在 O(n) 的时间解决这个问题吗？

 

// 注意：本题与主站 421 题相同： https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/

const invert = ch => {
  return ch === '0' ? '1' : '0'
}

class Trie {
  constructor() {
    this.nodes = new Map()
  }
  
  add(num) {
    let nodes = this.nodes
    for (const ch of num) {
      const next = nodes.get(ch) ?? new Map()
      nodes.set(ch, next)
      nodes = next
    }
  }
  
  maxXor(num) {
    let ret = []
    let nodes = this.nodes
    for (const ch of num) {
      const key = nodes.has(invert(ch)) ? invert(ch) : ch
      ret.push(key)
      nodes = nodes.get(key)
    }
    ret = ret.join('')
    ret = parseInt(ret, 2)
    num = parseInt(num, 2)
    return ret ^ num
  }
  
}

const findMaximumXOR = nums => {
  let ret = 0
  const len = Math.max(...nums).toString(2).length
  let trie = new Trie()
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].toString(2).padStart(len, 0)
    trie.add(nums[i])
  }
  for (const num of nums) {
    ret = Math.max(trie.maxXor(num), ret)
  }  
  return ret
}