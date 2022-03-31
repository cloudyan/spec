# husky


## 配置 husky && commitlint

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
