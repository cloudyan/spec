# 其他

## yaml

关于 yaml 文件扩展名, [官方](https://yaml.org/faq.html) 官方推荐我们使用 `.yaml`。

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
