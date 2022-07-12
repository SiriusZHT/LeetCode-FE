// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    function helper(temp, start) {
        if(temp.length > 4) {
            return;
        }
        if(temp.length === 4 && start >= s.length) {
            res.push(temp.join('.'));
            return;
        }
        for(let i = start + 1; i <= s.length; i++) {
            let str = s.substring(start, i);
            if(str.length > 3) continue;
            if(str.length !== 1 && str[0] == 0) continue;
            if(str > 255) continue;
            temp.push(str);
            helper(temp, i);
            temp.pop();
        }
    }
    helper([], 0);
    return res;
};