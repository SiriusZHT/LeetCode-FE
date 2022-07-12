// 剑指 Offer 11. 旋转数组的最小数字
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

function minArray(numbers) {
    let l = 0, r = numbers.length - 1;
    while(l < r) {
        let m = l + Math.floor((r - l) / 2);
        if(numbers[m] > numbers[r]) {
            l = m + 1;
        } else if(numbers[m] === numbers[r]){
            r = r - 1;
        } else {
            r = m;
        }
    }
    return numbers[r];
};

function minArray(numbers) {
    let l = 0, r = numbers.length - 1;
    while(l + 1 < r) {
        let m = l + Math.floor((r - l) / 2);
        if(numbers[m] > numbers[r]) {
            l = m + 1;
        } else if(numbers[m] === numbers[r]){
            r = r - 1;
        } else {
            r = m;
        }
    }
    if(numbers[l] < numbers[r]) {
        return numbers[l];
    } else {
        return numbers[r];
    }

};