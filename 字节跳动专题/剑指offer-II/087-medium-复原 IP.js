// 剑指 Offer II 087. 复原 IP Copy for Markdown
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。

// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

 

// 示例 1：

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 示例 2：

// 输入：s = "0000"
// 输出：["0.0.0.0"]
// 示例 3：

// 输入：s = "1111"
// 输出：["1.1.1.1"]
// 示例 4：

// 输入：s = "010010"
// 输出：["0.10.0.10","0.100.1.0"]
// 示例 5：

// 输入：s = "10203040"
// 输出：["10.20.30.40","102.0.30.40","10.203.0.40"]
 

// 提示：

// 0 <= s.length <= 3000
// s 仅由数字组成
 

// 注意：本题与主站 93 题相同：https://leetcode-cn.com/problems/restore-ip-addresses/ 

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    const bt = (temp, start) => {
        // . 分开的段数越界
        if(temp.length > 4) {
            return;
        }
        // . 分开的段数刚好符合要求 且 s 全遍历完
        if(temp.length === 4 && start === s.length) {
            res.push(temp.join('.'));
            return;
        }
        // i = start + 1 和 i <= s.length 因为 substring 左开右闭
        for(let i = start + 1; i <= s.length; i++) {
            let str = s.substring(start, i);
            // 用 + 强转 number
            if(str.length > 3 || +str > 255) break;
            // 以 0 开头的 len > 1 的数
            if(str.length > 1 && str[0] === '0') break;
            temp.push(str);
            // 因为左闭右开 i 已经取到 corner 外了 所以不用 + 1
            bt(temp, i);
            temp.pop();
        }
    }
    bt([], 0);
    return res;
};