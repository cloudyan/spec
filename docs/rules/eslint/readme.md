# eslint

ESLint 是一款插件化的 JavaScript 代码静态检查工具，其核心是通过对代码解析得到的 AST（Abstract Syntax Tree，抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。

> 查找并修复 JavaScript 代码中的问题

一些原则

- 按照 prettier 原则，尽量减少格式化对开发的干扰
  - 不应该因为分号、逗号分心，满篇飘红，应关注代码逻辑，格式化应让工具自动处理
- prettier 专注于 format
- eslint 专注于 check syntax and find problems

- [eslint](#eslint)
  - [项目集成](#项目集成)
  - [扩展](#扩展)
    - [常见相关库](#常见相关库)
  - [项目接入分类](#项目接入分类)
    - [common deps](#common-deps)
    - [babel](#babel)
    - [react](#react)
    - [taro](#taro)
      - [taro react](#taro-react)
      - [taro vue](#taro-vue)
    - [vue](#vue)
    - [uniapp](#uniapp)
  - [其他](#其他)

## 项目集成

```bash
# 初始化配置
npm init @eslint/config
# 选择: To check syntax and find problems
```

config package.json

```json
{
  "eslint": "cross-env TIMING=1 eslint --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
  "eslint:fix": "npm run eslint -- --fix"
}
```

注意: eslint 使用 `--cache` 可能会让修改的配置不会立即生效

- [TIMING=1](https://eslint.org/docs/1.0.0/developer-guide/working-with-rules)
- [--format=pretty](https://www.npmjs.com/package/eslint-formatter-pretty)

## 扩展

### 常见相关库

熟悉一下常见的库

- Parser, 指定解析器, 能帮助 eslint 确定什么是解析错误。
  - eslint 的默认解析器 `espree`, 不支持 babel 提供的实验性（如新功能）语法
  - `@babel/eslint-parser` 支持 eslint 在 babel 转换的源代码上运行
    - `@babel/eslint-plugin`
  - `@typescript-eslint/parser` 支持 eslint 对 typescript 源代码进行 lint
    - `@typescript-eslint/eslint-plugin`
  - `vue-eslint-parser` 支持 eslint 解析 .vue 文件
    - `eslint-plugin-vue`
- [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
  - `eslint-config-airbnb-base` If you don't need React
    - `eslint`
    - `eslint-plugin-import` 支持对 ES2015+ `import/export` 语法的校验
  - `eslint-config-airbnb` 包含以下五项，不包含 `eslint-config-airbnb/hooks`
    - `eslint`
    - `eslint-plugin-import`
    - `eslint-plugin-react` React 专用的校验规则插件 `plugin:react/recommended`
    - `eslint-plugin-react-hooks`
    - `eslint-plugin-jsx-a11y` 专注于检查 jsx 元素的可访问性
  - `eslint-config-airbnb/hooks`
- [JavaScript Standard Style](https://standardjs.com/)
  - `eslint-config-standard`
- AlloyTeam
  - [`eslint-config-alloy`](https://github.com/AlloyTeam/eslint-config-alloy)
- Prettier
  - `eslint-config-prettier` 解决 eslint 和 prettier 规则冲突问题，以 prettier 规则为准，**关闭所有可能和 prettier 冲突的 eslint 规则**。
  - `prettier-eslint` 将 prettier 首先运行，执行结果给 eslint --fix
  - `prettier-stylelint`
- typescript
  - `@typescript-eslint/eslint-plugin`
- vue
  - `eslint-plugin-vue`
- 其他
  - `eslint-plugin-eslint-comments` 支持 eslint 指令注释，如 `//eslint-disable-line`, 底层没直接支持吗？
  - `eslint-plugin-markdown` 支持 lint markdown 中的 JS、JSX、TypeScript 等
  - `eslint-plugin-promise` 支持 lint promise
  - `eslint-plugin-unicorn` XO, 🦄 独角兽, 一系列 eslint 规则
  - `eslint-formatter-pretty` XO, 格式化 eslint 检查结果
  - `eslint-plugin-compat` Lint 代码的浏览器兼容性，基于 browserslist 配置
  - `eslint-plugin-jest` 仅在与测试相关的文件上运行规则
  - `eslint-plugin-html` 用于检查和修复 HTML 文件中包含的内联脚本

## 项目接入分类

### common deps

```bash
# 初始化配置
npm init @eslint/config
# 选择: To check syntax and find problems

# react 所有依赖
npm i -D @babel/eslint-parser @babel/eslint-plugin @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb-base eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier prettier-eslint

# 分步安装依赖
# parser js/ts
# eslint babel
npm i -D @babel/eslint-parser @babel/eslint-plugin
# eslint ts
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

# base deps
npm i -D eslint babel-plugin-import
# 等效于
npm i -D eslint-config-airbnb-base
# error  Parsing error: No Babel config file detected for xxx.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files
# 报错: 缺少 babel 配置, 添加 babel.config.js 后 OK

# prettier
npm i -D eslint-config-prettier
# 如果不加此项，prettier 规则和 eslint 规则就可能冲突
# 规则不同时，会出现 prettier 去掉尾分号，执行 eslint:fix 又给加上

# eslint-plugin-prettier 不推荐使用
# 推荐使用 prettier-eslint prettier-stylelint
npm i -D prettier-eslint prettier-stylelint
```

配置具体参见 [`.eslintrc.js`](../.eslintrc.js)

config package.json

```js
{
  "eslint": "cross-env TIMING=1 eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
  "eslint:fix": "npm run eslint -- --fix",
}
```

### babel

```bash
npm i -D @babel/core @babel/preset-env
```

babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

### react

install deps

```bash
# common deps

# airbnb
npm i -D eslint-config-airbnb
# 等效于
npm i -D eslint babel-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

# react
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

### taro

#### taro react

install deps

> eslint-plugin-taro 已被废弃

```bash
# common deps

# taro deps
npm i -D eslint-plugin-react eslint-plugin-react-hooks
npm i -D eslint-config-taro
# @tarojs/plugin-html
```

.eslintrc.js

```js
module.exports = {
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
```

#### taro vue

```bash
npm i -D eslint-config-taro
```

```js
// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
{
  extends: ['taro/vue']
}

```

### vue

```bash
# eslint vue
npm i -D vue-eslint-parser eslint-plugin-vue
```

.eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 插件加载规则 extPlugin = `plugin:${pluginName}/${configName}`
    // plugin 可以省略包名的前缀 `eslint-plugin-`
    // 'eslint:recommended',
    // 'plugin:vue/vue3-recommended',   // vue3.x
    // 'plugin:vue/recommended',        // vue2.x

    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 用于支持 jsx
    },
    ecmaVersion: 'latest',
    // parser: '@typescript-eslint/parser',
    parser: {
      // Script parser for `<script>`
      js: 'espree', // babel-eslint espree

      // Script parser for `<script lang="ts">`
      ts: '@typescript-eslint/parser',

      // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      // and vue interpolations (e.g. `{{variable}}`).
      // If not specified, the parser determined by `<script lang ="...">` is used.
      '<template>': 'espree',
    },

    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
```

eslint plugin for vue-cli

- [`@vue/cli-plugin-eslint`](https://www.npmjs.com/package/@vue/cli-plugin-eslint)

```js
config.module.rule('eslint');
config.module.rule('eslint').use('eslint-loader');
```

### uniapp

同 vue 即可

## 其他

每个规则有【3】个错误级别

- "off"或 0: 关闭规则
- "warn"或 1: 打开规则, 作为警告（不会导致程序退出）
- "error"或 2: 打开规则, 作为错误（触发时程序会退出，退出代码为 1）

退出码

- `0`: 检测成功，没有错误。如果 `--max-warnings` 标志被设置为 `n`，那么警告数量最多为`n`。
- `1`: 检测成功，并且至少有一个错误，或者警告多于 `--max-warnings` 选项所允许的警告。
- `2`: 由于配置问题或内部错误，检测未能成功。

.eslintrc.js

```js
module.exports = {
  /**
   * 默认情况下，ESLint会在所有父级目录里寻找配置文件，一直到根目录。
   * 为了将ESLint限制在一个特定的项目，设置root: true；
   * ESLint一旦发现配置文件中有 root: true，就会停止在父级目录中寻找。
   */
  root: true,
};
```
