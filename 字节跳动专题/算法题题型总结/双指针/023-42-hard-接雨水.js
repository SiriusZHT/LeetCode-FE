// 【字节002】42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 两个是不行的
    if(height < 3) return 0;
    let [left, right, leftMax, rightMax, count] = 
        [0, height.length - 1, height[0], height[height.length - 1], 0];
    // 首尾双指针
    while(left < right) {
        // 右大 把右当做墙 只要 当前左 < 最大左构成的墙 就能接到 左墙 - 当前左 的雨水
        if(height[left] < height[right]) {
            if(height[left] < leftMax) {
                count += leftMax - height[left];
            } else {
                leftMax = height[left];
            }
            left++;
        } else {
            if(height[right] < rightMax) {
                count += rightMax - height[right];
            } else {
                rightMax = height[right];
            }
            right--;
        }
    }
    return count;
}