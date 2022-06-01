# 便捷接入

便捷接入

如上步骤项目接入配置，依赖项太多步骤又繁琐，不便于项目管理维护。所以我们也需要 `opinionated` 的方法接入。

1. 提取配置
2. 支持一键接入

### 提取配置

将配置及依赖提取，通过一个 npm 包统一管理。

```bash
npm i --save-dev @deepjs/lint eslint stylelint prettier @commitlint/cli husky lint-staged cross-env

# 不需要再安装其他 Lint 插件或者插件集等依赖，@deepjs/lint 中已包含这部分依赖。
```

使用配置

```js
// .prettierrc.js
const { prettier } = require('@deepjs/lint')
module.exports = prettier


// .eslintrc.js
const { eslint } = require('@deepjs/lint')
module.exports = eslint


// .stylelint.js
const { stylelint } = require('@deepjs/lint')
module.exports = stylelint


// .commitlintrc.js
const { commitlint } = require('@deepjs/lint')
module.exports = commitlint


// browserslist h5/pc/mini
{
  "browserslist": [
    "extends @deepjs/lint"
  ]
}
```

### 一键接入

提取配置后，项目接入已经很简单了。很显然的，这么简单的事儿好多个，也不应该手动做，我们可以通过自定义脚本实现

1. 生成配置文件
   1. 生产 `.eslintrc.js` `.prettierrc.js` 等一系列文件
   2. 当前目录执行 `npx degit cloudyan/lint/template#feat/lint ./ -f`
2. 添加辅助配置
   1. 配置 `package.json`
   2. 配置 `husky`

```bash
# 一键接入 类似
npx @deepjs/lint init

# 手动添加
# package.json 添加 scripts
npm set-script "eslint" "cross-env TIMING=1 eslint --ext .js,.jsx,.ts,.tsx --format=pretty ./src"
npm set-script "eslint:fix" "npm run eslint -- --fix"
npm set-script "eslint:report" "npm run eslint -- --format json --output-file ./eslint-report.json"
npm set-script "lint-staged" "lint-staged --allow-empty"
npm set-script "prettier" "prettier . --check"
npm set-script "prettier:fix" "npm run prettier -- --write"
npm set-script "prettier:diff" "npm run prettier:fix && git --no-pager diff && git checkout -- ."
npm set-script "stylelint" "stylelint --allow-empty-input 'src/**/*.{css,less,scss,sass}'"
npm set-script "stylelint:fix" "npm run stylelint -- --fix"

npm set-script "prepare" "husky install"
npm set-script "changelog" "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"

npm set-script "sort" "npx sort-package-json"

# package.json 添加 config
# https://mrm.js.org/docs/getting-started
npx mrm@2 lint-staged eslint
```

`mrm` 自动添加如下代码

```jsonc
{
  "lint-staged": {
    "*.js": "eslint --cache --fix",
    "*.css": "stylelint --fix",
    "*.{js,css,md}": "prettier --write"
  }
}
```

添加 husky hooks 配置

```bash
# add hook pre-commit
npx husky add .husky/pre-commit "npx --no -- lint-staged"
# 或
npx husky add .husky/pre-commit "npm run lint-staged"

# Add hook commit-msg
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE
```

### 终极方案？

既然配置都一样了，那么只提供一个 lint 工具是不是就可以了。

```bash
# 类似如下执行
npx lint prettier --fix
npx lint eslint --fix
npx lint stylelint --fix
```

问题: 这样 IDE 自动检测及修复会失效，还是需要配置文件在项目内。
