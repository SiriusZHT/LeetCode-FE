// 954. 二倍数对数组
// 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。

 

// 示例 1：

// 输入：arr = [3,1,3,6]
// 输出：false
// 示例 2：

// 输入：arr = [2,1,2,6]
// 输出：false
// 示例 3：

// 输入：arr = [4,-2,2,-4]
// 输出：true
// 解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
 

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
    // 看例子
    // A[2 * i + 1] = 2 * A[2 * i] 就是说能找到length / 2 个pair
    // 那就尝试着找pair
    // 
    if (A.length % 2 !== 0) {
        return false;
    }
    A.sort((a, b) => a - b);
    const map = new Map();
    for (const a of A) {
        if (a === 0) {
            continue;
        }
        if (!map.has(a)) {
            map.set(a, 0);
        }
        map.set(a, map.get(a) + 1);
    }
    
    for (const a of A) {
        if (a === 0 || map.get(a) === 0) {
            continue;
        }
        const target = a < 0 ? parseInt(a / 2) : a * 2;
        if (a < 0 && a % 2 !== 0 || !map.has(target) || map.get(a) > map.get(target) ) {
            return false;
        }
        map.set(target, map.get(target) - map.get(a));
         map.set(a, 0);
    }
    return true;
};