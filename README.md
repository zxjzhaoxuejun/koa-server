Koa---基于Node.js平台的下一代web开发框架

安装
Koa 依赖 node v7.6.0 或 ES2015及更高版本和 async 方法支持.

你可以使用自己喜欢的版本管理器快速安装支持的 node 版本：

$ nvm install 7
$ npm i koa
$ node my-koa-app.js


使用 Babel 实现 Async 方法
要在 node < 7.6 版本的 Koa 中使用 async 方法, 我们推荐使用 babel's require hook.


require('babel-register');
// 应用的其余 require 需要被放到 hook 后面
const app = require('./app');
要解析和编译 async 方法, 你至少应该有 transform-async-to-generator 或 transform-async-to-module-method 插件.

例如, 在你的 .babelrc 文件中, 你应该有:

{
  "plugins": ["transform-async-to-generator"]
}
你也可以用 env preset 的 target 参数 "node": "current" 替代.

应用程序
Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。 Koa 类似于你可能遇到过的许多其他中间件系统，例如 Ruby 的 Rack ，Connect 等，然而，一个关键的设计点是在其低级中间件层中提供高级“语法糖”。 这提高了互操作性，稳健性，并使书写中间件更加愉快。

这包括诸如内容协商，缓存清理，代理支持和重定向等常见任务的方法。 尽管提供了相当多的有用的方法 Koa 仍保持了一个很小的体积，因为没有捆绑中间件。

必修的 hello world 应用:

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

安装supervisor用来监听服务，不需要每次都重启服务
npm install supervisor --save 

运行命令
supervisor --harmony app
