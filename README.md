# spec

规范: 是来让人更舒服的.

- [spec](#spec)
  - [快速上手](#快速上手)
  - [规范](#规范)
    - [编辑器](#编辑器)
    - [文件目录](#文件目录)
    - [资源目录](#资源目录)
    - [命名规范](#命名规范)
    - [编码规范](#编码规范)
    - [书写规范/代码格式检查](#书写规范代码格式检查)
    - [图片规范](#图片规范)
    - [工具箱](#工具箱)
    - [相关文档](#相关文档)
  - [参考](#参考)

---

## 快速上手

1. 环境配置
  a. 基础配置
  b. 同步环境
2. 熟悉业务及流程
  a. 熟悉业务
    - 各业务介绍
  b. 熟悉业务研发流程
    - 业务研发流水线介绍
  c. 熟悉项目开发流程
    - 项目开发流水线介绍
  d. 熟悉 CI/CD 流程
    - 构建、部署流程图
  e. 熟悉开发规范
3. 项目开发
  a. 开发
  b. 调试
4. 测试、发布上线
  a. 部署发布
  b. 监控告警及维护

## 规范

### 编辑器

- [x] [editorconfig](./docs/editor/editorconfig.md)
- [ ] [vscode 配置](./docs/editor/vscode.md)

### 文件目录

- 代码文件统一使用 **无BOM头的utf-8**(utf-8 without BOM) 的编码方式

### 资源目录

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

### 编码规范

- [html](./docs/coding-style/html/readme.md)
- [css](./docs/coding-style/css/readme.md)
  - [less](./docs/coding-style/css/less.md)
- [javascript](./docs/coding-style/javascript/readme.md)
- [typescript](./docs/coding-style/typescript/readme.md)
- [react](./docs/coding-style/react/readme.md)
- [vue](./docs/coding-style/vue/readme.md)

### 书写规范/代码格式检查

书写规范通过 lint 工具自动化校验约束

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

## 参考

- [前端开发规范手册](https://github.com/0xashu/Guide.git)
- [naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet.git)
- [O2前端规范文档](https://github.com/o2team/guide)
- [阿里前端开发规范](https://w3ctim.com/post/1d821dd8.html)
