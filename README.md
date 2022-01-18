# spec

这是一份前端开发规范。

## 写在规则前面的话

> **项目的可维护性第一**。我们并不是一个人在做事，项目的维护和二次开发可能是直接或间接的团队合作。好的可维护性可以从四个方面获得：

- 代码的松耦合，高度模块化，将页面内的元素视为一个个模块，相互独立，尽量避免耦合过高的代码，从 HTML、CSS、JavaScript 三个层面考虑模块化，
- 良好的注释。
- 注意代码的弹性，在性能和弹性的选择上，一般情况下以弹性为优先考虑条件，在保证弹性的基础上，适当优化性能。
- 严格按照规范编写代码。

接下来看规范之前，我们先来了解下：“什么样的代码是好代码?”

什么是高质量代码?

1. 满足业务需求
2. 纯代码层面的高质量

高质量的判断标准

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
  - [写在规则前面的话](#写在规则前面的话)
  - [如何编写高质量代码](#如何编写高质量代码)
  - [设计原则](#设计原则)
  - [编码规范](#编码规范)
    - [文件结构](#文件结构)
      - [编辑器](#编辑器)
      - [文件及目录](#文件及目录)
      - [资源目录](#资源目录)
    - [命名规范](#命名规范)
    - [代码风格](#代码风格)
    - [工具检查](#工具检查)
  - [图片规范](#图片规范)
  - [移动端优化](#移动端优化)
  - [其他](#其他)
    - [工具箱](#工具箱)
    - [相关文档](#相关文档)
    - [参考](#参考)

---

## 如何编写高质量代码

无规则不成方圆，写代码也是如此。要写出好的代码，需要遵守一些规则，主要有以下几个方面：

- 设计原则
- 设计模式
- 编码规范
  - 文件结构
  - 命名规范
  - 代码风格
  - 注释规范
- 持续重构

## 设计原则

对齐高质量的判断标准

## 编码规范

### 文件结构

#### 编辑器

- [x] [editorconfig](./docs/editor/editorconfig.md)
- [ ] [vscode 配置](./docs/editor/vscode.md)

#### 文件及目录

- 代码文件统一使用 **无BOM头的utf-8**(utf-8 without BOM) 的编码方式

#### 资源目录

静态资源 assets

```bash
.
├── src
│   ├── assets
│   │   ├── img
│   │   └── svg
│   └── pages
└── package.json
```

### 命名规范

关于命名, 选择一种命名约定并遵循它。

- camelCase
- PascalCase
- snake_case

命名规则

- [ ] [naming 概述](./docs/naming/readme.md)
- 分类
  - JS命名
    - 变量,方法,参数 camelCase
    - 类   PascalCase
    - 常量 全部字母大写，单词间下划线 `_` 分隔
  - css 命名
    - BEM
  - 文件夹命名
    - 全部小写, 单词间下划线 `-` 分隔
  - url pathname 路径命名
  - url query 参数命名

### 代码风格

- [html](./docs/coding-style/html/readme.md)
- [css](./docs/coding-style/css/readme.md)
  - [less](./docs/coding-style/css/less.md)
- [javascript](./docs/coding-style/javascript/readme.md)
- [typescript](./docs/coding-style/typescript/readme.md)
- [react](./docs/coding-style/react/readme.md)
- [vue](./docs/coding-style/vue/readme.md)

### 工具检查

书写规范/代码格式检查通过 lint 工具检查实现自动化校验约束。

- [eslint](./docs/rules/eslint/readme.md)
- [prettier](./docs/rules/prettier/readme.md)
- [stylelint](./docs/rules/stylelint/readme.md)
- [commitlint](./docs/rules/commitlint/readme.md)
- [husky 辅助](./docs/rules/husky/readme.md)

## 图片规范

- 图片格式
- 图片大小
- 图片质量
- 图片引入

## 移动端优化

移动端相关问题处理

## 其他

### 工具箱

### 相关文档

- [编码规范 by @mdo](http://codeguide.bootcss.com/)
- [Baidu 前端规范](https://github.com/ecomfe/spec)
- [Qunar 前端规范](https://github.com/doyoe/html-css-guide)
- [常用的 HTML 头部标签](https://github.com/yisibl/blog/issues/1)
- [Google Style Guide](http://docs.kissyui.com/1.4/docs/html/tutorials/style-guide/google-js-style.html)
- [Amazeui Style Guide](http://amazeui.org/getting-started/)
- [CSS Guidelines](http://cssguidelin.es/)
- [20 Snippets You should be using from Html5 Boilerplate](http://www.1stwebdesigner.com/snippets-html5-boilerplate/)
- [谈谈CSS性能](http://www.w3.org/2015/Talks/0109-CSSConf-xq/)
- [Web动画性能指南](http://alexorz.github.io/animation-performance-guide/)
- [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](http://www.paulirish.com/2012/- why-moving-elements-with-translate-is-better-than-posabs-topleft/)
- [High Performance Animations](http://www.html5rocks.com/zh/tutorials/speed/high-performance-animations/)
- [jQuery Standards](http://lab.abhinayrathore.com/jquery-standards/)
- [Learn jQuery](http://learn.jquery.com/about-jquery/)
- [无线Web开发经验谈](http://am-team.github.io/amg/dev-exp-doc.html)
- [移动端前端笔记大全](http://segmentfault.com/a/1190000002581619)

### 参考

- [前端开发规范手册](https://github.com/0xashu/Guide.git)
- [naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet.git)
- [O2前端规范文档](https://github.com/o2team/guide)
- [阿里前端开发规范](https://w3ctim.com/post/1d821dd8.html)
