## 1. 类组件 this 的绑定问题

- 回顾 JavaScript 的 this 绑定

  - 默认绑定 指向调用的对象，非严格全局，严格 undefined
  - 隐式绑定 只是引用该函数，会导致函数内部丢失上下文
  - 明确绑定 解决隐式绑定问题，.bind(obj) 传上下文 this 防丢失

- 回顾 bind
  - bind 给函数绑定了个传入的对象作为 this，这样就不会通过隐式绑定丢 this
  - xxx.bind(obj) 实现步骤
    - 判断 xxx 是不是函数
    - 获取 xxx.bind 传的参数
    - 如果 obj 没传 那就是 window
    - 返回新函数
    - 判断新函数的 this 是不是构造函数 通过 instance 这个新函数判断
    - 是 就 this 就是 this，不是 this 就是 obj
    - 用 this 执行函数，拼接参数
- 回答
  > - onClick={this.handleClick}会丢失隐式绑定的上下文，被触发时，this 绑定会回退到默认绑定，严格下是 undefined
  > - 解决方式就是在类组件中创建函数时就明确强制绑定 this
  > - 或者箭头函数 onClick={(e) => this.handleClick(e)，因为 this 是有词法约束，可以用封闭的函数上下文或者全局上下文作为 this 值
