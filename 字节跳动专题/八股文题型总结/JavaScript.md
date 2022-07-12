## 1. 闭包和作用域

## 2. 0.1 + 0.2 !== 0.3 原因

## 3. 错误捕获

## 4. websocket

## 5. 事件循环

> `微任务 先于 宏任务`

- 宏任务
  - setTimeout 、setInterval 、UI rendering 、 setImmediate
- 微任务

  - promise 、requestAnimationFrame 、 process.nextTick

- nodejs
  - 宏队列：（从前到后，有一定随机性，比如可能最开始在 setImmediate）
    - timers queue 计时器
    - poll queue 文件 io 操作
    - check queue serImmediate
    - close callbacks queue
  - 微队列：（从前到后）
    - process.nextTick
    - Promise
