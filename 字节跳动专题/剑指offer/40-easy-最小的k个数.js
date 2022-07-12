// 剑指 Offer 40. 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    // 让数组真实数据从下标1开始，下标0放哨兵，我先初始化为 -1，任意值都行
    arr.unshift(-1);
    sorted(arr, 1, arr.length - 1);
    return arr.slice(1, k + 1);
};

const quickSort = (arr, start, end) => {
    // 数组第一位是哨兵位，存 start 指针对应的数先
    arr[0] = arr[start];

    while(start < end) {
        // right 指针向左遍历，直到找到第一个比 哨兵num 要小的数，因为要替换到左边
        while(start < end && arr[end] >= arr[0])
            end--;
        arr[start] = arr[end];
        // left 指针向右遍历，直到找到第一个比 哨兵num 要大的数，因为要替换到右边
        while(start < end && arr[start] <= arr[0])
            start++;
        arr[end] = arr[start];
    }
    arr[start] = arr[0];
    return start;
}

const sorted = (arr, start, end) => {
    if(start < end) {
        const now = quickSort(arr, start, end);
        sorted(arr, start, now - 1);
        sorted(arr, now + 1, end);
    }
}
