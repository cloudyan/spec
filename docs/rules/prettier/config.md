# 配置说明

## 精简配置

```js
// 文档 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // default 80
  semi: false, // default true
  singleQuote: true, // default false
  // tabWidth: 2, // default 2
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
    {
      files: '*.{yaml,yml}',
      options: {
        singleQuote: false,
      },
    },
  ],
};
```

### prettier 所有配置项

想深入了解差异，可以对比查看[测试用例](https://github.com/prettier/prettier/blob/main/tests/format/js/trailing-comma/__snapshots__/jsfmt.spec.js.snap)

```js
// https://prettier.io/docs/en/options.html
// 以下为默认值
module.exports = {
  // 不要试图将 printWidth 当作 ESLint 的[max-len](https://eslint.org/docs/rules/max-len) 来使用——它们不一样
  // (ESlint)max-len 强制行的最大长度，超过则报错
  // (prettier)printWidth 指定首选的长度
  // (editorconfig)max_line_length 中的设置将配置 Prettier 的打印宽度，除非被覆盖
  // 可以结合 vscode 配置，"editor.rulers": [80, 120],
  printWidth: 80, // TIP: 120
  // 每个制表符占用的空格数
  tabWidth: 2,
  useTabs: false,
  // 是否在每行末尾添加分号
  semi: true, // TIP 无分号更干净
  // 引号，默认双引号
  // "It's gettin' better!" vs 'It\'s gettin\' better!'
  singleQuote: false, // TIP 可设置为 true
  // 仅在需要时在对象属性周围添加引号
  quoteProps: 'as-needed',
  // 在 JSX 中使用单引号代替双引号
  jsxSingleQuote: false, // 因历史原因存在
  trailingComma: 'es5', // TIP all
  // 控制对象字面量的空格输出, true example: { foo: bar }
  bracketSpacing: true,
  // 将HTML 起始标签的 `>` 符号(true)放在最后一行的末尾，而非(false)单独放一行
  bracketSameLine: false,
  // 当箭头函数仅有一个参数时加上括号
  arrowParens: 'always', // 因历史原因存在
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
  proseWrap: 'preserve', // 超过打印宽度 printWidth，则换行
  // HTML 空白敏感度, 需要
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
