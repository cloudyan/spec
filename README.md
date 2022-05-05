<!-- @format -->

# spec

这是一份前端开发规范。

良好的开发规范可以提高开发者的**舒适度**以及代码的**可维护程度**, 而这也是好代码(高质量代码)的前提。

如何执行落地？

集成到 vscode, webpack 以及 CI 流程上。

## 什么是高质量代码?

我觉得回答这个问题，应该从两个方面考虑。

1. 从业务角度考虑。首先，在公司开发一款软件，应该是业务在驱动。所以，从这个角度来说，代码第一个应该满足的是业务需求，如果连最基本的业务需求都满足不了，别的也就无从谈起。
2. 从纯代码层面考虑。这里总结的也就是这个问题。

那从纯代码层面来说，什么样的代码才是好代码(高质量代码)呢？

通常会有以下几个**判断标准**：

- **可维护性**: 在当前代码的基础上，做修正或改进，是否容易做到？
- **可扩展性**: 当有了新的需求，在不对当前代码做大的改动的前提下，是否容易满足？
- **可复用性**: 代码是否能较容易的迁移到别的地方使用？不重复造轮子。
- **可读性**: 当其他人阅读代码，或者过一段时间自己再阅读，是否容易理解？
- **灵活性**: 是否足够灵活，易调整？
- **简洁性**: 是否简单，不复杂？
- **可测试性**: 是否容易测试正确性？

好的代码，不一定要满足以上所有的条件。但一条也不满足的代码，基本上就不是好代码了。

- [spec](#spec)
  - [什么是高质量代码?](#什么是高质量代码)
  - [如何编写高质量代码](#如何编写高质量代码)
  - [基本原则](#基本原则)
    - [写在规则前面的话](#写在规则前面的话)
  - [编码规范](#编码规范)
    - [文件结构](#文件结构)
      - [代码文件](#代码文件)
      - [项目目录](#项目目录)
    - [编码风格](#编码风格)
    - [命名规范](#命名规范)
    - [注释规范](#注释规范)
      - [原则](#原则)
    - [工具检查](#工具检查)
    - [图片规范](#图片规范)
    - [持续重构](#持续重构)
  - [移动端优化](#移动端优化)
  - [工具箱](#工具箱)
    - [编辑器](#编辑器)
    - [第三方工具](#第三方工具)
  - [其他](#其他)
    - [相关文档](#相关文档)
    - [参考](#参考)

---

## 如何编写高质量代码

无规则不成方圆，写代码也是如此。要写出好的代码，需要遵守一些规则，主要有以下几个方面：

- 基本原则
- 编码规范
  - 文件结构
  - 命名规范
  - 代码风格
  - 注释规范
- 持续重构

## 基本原则

要一次次的经受高质量代码判断标准的拷问?

### 写在规则前面的话

> **项目的可维护性第一**。我们并不是一个人在做事，项目的维护和二次开发可能是直接或间接的团队合作。好的可维护性可以从四个方面获得：

- 代码的松耦合，高度模块化，将页面内的元素视为一个个模块，相互独立，尽量避免耦合过高的代码，从 HTML、CSS、JavaScript 三个层面考虑模块化，
- 良好的注释。
- 注意代码的弹性，在性能和弹性的选择上，一般情况下以弹性为优先考虑条件，在保证弹性的基础上，适当优化性能。
- 严格按照规范编写代码。

## 编码规范

### 文件结构

#### 代码文件

- 代码文件统一使用 **无 BOM 头的 utf-8**(utf-8 without BOM) 的编码方式

#### 项目目录

资源目录 assets

```bash
.
├── src
│   ├── assets
│   │   ├── img
│   │   └── svg
│   └── pages
└── package.json
```

### 编码风格

- [html](./docs/coding-style/html/readme.md)
- [css](./docs/coding-style/css/readme.md)
  - [less](./docs/coding-style/css/less.md)
- [javascript](./docs/coding-style/javascript/readme.md)
- [typescript](./docs/coding-style/typescript/readme.md)
- [react](./docs/coding-style/react/readme.md)
- [vue](./docs/coding-style/vue/readme.md)

### 命名规范

- 使用英语
- 选择一种命名约定并遵循它
- SID 原则：简单、直观、描述准确

关于命名, 选择一种命名约定并遵循它。

- camelCase
- PascalCase
- snake_case

命名规则

- [naming 概述](./docs/naming/readme.md)
- 分类
  - JS 命名
    - 变量, 方法, 参数 格式:`camelCase`
    - 类 `PascalCase`
    - 常量 全部字母大写，单词间下划线 `_` 分隔
  - css 命名
    - BEM 命名法
  - 文件&文件夹命名
    - 全部小写, 单词间连字符 `-` 分隔, 格式: `snake-case`
      - 文件夹命名
      - 组件文件
      - js,css
  - url pathname 路径命名
    - 全部小写, 同 `snake-case`
  - url query 参数命名
    - 建议 `camelCase`
    - 允许 `snake_case`

### 注释规范

#### 原则

- As short as possible（如无必要，勿增注释）：尽量提高代码本身的清晰性、可读性。
- As long as necessary（如有必要，尽量详尽）：合理的注释、空行排版等，可以让代码更易阅读、更具美感。

### 工具检查

书写规范/代码格式检查通过 lint 工具检查实现自动化校验约束。

直接对接 cook-lint 对接文档

- [eslint](./docs/rules/eslint/readme.md)
- [prettier](./docs/rules/prettier/readme.md)
- [stylelint](./docs/rules/stylelint/readme.md)
- [commitlint](./docs/rules/commitlint/readme.md)
- [husky 辅助](./docs/rules/husky/readme.md)

### 图片规范

- 图片格式
- 图片大小
- 图片质量
- 图片引入

### 持续重构

- 没有程序员能一次就写出完美的代码，而是需要通过不停的重构来完善代码，提升质量。
- 重构就是在不改变软件系统外部行为的前提下，改善它的内部结构。
- 重构可以使软件更容易地被修改和被理解。通过不断地改进软件设计以达到简单设计的目标，减少由于设计与业务的不匹配带来的架构与设计腐化。

重构能干什么

- 重构能改善软件设计
- 重构使软件更易理解
- 重构有助于找到 Bug
- 重构有助于提高自我编程能力
- 重构有助于加深理解代码
- 重构能适应需求变更

重构划分

- 大重构: 设计原则，设计模式
- 小重构: 编码规范

随着项目需求的增加变化，代码结构，代码量也都会跟着变化。代码**重构**需要我们不断的从整体架构的角度审视整个项目代码的结构，是否已经变得混乱无序。只有不断的对代码进行重构，才能使得代码持续的具有可维护性，可读性等标准。

重构不要盲目、过度设计，不要牺牲可维护性、可扩展性。简单的有时就是最好的。

## 移动端优化

移动端相关问题处理

## 工具箱

### 编辑器

- [x] [editorconfig](./docs/editor/editorconfig.md)
- [ ] [vscode 配置](./docs/editor/vscode.md)

### 第三方工具

## 其他

### 相关文档

- [编码规范 by @mdo](http://codeguide.bootcss.com/)
- [Baidu 前端规范](https://github.com/ecomfe/spec)
- [Qunar 前端规范](https://github.com/doyoe/html-css-guide)
- [常用的 HTML 头部标签](https://github.com/yisibl/blog/issues/1)
- [Google Style Guide](http://docs.kissyui.com/1.4/docs/html/tutorials/style-guide/google-js-style.html)
- [Amazeui Style Guide](http://amazeui.org/getting-started/)
- [CSS Guidelines](http://cssguidelin.es/)
- [20 Snippets You should be using from Html5 Boilerplate](http://www.1stwebdesigner.com/snippets-html5-boilerplate/)
- [谈谈 CSS 性能](http://www.w3.org/2015/Talks/0109-CSSConf-xq/)
- [Web 动画性能指南](http://alexorz.github.io/animation-performance-guide/)
- [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](http://www.paulirish.com/2012/- why-moving-elements-with-translate-is-better-than-posabs-topleft/)
- [High Performance Animations](http://www.html5rocks.com/zh/tutorials/speed/high-performance-animations/)
- [jQuery Standards](http://lab.abhinayrathore.com/jquery-standards/)
- [Learn jQuery](http://learn.jquery.com/about-jquery/)
- [无线 Web 开发经验谈](http://am-team.github.io/amg/dev-exp-doc.html)
- [移动端前端笔记大全](http://segmentfault.com/a/1190000002581619)

### 参考

- [前端开发规范手册](https://github.com/0xashu/Guide.git)
- [naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet.git)
- [O2 前端规范文档](https://github.com/o2team/guide)
- [阿里前端开发规范](https://w3ctim.com/post/1d821dd8.html)
- [重构](https://book.douban.com/subject/4262627/)
