# 一个简单的侦听窗口变化的分发函数，根据指定的函数判断窗口类型，
------
一个简单的侦听窗口变化的分发函数，根据指定的函数判断窗口类型，然后再根据类型触发窗口类型变化事件
简单来说就是用来辅助做页面自适应的

### [在线演示demo](https://rzl.github.io/window-type/demo/index.html)

### 调试测试
1.cnpm install
2.cnpm run dev

### 编译
1.cnpm run build

### 其他项目引用
1.cnpm install window-type -S

```js
import WindowType  from 'window-type'

var wt = new WindowType()
```

### 使用方法，初始化
```js
<body>
  <div>type</div>
  <div id="type"></div>
  <div>typeChange</div>
  <div id="typeChange"></div>
</body>
<script src="../dist/window-type.js"></script>
<script type="text/javascript">
var type = document.getElementById('type')
var typeChange = document.getElementById('typeChange')
var wt = new WindowType()
wt.patch('element')
wt.on('xl', (t) => {
  type.innerHTML = 'xl'
})
wt.on('lg', (t) => {
  type.innerHTML = 'lg'
})
wt.on('md', (t) => {
  type.innerHTML = 'md'
})
wt.on('sm', (t) => {
  type.innerHTML = 'sm'
})
wt.on('xs', (t) => {
  type.innerHTML = 'xs'
})
wt.on('change', (t) => {
  typeChange.innerHTML = t
})
wt.emit(wt.getType())

</script>
    
```
