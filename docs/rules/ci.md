# CI 流程接入

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

## github-actions

参见 .github/workflows/check.yaml
