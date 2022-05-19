# 用法

## 与 Linter 集成

这里就是指 ESlint

Linter 可能与 Prettier 冲突, 参见 [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html)

> 原则: 使用**Prettier 进行格式化**，使用 **Linter 来捕捉错误**！

### Note

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

## Pre-commit Hook

参考: https://prettier.io/docs/en/precommit.html

可以将 prettier 与 pre-commit 结合使用

- [lint-staged](https://github.com/okonet/lint-staged)
  - 🚫💩 — Run linters on git staged files
- [pretty-quick](https://github.com/azz/pretty-quick)
  - https://www.npmjs.com/package/pretty-quick
- [pre-commit](https://github.com/pre-commit/pre-commit)
  - https://pre-commit.com/
- [Husky.Net](https://github.com/alirezanet/Husky.Net)
  - https://alirezanet.github.io/Husky.Net/
- [git-format-staged](https://github.com/hallettj/git-format-staged)
  - Git command to transform staged files using a formatting command
- Shell script
  - `.git/hooks/pre-commit`

```bash
#!/bin/sh

# .git/hooks/pre-commit

FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')
[ -z "$FILES" ] && exit 0

# Prettify all selected files
echo "$FILES" | xargs ./node_modules/.bin/prettier --ignore-unknown --write

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0
```

## 项目集成

相关 scripts 命令配置, 参考 https://prettier.io/docs/en/cli.html

安装依赖 `npm i prettier lint-staged --save-dev`

```bash
prettier -w .               # // --write

prettier -c "src/**/*.js"   # --check
prettier -l "src/**/*.js"   # --list-different
```

### scripts

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

## 编辑器集成

- prettier-vscode
- 打开和关闭格式化程序
  - [vscode-status-bar-format-toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

```json
// vscode-status-bar-format-toggle 配置
{
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,   // 键入一行自动化格式化改行
  "formattingToggle.affects": ["editor.formatOnSave"]  // 切换开/关
}
```
