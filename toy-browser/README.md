# toy-browser

## Week01

### 本周内容

1. 状态机实践
2. HTTP 请求与解析

文件目录：

- match/match.js
- match/match2.js
- client.js
- server.js
- parser.js

### 有限状态机

https://zh.wikipedia.org/wiki/%E6%9C%89%E9%99%90%E7%8A%B6%E6%80%81%E6%9C%BA

- Moore 机
- Mealy 机

### 字符串 KMP 算法

https://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html


### HTTP 协议内容

参考：《图解 HTTP》

1. HTTP 请求头和 HTTP 响应头的区别？

### Node 标准库

- net



### Parser （编译原理）

待卷

### Promise, await, async

待卷

### 浏览器原理

[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

### 前端脑图

https://www.yuque.com/tcitry/blog/fe-stack

## Week02

### 本周内容

参考：https://html.spec.whatwg.org/#tokenization

1. 解析 HTML
2. 完善 CSS 计算

文件目录：
- parser.js

### 编译原理

1. 什么是 Token ？


## Week03

### 本周内容

1. layout 布局
2. render 渲染

文件目录：
- layout.js
- render.js

## 项目总结

Winter 老师带着我们，从客户端发送请求到接收 HTTP 报文，到解析 HTTP 报文成 Response 对象，然后根据 HTTP Response Body 解析 HTML 和 CSS 内容，最后根据 HTML 和 CSS 进行布局和渲染。实现了一个简单的浏览器发送数据、接收数据到最后展示数据的过程。

