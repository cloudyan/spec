# git hooks

git 允许在各种操作之前添加一些 hook 脚本，如未正常运行则 git 操作不通过。

- precommit
- prepush

git hooks 可使用 `core.hooksPath` 自定义脚本位置。

```bash
# husky 即通过自定义 core.hooksPath 并将 npm scripts 写入其中的方式来实现此功能。
git config 'core.hooksPath' .husky

npm set-script prepare "husky install"
```

在 `.husky` 下手动创建 `pre-commit hook`

```bash
vim .husky/pre-commit

```

在 `pre-commit` 中进行代码风格校验

```sh
#!/bin/sh

npm run lint
npm run test
```

## husky

### 配置 husky && commitlint

- 参考 https://cnodejs.org/topic/5c0bcaeff3d48d2397c0f446

添加 husky

```bash
# https://commitlint.js.org/#/guides-local-setup
pnpx husky-init

# npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

add commitlint

```bash
pnpm i @commitlint/{cli,config-conventional,prompt-cli} -D

# npm set-script prepare "husky install"

echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js


pnpm i validate-commit-msg cz-conventional-changelog np lint-staged -D
```
