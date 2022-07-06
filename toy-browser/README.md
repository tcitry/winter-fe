## toy-browser

## 项目场景

玩具浏览器，目的是通过客户端请求服务器，服务器返回 HTML 代码，核心是用 toy-browser 来对 HTML 进行解析和渲染。

浏览器的工作原理：
- 解析 HTML 文本（parse）
- 计算属性（compute）
- 布局（layout）
- 绘制（render）

## 文件结构

先看懂这两个状态机实现的 match 方法，用来测试匹配字符串，为词法扫描做准备。
- match/match.js 字符串是否匹配`abcd`
- match/match2.js 字符串是否匹配`abcabx`

client.js
- class Request 发起请求
- class ResponseParser 处理返回的 HTML 文本形成语法树
- class ChunkedBodyParser Body 文本处理

server.js
- 返回一段 HTML 代码

parser.js 扫描 server 返回的代码
- 输入解析出来的 Body 文本
- 按 HTML 的语法通过词法解析成 Dom 树 https://html.spec.whatwg.org/#tokenization

layout.js 布局（以排版技术 flex 为例）
- 得到 Dom 树后，根据 CSS 属性进行计算

render.js 绘制

viewport.jpg 通过检查图片的布局来校验整个程序正确性


## 运行项目

```shell
# 启动服务端
node server.js

# 启动客户端
node client.js
```

## 参考

脑图 https://www.yuque.com/tcitry/blog/fe-stack

tokenization https://html.spec.whatwg.org/#tokenization

[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

KMP https://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html

《图解 HTTP》

https://zh.wikipedia.org/wiki/%E6%9C%89%E9%99%90%E7%8A%B6%E6%80%81%E6%9C%BA

- Moore 机
- Mealy 机

https://www.npmjs.com/package/images

https://www.npmjs.com/package/css

