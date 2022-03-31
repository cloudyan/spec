# `@xxx/lint`

基于 [@umijs/fabric](https://github.com/umijs/fabric) 修改

一个包含 prettier，eslint，stylelint 的配置文件合集

A collection of configuration files containing prettier, eslint, stylelint

> 注意：使用 `@xxx/lint` 检查时，因为 eslint 等依赖安装在 `@xxx/lint`,使用 yarn 安装有时导致找不到对应的 plugin 插件（未安装在当前项目下），可以改用 npm 安装

## 规则列表

- coding-style
  - base
  - css
  - html
  - image
  - javascript
  - json
  - react
  - taro
  - typescript
  - vue
- rules
  - eslint
  - prettier
  - stylelint
  - editorconfig
  - sonar

## Todo

实现自定义命令行，完成代码配置以及检查，并输出结果

- 跟随项目
  - [ ] lint init 完成配置初始化（配置跟随项目走）
- 统一命令行控制
- [ ] lint --check 执行代码格式化检查
- [ ] lint --fix 执行代码格式化自动修复
- [ ] lint --doctor 配置检查

## Use

安装

```bash
npm i @xxx/lint --save-dev
yarn add @xxx/lint -D

# lint 需要安装命令项 如 eslint prettier stylelint
npm run lint # 制作语法格式检查，不做修复
npm run lint:js
npm run lint:css
npm run lint:prettier
npm run lint:fix # 修复语法格式等
npm run lint:js:fix
npm run lint:css:fix
npm run lint:prettier:fix

```

in package.json

eslint 使用 --cache 可能会让修改的配置不会立即生效

如：`eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src`

```js
"scripts": {
  "lint": "npm run lint:js && npm run lint:css",
  "lint:js": "cross-env TIMING=1 eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
  "lint:css": "stylelint 'src/**/*.less' --syntax less",
  "lint:prettier": "prettier --check 'src/**/*' --end-of-line auto",
  "lint:fix": "npm run lint:js:fix && npm run lint:css:fix && npm run lint:prettier:fix",
  "lint:js:fix": "eslint --fix --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
  "lint:css:fix": "stylelint --fix 'src/**/*.less' --syntax less",
  "lint:prettier:fix": "prettier -c --write 'src/**/*.{js,jsx,ts,tsx,less,md,json}' && git diff && prettier --version",
}
```

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@xxx/lint/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@xxx/lint/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const lint = require('@xxx/lint');

module.exports = {
  ...lint.prettier,
};
```

in `.editorconfig`

```yaml
# https://editorconfig.org/
root = true

[*] # 匹配所有的文件
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.js] # 对所有的 js 文件生效
# 字符串使用单引号
quote_type = single

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```
