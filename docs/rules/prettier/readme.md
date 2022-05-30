# Prettier

Prettier 是一个代码格式化工具，可以帮你把代码格式化成可读性更好的格式，最典型的就是一行代码过长的问题。

> 专注代码格式化
> An opinionated code formatter.
> 一个"有主观约束"的代码格式化工具。

- Prettier 郑重提出：大家不要吵！咱们先提高代码的可读性和可维护性再说，具体什么风格我给你们定。
- 这就是 Prettier 的 **opinionated**!

这里可以参考 Prettier 设计的[基本原理](https://prettier.io/docs/en/rationale.html)

使用 Prettier 在 code review 时不需要再讨论代码样式，节省了时间与精力。

- [Prettier](#prettier)
  - [项目集成](#项目集成)
  - [扩展](#扩展)
    - [与 linter 集成](#与-linter-集成)
      - [Note](#note)
    - [Pre-commit Hook](#pre-commit-hook)
    - [忽略代码](#忽略代码)
    - [编辑器集成](#编辑器集成)

## 项目集成

相关 scripts 命令配置, 参考 [cli 文档](https://prettier.io/docs/en/cli.html)

usage

```bash
npm i -D prettier

prettier --write .                              # -w
prettier --write --ignore-unknown "src/**/*.js" # -w -u
prettier --write 'src/**/*.{js,jsx,ts,tsx,json,yml,yaml,css,less,scss}'

prettier --check "src/**/*.js"                  # -c
prettier --list-different "src/**/*.js"         # -l
prettier --parser=typescript --write

# prettier diff
prettier --write '**/?(.)*.{js,jsx,ts,tsx,json,yml,yaml,css,less,scss}' && git --no-pager diff && git checkout -- .
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

更多配置详见[配置说明](./config.md)

## 扩展

### 与 linter 集成

与 eslint、stylelint 集成

与其他 linter 对比，参见 [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html)

> 原则: 使用**Prettier 进行格式化**，使用 **Linter 来捕捉错误**！

Linter 可能与 Prettier 冲突？`eslint --fix` 和 `prettier` 混用会出现格式问题？

- 使用 `perttier` 格式化，再用 `eslint` 命令校验
- [如何与 linter 集成](https://prettier.io/docs/en/integrating-with-linters.html)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
- 与 `eslint` 配合使用的最佳实践？
  - 添加 eslint-config-prettier, 解决规则冲突问题
  - 添加 prettier-eslint, 解决自动格式化顺序问题

#### Note

其他的一些问题，了解即可

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)

这些插件在 Prettier 刚推出时特别有用。你可以使用 `prettier --check` 替代

这些插件的缺点是：

- 你最终会在你的编辑器中看到很多红色的波浪线，这很烦人。Prettier 应该让你忘记格式化——而不是面对它！
- 它们比直接运行 Prettier 慢。
- 它们仍然是事情可能中断的间接层。

结论

可以直接运行 `prettier`, 然后使用 `eslint --fix`

- [prettier-eslint](https://github.com/prettier/prettier-eslint)
- [prettier-stylelint](https://github.com/hugomrdias/prettier-stylelint)

### Pre-commit Hook

参考: https://prettier.io/docs/en/precommit.html

可以将 prettier 与 pre-commit 结合使用

- [lint-staged](https://github.com/okonet/lint-staged)
  - 🚫💩 — Run linters on git staged files
  - Run linters against staged git files and don't let 💩 slip into your code base!
  - https://github.com/okonet/lint-staged#examples
- [pretty-quick](https://github.com/azz/pretty-quick)
  - https://www.npmjs.com/package/pretty-quick
- [pre-commit](https://github.com/pre-commit/pre-commit)
  - https://pre-commit.com/
- [husky](https://github.com/typicode/husky)
  - https://typicode.github.io/husky/
- [git-format-staged](https://github.com/hallettj/git-format-staged)
  - Git command to transform staged files using a formatting command
- Shell script
  - `.git/hooks/pre-commit`

我们选择使用 husky + lint-staged, 参见系列下文

### 忽略代码

默认的 `.prettierignore` 配置如下

```yaml
**/.git
**/.svn
**/.hg
**/node_modules
```

使用 `prettier-ignore` 可以忽略下一个格式化节点, 使用对应代码下的注释语法即可

```js
js    // prettier-ignore
JSX   {/* prettier-ignore */}
HTML  <!-- prettier-ignore -->
CSS   /* prettier-ignore */
MD    <!-- prettier-ignore -->
YAML  # prettier-ignore
GraphQL     # prettier-ignore
Handlebars  {{! prettier-ignore }}
```

对于命令行可使用 `.prettierignore` 或如下语法

```bash
prettier --write . '!**/*.{js,jsx,vue}'
```

### 编辑器集成

- prettier-vscode
- 打开和关闭格式化程序
  - [vscode-status-bar-format-toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

```json
// vscode-status-bar-format-toggle 配置
{
  "editor.formatOnPaste": false,
  "editor.formatOnType": false, // 键入一行自动化格式化改行
  "formattingToggle.affects": ["editor.formatOnSave"] // 切换开/关
}
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

参考

- [官方配置项](https://prettier.io/docs/en/options.html)
- [中文站点](https://www.prettier.cn/docs/index.html)
- [为什么使用 Prettier？](https://www.prettier.cn/docs/why-prettier.html)
- https://zhuanlan.zhihu.com/p/37478644
