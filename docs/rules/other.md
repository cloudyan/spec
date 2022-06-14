# 其他

## yaml

关于 yaml 文件扩展名, [官方](https://yaml.org/faq.html) 官方文档推荐我们使用 `.yaml`。

但从实践上来看，虽然都支持，但 github 和 gitlab 官方都默认选择使用 `yml`。

## opinionated vs unopinionated

关于 Opinionated 的译法可以参考 [掘金翻译计划的一个 PR](https://github.com/xitu/gold-miner/pull/7984#issuecomment-782794534)，[Vite 中文文档的一个 PR](https://zhuanlan.zhihu.com/p/357794103) 这两处的讨论。

列出几个 opinionated 和 unopinionated 的软件, 你还能想到哪些

- Opinionated
  - Prettier
  - Vite
- Unopinionated
  - eslint
  - styleint
  - webpack?

## patch-package

为第三方包创建补丁

```bash
# 运行后会提示是否创建 issue
npx patch-package package/another-package

# scoped packages
npx patch-package @my/package/@my/other-package
```

## codecov

- [codecov](https://about.codecov.io/) 是一个开源的测试结果展示平台, 将测试结果可视化

## stylelint-demo

- <https://github.com/stylelint/stylelint-demo>

扩展

```yaml
# github-actions
steps:
  # https://github.com/stylelint/stylelint-demo/blob/main/.github/workflows/nodejs.yml
  - name: Get Node.js version from package.json
    run: |
      node -p 'require("./package.json").engines.node' | tee .node-version
```

[npm-run-all](https://www.npmjs.com/package/npm-run-all) 用于并行或顺序运行多个 npm 脚本的 CLI 工具。简单，跨平台。

提供有三个命令

- npm-run-all
- 速记命令
  - run-s 用于顺序
  - run-p 用于并行

详细使用参看项目测试用例

```json
"scripts": {
  "lint": "npm-run-all --parallel lint:*",
  "lint:css": "stylelint src/common/**/*.css",
  "lint:formatting": "prettier . --check",
  "lint:js": "eslint . --ignore-path .gitignore",
  "lint:md": "remark . --quiet --frail --ignore-path .gitignore",
}
```

## typecheck

```json
{
  "test:typecheck": "tsc -p .",
  "typecheck": "tsc -p scripts --noEmit && tsc -p playground --noEmit"
}
```

## jsonc vs json5

`.(*.)rc`

https://stackoverflow.com/questions/67978167/why-does-vs-code-allow-comments-in-json-files-within-vscode-but-not-elsewhere

## npx vs npm

npm 从5.2版开始，增加了 npx 命令。npx 想要解决的主要问题，就是调用项目内部安装的模块。

- npx 从本地或远程 npm 包运行命令。近似 `npm run`
- npm javascript 包管理器。you use it to publish, discover, install, and develop node programs.

npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

参考:

- 参看 npm 官方文档了解更多 https://docs.npmjs.com/cli/v8/commands/npx
- https://www.ruanyifeng.com/blog/2019/02/npx.html

## 双连字符

"--" 用于标记选项的结束，因此是参数的开始。它告诉命令将其后的所有内容视为参数而不是选项，即使某些内容看起来像选项。

## broken-link-checker

Find broken links, missing images, etc within your HTML.

https://github.com/stevenvachon/broken-link-checker

## .gitignore

怎么复用 .gitignore 替代 .eslintignore .prettierignore 以及 .prettierignore
