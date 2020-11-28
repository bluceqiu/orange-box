
# domReady与onload 的区别
domReady 其实就是DOMContentLoaded

## domReady
- dom加载完毕并且解析完毕，可以进行dom操作，此时触发domReady事件

## onload
- 页面所有的css，js都加载解析完毕，执行onload事件

## 结论
- DOMContentLoaded 要早于 onload的执行