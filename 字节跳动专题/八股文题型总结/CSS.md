## 1. Flex 各种属性 和 默认值

## 2. flex-basis 和 宽度 谁更有效

## 3. display:flex 和 display:block/inline-block 区别

## 4. 实现居中的方式

## 5. 动画

## 6. 重绘、重排

重排一定重绘，重绘不一定重排

- 重排触发条件

  - 页面初始渲染
  - 增删 DOM 元素
  - 改变元素位置、尺寸、定位、边框、内容、字体
  - 改变窗口尺寸
  - display:none
  - 添加动画

- 重绘触发条件

  - 重排了
  - 改变颜色
  - 通过 visibility：hidden 隐藏元素
  - 改变 border-style
  - 添加圆角、阴影
  - outline

- 避免

```js
// bad 强制刷新 触发四次重排+重绘
div.style.left = div.offsetLeft + 1 + "px";
div.style.top = div.offsetTop + 1 + "px";
div.style.right = div.offsetRight + 1 + "px";
div.style.bottom = div.offsetBottom + 1 + "px";

// good 缓存布局信息 相当于读写分离 触发一次重排+重绘
var curLeft = div.offsetLeft;
var curTop = div.offsetTop;
var curRight = div.offsetRight;
var curBottom = div.offsetBottom;

div.style.left = curLeft + 1 + "px";
div.style.top = curTop + 1 + "px";
div.style.right = curRight + 1 + "px";
div.style.bottom = curBottom + 1 + "px";
```

## 7. display:none 和 visibility:hidden 区别

1. display:none 是让这个元素失去块元素的效果，其本身这个元素也是直接消失，会影响到布局问题。

2. visibility:hidden:可以让元素消失，属于 css 样式，它只是简单的让元素看不见，但`本身的位置还在`，如果对 div 进行 hidden，那么 div 除了看不见，其他所有的样式都在。
