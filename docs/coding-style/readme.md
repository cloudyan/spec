# 编码规范

目标: 使用工具配置 rules 自动检测而非人工来保证实施

参考了众多流行编码规范:

> 目前采用「阿里巴巴前端规约」。

## 单条规范格式说明

### 规范级别和对应的 Lint 规则

根据约束力强弱，一条规范依次分为强制、推荐、参考三个级别：

- 【强制】必须遵守。是不得不遵守的约定，违反本约定或将会引起严重的后果。如有对应 Lint 规则，配套规则包中级别为 `error`。
- 【推荐】尽量遵守。长期遵守这样的规定，有助于系统稳定性和合作效率的提升。如有对应 Lint 规则，配套规则包中级别为 `warn`。
- 【参考】充分理解。技术意识的引导，是个人学习、团队沟通、项目合作的方向。如有对应 Lint 规则，配套规则包中默认不开启，开发者可根据需要自行开启。

一条规范的级别会在规范描述的开头标注，如有对应的 Lint 规则会在结尾标注，例如：

- 1.1.1【强制】使用 2 个空格缩进。eslint: [indent](https://eslint.org/docs/rules/indent)

### 代码示例

为了更加直观，规范描述之后通常会配上代码示例，例如：

```javascript
// bad
function foo() {
∙∙∙∙let name;
}

// good
function foo() {
∙∙let name;
}
```

我们约定用 `bad` 注释表示反例，用 `good` 注释表示正例。

除了 `bad` 和 `good`，有时你还会看到 `disallowed`、`allowed`、`best` 这几种注释，它们的含义如下：

```javascript
// disallowed - 禁止（用于部分明令禁止的用法）
// bad - 反例
// allowed - 中例（用于允许但不推荐的用法）
// good - 正例
// best - 最佳正例（多个正例中最好的实现）
```

参考：

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Code Guide by @mdo](http://codeguide.co)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [前端开发规范手册](https://github.com/0xashu/Guide.git)
- [naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet.git)
- [O2 前端规范文档](https://github.com/o2team/guide)
- [阿里前端开发规范](https://w3ctim.com/post/1d821dd8.html)
