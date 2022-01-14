# Prettier 配置

> An opinionated code formatter
> Has few options

Prettier 是一个代码格式化工具，可以帮你把代码格式化成可读性更好的格式，最典型的就是一行代码过长的问题。

使用 Prettier 在 code review 时不需要再讨论代码样式，节省了时间与精力。

几个问题

- eslint --fix 和 prettier 混用会出现格式问题
- 推荐 perttier 格式化，再用 eslint 命令校验，而不用 eslint --fix 命令去格式化
- [如何与 linter 集成](https://prettier.io/docs/en/integrating-with-linters.html)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
  - 与 eslint 的配合使用最佳实践

相关文档：

- [官方配置项](https://prettier.io/docs/en/options.html)
- [中文站点](https://www.prettier.cn/docs/index.html)
- [为什么使用 Prettier？](https://www.prettier.cn/docs/why-prettier.html)
- https://zhuanlan.zhihu.com/p/37478644

## 使用

in `.prettierrc.js`

```js
const lint = require('@deepjs/lint');

module.exports = {
  ...lint.prettier,
};
```

相关 scripts 命令配置

安装依赖 `npm i prettier lint-staged --save-dev`, 参考: https://prettier.io/docs/en/precommit.html

```js
{
  "scripts": {
    "lint:prettier": "prettier --check 'src/**/*'",
    "lint:prettier:fix": "prettier -c --write 'src/**/*.{js,jsx,ts,tsx,less,md,json}' && git diff && prettier --version"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
}
```

## 我们的 prettier 配置

```js
/** @format */

// 文档 https://prettier.io/docs/en/options.html
module.exports = {
  singleQuote: true, // default false
  trailingComma: 'all', // default es5
  // 以上为改动，其他选项都使用默认值

  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.{ejs,html}', // document.ejs
      options: {
        parser: 'html',
      },
    },
  ],
};
```

## prettier 所有配置项

```js
// https://prettier.io/docs/en/options.html
// 以下为默认值
module.exports = {
  // 不要试图将 printWidth 当作 ESLint 的[max-len](https://eslint.org/docs/rules/max-len) 来使用——它们不一样
  // max-len 只是说明允许的最大行长度是多少，而不是通常首选的长度是多少——这是 printWidth 指定的。
  printWidth: 80,
  // 每个制表符占用的空格数
  tabWidth: 2,
  useTabs: false,
  // 是否在每行末尾添加分号
  semi: true,
  // 使用单引号，而不是双引号
  singleQuote: false, // TIP 可设置为 true
  // 仅在需要时在对象属性周围添加引号
  quoteProps: 'as-needed',
  // 在 JSX 中使用单引号代替双引号
  jsxSingleQuote: false,
  trailingComma: 'es5', // TIP all
  // 控制对象字面量的空格输出, true example: { foo: bar }
  bracketSpacing: true,
  // 将HTML 起始标签的 `>` 符号(true)放在最后一行的末尾，而非(false)单独放一行
  bracketSameLine: false,
  // 当箭头函数仅有一个参数时加上括号
  arrowParens: 'always',
  // 仅格式化文件的一部分, 开始和结束的代码
  rangeStart: 0,
  rangeEnd: Infinity,
  // 指定要使用的解析器
  // Prettier 会自动从输入文件路径推断解析器，因此您不必更改此设置
  // parser: '<string>', // 默认值无
  // parser: require('./my-parser'),
  // 指定用于推断要使用的解析器的文件名
  filepath: '<string>', // 默认值无
  // 提供以下内容作为第一个注释的文件将被格式化
  // /**
  // * @format
  // */
  requirePragma: false, // 自动化工具使用，优先于 insertPragma
  // 在文件顶部插入一个特殊标记，指定文件已使用 Prettier 格式化
  insertPragma: false, // 与requirePragma一起使用很有效
  // 默认情况下，Prettier 将按原样包装 Markdown 文本
  // （Markdown）将散文包含在多行中
  proseWrap: 'preserve',
  // HTML 空白敏感度
  // https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
  htmlWhitespaceSensitivity: 'css', // 尊重 CSS display属性的默认值
  // 是否缩进Vue 文件中的代码`<script>`和`<style>`标签
  vueIndentScriptAndStyle: false,
  // 指定 prettier 的换行符
  // lf 在旧版本的 Windows 记事本会将这些行从视觉上压缩为一条
  endOfLine: 'lf', // TIP 我们就使用默认即可
  // 控制 Prettier 是否格式化文件中嵌入的引用代码
  embeddedLanguageFormatting: 'off',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
```

vscode 中的 prettier 还有如下配置

```js
{
  // path to the prettier configuration file
  configPath: '',
  // A list of glob patterns to register Prettier formatter
  documentSelectors: [],
  // .prettierignore或类似文件的路径，默认为 .prettierignore
  ignorePath: '',
  useEditorConfig: true,
}
```
