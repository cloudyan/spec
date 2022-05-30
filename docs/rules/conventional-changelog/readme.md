# conventional-changelog

> Generate changelogs and release notes from a project's commit messages and metadata.

- commit msg 规范化之后，可以通过工具把关键信息找出来，自动生成到 CHANGELOG 中。
- conventional-changelog 就是一款可以根据项目的 commit 和 metadata 信息自动生成 changelogs 和 release notes 的工具，并且在辅助工具 [standard-version](https://github.com/conventional-changelog/standard-version) 下，可以自动帮你完成生成 version、打 tag, 生成 CHANGELOG 等系列过程。

## 项目接入

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

## 扩展

以上的操作还存在两个问题，1. 要先更新版本号; 2. 更新 changelog 后，要再执行提交。我们可以优化下该流程。

这里有很多库，集成了更多的自动化流程

- [conventional-changelog-conventionalcommits] 用于自动 CHANGELOG 生成和版本管理的规范的具体实现。
- [conventional-github-releaser](https://github.com/conventional-changelog/releaser-tools) 通过提交记录生成 github release 中的变更描述
- [conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump#readme) 根据提交记录判断需要升级 Semantic Versioning 哪一位版本号
- [standard-version](https://www.npmjs.com/package/standard-version) 已弃用，推荐 github 用户使用 release-please 替代
- [release-please](https://github.com/googleapis/release-please) 通过维护发布 PR, 自动生成 CHANGELOG 以及 GitHub Release。
  - [release-please-action](https://github.com/google-github-actions/release-please-action)
- [semantic-release](https://github.com/semantic-release/semantic-release) 全自动版本管理和包发布, 严格遵循语义版本控制规范。 15K
- [release-it](https://github.com/release-it/release-it) 用于自动化版本控制和包发布。5K

但目前我还尚未测试哪个更适合我的场景。

```bash
npx semantic-release --dry-run

npx release-it --dry-run --ci
```
