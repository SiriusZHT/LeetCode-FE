/**
 * 不同路径
 * @param {*} m 行 
 * @param {*} n 列
 * @returns 到行列有多少条路径
 */
function butonglujing(m, n) {
    const arr = new Array(m).fill(0).map(v => new Array(n).fill(0))
    for(let i = 0; i < m; i++) {
        for(let j = 0; j< n; j++) {
            if(i === 0 || j === 0){
                arr[i][j] =  1
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
            }
        }
    }
    return arr[m - 1][n - 1]
}

// console.log(butonglujing(7,3)) // 28

function butonglujing2(grid) {
    const height = grid.length
    const width = grid[0].length
    const arr = new Array(grid.length).fill(0).map(v => new Array(grid[0].length).fill(0))
    
    if(grid[0][0] != 1) arr[0][0] = 1
    else return 0

    for(let i = 0; i < height; i++ ) {
        for(let j = 0; j < width; j++) {
            if(grid[i][j] !== 1){
                if(i === 0 || j === 0) {
                    arr[i][j] = 1
                } else {
                    arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
                }
            } else {
                arr[i][j] = 0
            }
        }
    }
    return arr[height - 1][width - 1]
}

// console.log(butonglujing2([[0,0,0],[0,1,0],[0,0,0]])) // 2
// console.log(butonglujing2([[0,1],[0,0]])) // 1

function zuixiaolujinghe(grid) {
    const [height, width] = [grid.length, grid[0].length]
    const arr = new Array(height).fill(0).map(v => new Array(width).fill(0))
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(i - 1 < 0 && j - 1 < 0) {
                arr[i][j] = grid[i][j]
            } else if(i - 1 < 0) {
                arr[i][j] = arr[i][j - 1] + grid[i][j]
            } else if(j - 1 < 0) {
                arr[i][j] = arr[i - 1][j] + grid[i][j]
            } else {
                arr[i][j] = Math.min(arr[i][j - 1] + grid[i][j], arr[i - 1][j] + grid[i][j])
            }
        }
    }
    return arr[height - 1][width - 1]
}

// console.log(zuixiaolujinghe([[1,3,1],[1,5,1],[4,2,1]])) // 7
// console.log(zuixiaolujinghe([[1,2,3],[4,5,6]])) // 12

function sanjiaoxingzuixiaolujinghe(sanjiaoxing) {
    const arr = [...sanjiaoxing]
    let minSum = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(i === 0 && j === 0) {
                arr[i][j] = sanjiaoxing[i][j]
            } else if(j === 0) {
                arr[i][j] += arr[i - 1][j]
            } else {
                arr[i][j] += Math.min(arr[i - 1][j] || Number.MAX_SAFE_INTEGER, arr[i - 1][j - 1] || Number.MAX_SAFE_INTEGER)
            }

            if(i === arr.length - 1) {
                minSum = Math.min(arr[i][j], minSum)
            }
        }
    }
    return minSum
}

// console.log(sanjiaoxingzuixiaolujinghe([[2],[3,4],[6,5,7],[4,1,8,3]])) // 11
// console.log(sanjiaoxingzuixiaolujinghe([[-10]])) // -10

function sanjiaoxingzuixiaolujinghe_1(sanjiaoxing) {
    const arr = new Array(sanjiaoxing[sanjiaoxing.length - 1].length).fill(Number.MAX_SAFE_INTEGER)
    let minSum = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < sanjiaoxing.length; i++) {
        for(let j = sanjiaoxing[i].length - 1; j >= 0; j--) {
            if(i === 0 && j === 0){
                arr[j] = sanjiaoxing[i][j]
            } else if(j - 1 < 0) {
                arr[j] = arr[j] + sanjiaoxing[i][j]
            } else {
                arr[j] = Math.min(sanjiaoxing[i][j] + arr[j - 1], sanjiaoxing[i][j] + arr[j])
            }

            if(i === sanjiaoxing.length - 1) {
                minSum = Math.min(minSum, arr[j])
            }
        }
    }
    return minSum
}

// console.log(sanjiaoxingzuixiaolujinghe_1([[2],[3,4],[6,5,7],[4,1,8,3]])) // 11
// console.log(sanjiaoxingzuixiaolujinghe_1([[-10]])) // -10