# husky

> Modern native git hooks made easy

## 项目接入

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
npx husky add .husky/pre-commit "npx --no -- lint-staged"
# 或
npx husky add .husky/pre-commit "npm run lint-staged"

npx husky add .husky/pre-commit "npm test"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "${1}"' # 这个执行有问题
yarn husky add .husky/commit-msg 'npx --no -- commitlint --edit "${1}"' # 这个可以

# husky uninstall
npm uninstall husky && git config --unset core.hooksPath
```

注意: 针对客户端 git hooks 而言，很容易通过 `git commit --no-verify` 而跳过检查，所以对应规范需要在 CI 流程中卡点。

## 扩展

git 允许在各种操作之前添加一些 hook 脚本，如未正常运行则 git 操作不通过。

- Husky Hooks
  1. pre-commit
  2. pre-push
  3. post-merge
  4. pre-receive
  5. prepare-commmit-msg
- Task Runner
  1. Lint commit-msg
  2. Analyze code
  3. Format code
  4. Run tests
  5. Run scripts

git hooks 可使用 `core.hooksPath` 自定义脚本位置。

**为什么用 husky？**

我们只会用到“提交工作流”钩子，提交工作流包含 4 个钩子：

- `pre-commit` 在提交信息**编辑前**运行，在这个阶段塞入**代码检查**流程，检查未通过返回非零值即可停止提交流程；
- `prepare-commit-msg` 在默认信息被创建之后运行，此时正是**启动编辑器前**，可在这个阶段加载 `commitizen` 之类的辅助填写工具；
- `commit-msg` 在**完成编辑后**运行，可在这个阶段借助 `commitlint` 进行提交信息规范性检查；
- `post-commit` 在**提交完成后**运行，在这个阶段一般做一些通知操作。

使用 Git 钩子最直观的方式是操作 `.git/hooks` 下的示例文件，将对应钩子文件的 `.sample` 后缀名移除即可启用。然而这种操作方式存在弊端：

- 需要操作项目范围外的 `.git` 目录
- 无法同步 `.git/hooks` 到远程仓库

两个弊端可以通过为 Git 指定 hooks 目录完美避过，Husky 便是基于此方案实现

```bash
# husky 即通过自定义 core.hooksPath 并将 npm scripts 写入其中的方式来实现此功能。
git config 'core.hooksPath' .husky

npm set-script prepare "husky install"
```

注: husky@4 老版本配置方式是不一样的，如下

```json
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
},
```

注: `--no-install` 选项已弃用，并将转换为 `--no`

在 CI/Docker/Prod 中禁用 `husky`?

参见[官方文档](https://typicode.github.io/husky/#/?id=disable-husky-in-cidockerprod)
