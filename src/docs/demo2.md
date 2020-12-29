# domReady 与 onload 的区别

domReady 其实就是 DOMContentLoaded

## domReady

- dom 加载完毕并且解析完毕，可以进行 dom 操作，此时触发 domReady 事件

## onload

- 页面所有的 css，js 都加载解析完毕，执行 onload 事件

## 结论

- DOMContentLoaded 要早于 onload 的执行
