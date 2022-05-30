# lint

参见 lint example

## 进度

- 项目接入
  - [x] project-lock
  - [x] editorconfig
  - [x] prettier
  - [x] eslint
  - [x] babel
  - [x] stylelint
  - [x] browserlist
  - [x] lint-staged
  - [x] husky
  - [x] commitlint
  - [x] conventional-changelog
  - [ ] sonarlint
  - [ ] markdownlint
- IDE 编辑器接入
  - vscode
    - [x] prettier
    - [x] eslint
    - [x] stylelint
- CI 流程接入
  - github-actions
    - [x] prettier
    - [x] eslint
    - [x] stylelint

## lint 接入

- 项目中如何接入
- IDE 编辑器如何接入
- CI 流程如何接入

集成到 vscode, webpack 以及 CI 流程上能有效保证执行落地。

## 项目接入

接入步骤

- [lint](#lint)
  - [进度](#进度)
  - [lint 接入](#lint-接入)
  - [项目接入](#项目接入)
    - [project-lock](#project-lock)
    - [editorconfig](#editorconfig)
    - [prettier](#prettier)
    - [eslint](#eslint)
    - [babel](#babel)
    - [stylelint](#stylelint)
    - [browserlist](#browserlist)
    - [lint-staged](#lint-staged)
    - [husky](#husky)
    - [commitlint](#commitlint)
    - [conventional-changelog](#conventional-changelog)
    - [sonarlint](#sonarlint)
    - [markdownlint](#markdownlint)
  - [IDE 编辑器接入](#ide-编辑器接入)
  - [CI 流程接入](#ci-流程接入)
  - [便捷规范接入](#便捷规范接入)
  - [参考文档](#参考文档)
    - [扩展阅读](#扩展阅读)

### project-lock

锁定一个项目依赖的运行环境、依赖包等关键配置信息。project-lock? env-lock?

> 保证项目开发维护的稳定性。

项目下 add `.npmrc` && `.nvmrc`, 并且将 deps lock 文件提交 git 库。

```bash
# 添加 node 版本
node -v > .nvmrc
```

```ini
engine-strict=true
package-lock=true
registry=https://registry.npmjs.org/
```

package.json 限定版本时，一般 **仅限制主版本号即可**。

```jsonc
  // https://docs.npmjs.com/cli/v8/configuring-npm/package-json#engines
  // 格式: >= xxx < 16 或 16.x 或 ~16.15.0
  "engines": {
    "node": "~16.15.0",
    "npm": "~8.5.0",
    "yarn": "1.x",
    "pnpm": ">=7"
  }
```

CI 流程应使用锁文件安装依赖，实现更快、更可靠的构建。同时还能起到校验不规范 lock 文件的作用。

- [`npm ci`](https://docs.npmjs.com/cli/v8/commands/npm-ci)
- `yarn install --frozen-lockfile`
- `pnpm install --frozen-lockfile`

### editorconfig

> EditorConfig 编辑器编码规范
> 实现跨平台、编辑器和 IDE 统一编程风格, 提高代码阅读质量。

in `.editorconfig`

简单配置如下

```ini
# .editorconfig
# https://editorconfig.org/

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

```

在 EditorConfig 文件中设置的约定当前无法在 CI/CD 管道中强制为生成错误或警告。

### prettier

> An opinionated code formatter.
> 一个"有主观约束"的代码格式化工具。

- Prettier 郑重提出：大家不要吵！咱们先提高代码的可读性和可维护性再说，具体什么风格我给你们定。
- 这就是 Prettier 的 **opinionated**!

usage

```bash
npm i -D prettier
```

config

格式化当前目录所有内容时，必须结合 `.prettierignore` 使用

```json
"scripts": {
  "prettier": "prettier .",
  "prettier:fix": "npm run prettier -- --write"
}
```

.prettierrc.js

```js
// .prettierrc.js
// 文档 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // default 80
  semi: false, // default true
  singleQuote: true, // default false
  // tabWidth: 2, // default 2
  trailingComma: 'all', // default es5
  // 以上为改动，其他选项都使用默认值
};
```

### eslint

> 查找并修复 JavaScript 代码中的问题

一些原则

- 按照 prettier 原则，尽量减少格式化对开发的干扰
  - 不应该因为分号、逗号分心，满篇飘红，应关注代码逻辑，格式化应让工具自动处理
- prettier 专注于 format
- eslint 专注于 check syntax and find problems

接入 eslint

```bash
# 初始化配置
npm init @eslint/config
# 选择: To check syntax and find problems
```

配置具体参见 [`.eslintrc.js`](./.eslintrc.js)

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

### babel

> eslint 需要 babel 配合, 按需配置

```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react
```

babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

### stylelint

Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。

> 专注 CSS 语法格式化

```bash
npm i -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-config-css-modules stylelint-config-rational-order stylelint-no-unsupported-browser-features stylelint-order stylelint-declaration-block-no-ignored-properties
```

.stylelintrc.js

```js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
};
```

更多配置详见 .stylelintrc.js

package.json

```json
{
  "stylelint": "stylelint --cache --allow-empty-input 'src/**/*.{css,less,scss,sass}'",
  "stylelint:fix": "npm run stylelint -- --fix"
}
```

测试校验

```bash
npx stylelint "src/**/*.css"
npx stylelint 'src/**/*.less' --syntax less

npm run stylelint
```

- 配置 `.stylelintignore` 文件(默认不格式化 node_modules)

### browserlist

The config to share target browsers and Node.js versions between different front-end tools. It is used in:

> 用于不通工具共享浏览器或 node 版本配置信息
> 国内情况复杂，如要精准配置，最好核实下用户覆盖统计数据

`.browserslistrc` 独立配置文件

```conf
# .browserslistrc
# https://github.com/browserslist/browserslist#queries

defaults
last 2 versions
> 0.1%
not dead
ios >= 9
android >= 4.4

# npx browserslist "defaults, last 2 versions, > 0.1%, not dead, ios >= 9, android >= 4.4"
# https://browserslist.dev
```

package.json

```json
  "browserslist": [
    "last 2 versions",
    "> 0.1%",
    "not dead",
    "android >= 4.4",
    "ios >= 9"
  ],
```

测试预览

```bash
# 项目中
npx browserslist

# Use CLI tool instead of the website
npx browserslist "last 2 version, >1%"
# pc
npx browserslist "defaults, last 2 versions, > 0.1%, safari >= 9, ie >= 10"
# mobile
npx browserslist "defaults, last 2 versions, > 0.1%, safari >= 9, iOS >= 9, android >= 4.4"
```

注意: 浏览器分类是大小写不敏感的, [分类列表](https://github.com/browserslist/browserslist#browsers)

### lint-staged

> Run linters against staged git files and don't let 💩 slip into your code base!

- 如果对项目中所有文件一次性格式化，大范围的修改很可能出现不可控的情况。
- 借助 lint-staged 可将处理范围限制在 Git 暂存区内 (staged) 的文件。

useage

```bash
npm i -D lint-staged
```

package.json

```jsonc
// 仅对暂存区的内容进行格式化
{
  "scripts": {
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,md,yml,yaml,css,less,scss}": ["npm run prettier:fix"],
    "*.{js,jsx,ts,tsx}": ["npm run eslint:fix", "npm run stylelint:fix"]
  }
}
```

### husky

> Modern native git hooks made easy

usage

```bash
# 自动安装（推荐）
# https://typicode.github.io/husky/#/?id=automatic-recommended
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm

或使用

npx auto-husky

或手动操作

npm i -D husky
# 手动启用 Git 挂钩
npm set-script prepare "husky install"
npm run prepare
```

config

```bash
# Add a hook:
npx husky add .husky/pre-commit "npx --no-install lint-staged"
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1' # 这个执行有问题
yarn husky add .husky/commit-msg 'npx --no -- commitlint --edit "${1}"' # 这个可以

# husky uninstall
npm uninstall husky && git config --unset core.hooksPath
```

### commitlint

> Lint commit messages

主要是基于 angular.js 提供的提交格式，这是目前使用最广的写法，比较合理和系统化，并且有配套的工具。

- AngularJS team [git commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

主要包含三部分：Header，Body 和 Footer, 格式规范如下

```js
<type>(<scope>): <subject> // header 必填
// 空一行
<body>
// 空一行
<footer>
```

usage

```bash
npm i -D @commitlint/cli @commitlint/config-conventional
```

config

```bash
# Add hook
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE


# Make hook executable
chmod a+x .husky/commit-msg
```

规则配置文件

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 100],
    // prettier-ignore
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'enhance',
        'chore',
        'test',
        'doc',
        'refactor',
        'style',
        'revert',
      ],
    ],
  },
};
```

测试

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose

echo 'foo: xxx' | npx commitlint --verbose
```

### conventional-changelog

> Generate changelogs and release notes from a project's commit messages and metadata.

- commit msg 规范化之后，就可以通过工具把关键信息找出来，自动生成到 CHANGELOG 中。
- conventional-changelog 就是一款可以根据项目的 commit 和 metadata 信息自动生成 changelogs 和 release notes 的工具，并且在辅助工具 [standard-version](https://github.com/conventional-changelog/standard-version) 下，可以自动帮你完成生成 version、打 tag, 生成 CHANGELOG 等系列过程。

```bash
npm i conventional-changelog-cli -D

# 不会覆盖以前的 Change log，只会在 CHANGELOG.md 的头部加上自从上次发布以来的变动
# 注意：需要先更新版本号
npx conventional-changelog -p angular -i CHANGELOG.md -s

# 命令行输出
# npx conventional-changelog -p angular

# 初始化 生成所有发布的 Change log
npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```

config

```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
}
```

如果你的所有 commit 都符合 Angular 格式，那么发布新版本时，那么自动生成 changelog 包括以下三个部分。

- New features
- Bug fixes
- Breaking changes.

每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。

### sonarlint

> SonarLint 在 IDE 编写代码时解决质量和安全问题
> SonarQube 在 CI 流程控制代码质量和安全问题

接入 SonarLint, SonarQube

- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-config-sonarqube](https://github.com/SonarSource/eslint-config-sonarqube)

一种实施方案

可以将 ESlint 规则导出为 JSON 以供 Sonar 导入（在构建期间）

> npm run eslint:report
> ./node_modules/.bin/eslint --output-file ./eslint-report.json --ext .js,.jsx,.ts,.tsx --format json ./src

在 `sonar-project.properties` 文件中或通过命令行参数设置此 Sonar 属性（其中 `eslint-report.json` 是上面生成的输出报告）

```conf
sonar.eslint.reportPaths=eslint-report.json
```

ESLint 报告中的任何问题都将出现在标有 EsLint 徽章的 Sonar 问题中。

作为旁注，此命令对于 eslint 也很有用，可以输出任何错误的 HTML 报告，非常适合查看或共享：

```bash
./node_modules/.bin/eslint --output-file ./eslint-report.html --ext .js,.jsx,.ts,.tsx --format html ./src
```

### markdownlint

关于 markdown 格式优化

- prettier 高度符合 [CommonMark 规范](https://commonmark.org/)，并由优秀的[remark-parse](https://github.com/remarkjs/remark)软件包提供支持。

目前未使用 markdownlint, 而是使用 prettier 做格式化

## IDE 编辑器接入

这里只涉及到 vscode, 相关插件如下

- prettier
  - [Prettier - Code formatter 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - 待确认 [Prettier ESLint 插件](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- eslint
  - [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- stylelint (以下二选一)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)

在项目中新建配置 [`.vscode/settings.json`](./.vscode/settings.json)

## CI 流程接入

目前仅支持全量检测

- prettier
  - [Prettier - Code formatter 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - 待确认 [Prettier ESLint 插件](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- eslint
  - [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- stylelint (以下二选一)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)

CI 流程需要接入, 但因为使用了 `list-staged`, 导致存在了复杂度。（每次 push 会包含多个 commit）

## 便捷规范接入

便捷规范接入

```bash
npm i --save-dev @xxx/lint eslint stylelint prettier @commitlint/cli husky lint-staged
```

> 不需要安装其他 Lint 插件或者插件集，@xxx/lint 中已包含这部分依赖。

## 参考文档

- [editorconfig](https://editorconfig.org/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [babel](https://babeljs.io/)
- [stylelint](https://stylelint.io/)
- [browserslist](https://github.com/browserslist/browserslist)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [conventionalcommits](https://www.conventionalcommits.org/)
- [release-please](https://github.com/googleapis/release-please) 维护发布 PR
- [sonarlint](https://www.sonarlint.org/)
- [sonarqube](https://www.sonarqube.org/)
- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

### 扩展阅读

- [自定义 Git - Git 钩子](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
- [ESLint 工作原理探讨](https://zhuanlan.zhihu.com/p/53680918)
- [lint-staged 如何做到只 lint staged?](https://juejin.cn/post/6844903864722784264)
- [mrm](https://www.npmjs.com/package/mrm) 是配置文件生成工具, Command line tool to help you keep configuration (package.json, .gitignore, .eslintrc, etc.) of your open source projects in sync.
- [cosmiconfig](https://www.npmjs.com/package/cosmiconfig) 为您的程序搜索并加载配置。
- [全面梳理代码规范化：EditorConfig + Prettier + ESLint](https://juejin.cn/post/6952842182252298248)
- [git commit 、CHANGELOG 和版本发布的标准自动化](https://zhuanlan.zhihu.com/p/51894196)
