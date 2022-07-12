// 剑指 Offer II 065. 最短的单词编码
// 单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：

// words.length == indices.length
// 助记字符串 s 以 '#' 字符结尾
// 对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等
// 给定一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

 

// 示例 1：

// 输入：words = ["time", "me", "bell"]
// 输出：10
// 解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
// words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// 示例 2：

// 输入：words = ["t"]
// 输出：2
// 解释：一组有效编码为 s = "t#" 和 indices = [0] 。
 

// 提示：

// 1 <= words.length <= 2000
// 1 <= words[i].length <= 7
// words[i] 仅由小写字母组成
 

// 注意：本题与主站 820 题相同： https://leetcode-cn.com/problems/short-encoding-of-words/

// set 
// The best result for the code below is 88ms / 46.1MB (beats 100% / 67%).
var minimumLengthEncoding = function(W) {
    let set = new Set(W)
    for (let word of W)
        if (set.has(word))
            for (let i = 1; i < word.length; i++) 
                set.delete(word.slice(i))
    return Array.from(set).join().length + 1
};

// The best result for the code below is 100ms / 48.0MB (beats 96% / 33%).
var minimumLengthEncoding = function(W) {
    let len = W.length, trie = new Map(), ans = 1
    for (let word of W) {
        let curr = trie, newWord = false
        for (let j = word.length - 1; ~j; j--) {
            let char = word.charAt(j)
            if (!curr.size && !newWord)
                ans -= word.length - j
            if (!curr.has(char))
                newWord = true, curr.set(char, new Map())
            curr = curr.get(char)
        }
        if (newWord) ans += word.length + 1
    }
    return ans
};