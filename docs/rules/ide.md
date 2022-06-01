# IDE 接入

## VSCode

相关插件如下

- prettier
  - [Prettier - Code formatter 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - 待确认 [Prettier ESLint 插件](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- eslint
  - [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- stylelint (以下二选一)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)

可使用用户配置，不影响全局配置

在项目中新建配置 [`.vscode/settings.json`](./.vscode/settings.json)

```js
{
  "editor.formatOnSave": true, // 保存时自动格式化
  "editor.defaultFormatter": "stylelint.vscode-stylelint",
  // 保存代码时，自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // 保存时使用eslint校验文件
    "source.fixAll.stylelint": true
  },


  // 以下待确认
  "[css]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "[html]": {
    // "editor.defaultFormatter": "HookyQR.beautify"
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    // "editor.defaultFormatter": "HookyQR.beautify"
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // "[markdown]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "files.associations": {
    "*.json": "jsonc"
  },
  "eslint.workingDirectories": [{ "mode": "auto" }],
  // "eslint.options": {
  //   "overrideConfigFile": "babel.config.js"
  // },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.format.enable": true,
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
    // "markdown",
    // 以上是默认, 下面新增 html vue,
    // 因为需要 plugin 包支持，建议这两个添加到 Vue 相关项目的工作区环境配置中
    // "html", // 需要 eslint-plugin-html
    // "vue", // 需要 eslint-plugin-vue
    // ".*ignore"
    // "gitignore"
  ]
  // "eslint.validate": [
  //   "javascript",
  //   "javascriptreact",
  //   "vue"
  // ],

  // "typescript.tsdk": "node_modules/typescript/lib",
  // "jest.jestCommandLine": "yarn jest --watchAll",

  // //自动格式化粘贴的代码
  // "files.autoSave": "afterDelay"
}
```

### 快捷键

[vscode 格式化快捷键](https://stackoverflow.com/questions/29973357/how-do-you-format-code-in-visual-studio-code-vscode)

代码格式可通过以下快捷方式在 Visual Studio Code 中使用：

- 在 Windows <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>
- 在 Mac <kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>F</kbd>
- 在 Linux <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>

<kbd>Ctrl</kbd> 或者，您可以通过带有++ （或 Mac 上的<kbd>Shift</kbd> ++ ）的编辑器中提供的“命令面板”找到快捷方式以及其他快捷方式，然后搜索**格式文档**。<kbd>P</kbd> <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>P</kbd>

## Sublime Text

暂未做探究

- [SublimeLinter](https://github.com/airbnb/javascript/blob/master/linters/SublimeLinter/SublimeLinter.sublime-settings)

## 问题

- [ ] 编辑 `.git/config` 时，预期不符
  - 保存时被自动格式化了，但格式不符合预期，暂未定位到原因

## vscode 格式化配置

```js
  // 定义一个默认格式化程序, 该格式化程序优先于所有其他格式化程序设置。必须是提供格式化程序的扩展的标识符。
  //  - null: 没有
  //  - formulahendry.auto-close-tag: Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text
  //  - formulahendry.auto-rename-tag: Auto rename paired HTML/XML tag
  //  - HookyQR.beautify: Beautify code in place for VS Code
  //  - aaron-bond.better-comments: Improve your code commenting by annotating with alert, informational, TODOs, and more!
  //  - michelemelluso.code-beautifier: Beautify css, sass and less code (extension for Visual Studio Code)
  //  - formulahendry.code-runner: Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir, VB.NET, Clojure, Haxe, Obj-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Pascal, Haskell, Nim, D, Lisp, Kit, V, SCSS, Sass, CUDA, Less, Fortran, Ring
  //  - vscode.css-language-features: 为 CSS、LESS 和 SCSS 文件提供丰富的语言支持。
  //  - oouo-diogo-perdigao.docthis: Automatically generates detailed JSDoc comments in TypeScript and JavaScript files.
  //  - codezombiech.gitignore: Lets you pull .gitignore templates from the https://github.com/github/gitignore repository. Language support for .gitignore files.
  //  - vscode.html-language-features: 为 HTML 和 Handlebar 文件提供丰富的语言支持
  //  - iceworks-team.iceworks-material-helper: Easily use Component in React/Vue/Rax.
  //  - vscode.json-language-features: 为 JSON 文件提供丰富的语言支持
  //  - yzhang.markdown-all-in-one: 使用 Markdown 所需要的一切（快捷键，目录，自动预览以及更多功能）
  //  - vscode.markdown-language-features: 为 Markdown 提供丰富的语言支持。
  //  - darkriszty.markdown-table-prettify: Transforms markdown tables to be more readable.
  //  - vscode.php-language-features: 为 PHP 文件提供丰富的语言支持。
  //  - esbenp.prettier-vscode: Code formatter using prettier
  //  - ms-vscode.references-view: Reference Search results as separate, stable view in the sidebar
  //  - zhang-renyang.rm-js-comment: rm-js-comment
  //  - vscode.search-result: 为选项卡搜索结果中提供语法突出显示和语言功能。
  //  - foxundermoon.shell-format: shellscript、Dockerfile、properties、gitignore、dotenv、hosts、jvmoptions... DocumentFormat
  //  - vscode.typescript-language-features: 为 JavaScript 和 TypeScript 提供丰富的语言支持。
  //  - octref.vetur: Vue tooling for VS Code
  //  - dbaeumer.vscode-eslint: Integrates ESLint JavaScript into VS Code.
  //  - ecmel.vscode-html-css: CSS Intellisense for HTML
  //  - DavidAnson.vscode-markdownlint: Markdown linting and style checking for Visual Studio Code
  //  - tombonnike.vscode-status-bar-format-toggle: A VS Code extension that allows you to toggle formatting settings ON and OFF with a simple click.
  //  - styled-components.vscode-styled-components: Syntax highlighting for styled-components
  //  - stylelint.vscode-stylelint: Official Stylelint extension for Visual Studio Code
  //  - pflannery.vscode-versionlens: Shows the latest version for each package using code lens
  //  - redhat.vscode-yaml: YAML Language Support by Red Hat, with built-in Kubernetes syntax support
  //  - stevencl.addDocComments: Adds jsdoc @param and @return tags for selected function signatures in JS and TS
  //  - develiteio.api-blueprint-viewer: Preview API Blueprint compatible API documentation right there in Visual Studio Code!
  //  - rogalmic.bash-debug: A debugger extension for bash scripts (using bashdb).
  //  - bungcip.better-toml: Better TOML Language support
  //  - alefragnani.Bookmarks: Mark lines and jump to them
  //  - unbug.codelf: Best GitHub stars, repositories tagger and organizer. Search Github, GitLab to find real-world usage variable names.
  //  - naumovs.color-highlight: Highlight web colors in your editor
  //  - bierner.color-info: Provides quick information about css colors
  //  - joshbolduc.commitlint: Integrate commitlint into the VS Code commit editor
  //  - vscode.configuration-editing: 在配置文件 (如设置、启动和扩展推荐文件) 中提供高级 IntelliSense、自动修复等功能
  //  - vscode.debug-auto-launch: 当 node-debug 扩展未启用时提供自动附加的辅助程序。
  //  - vscode.debug-server-ready: 如果正在调试的服务器已准备就绪，在浏览器中打开 URI。
  //  - EditorConfig.EditorConfig: EditorConfig Support for Visual Studio Code
  //  - vscode.emmet: 适用于 VS Code 的 Emmet 支持
  //  - vilicvane.es-quotes: Transform quotes of ECMAScript string literals.
  //  - dsznajder.es7-react-js-snippets: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.
  //  - vscode.extension-editing: 在创建扩展时提供 linting 功能。
  //  - redhat.fabric8-analytics: Insights about your application dependencies: Security, License compatibility and AI based guidance to choose appropriate dependencies for your application.
  //  - vscode.git: Git 源代码管理集成
  //  - vscode.git-base: Git 静态贡献和选取器。
  //  - mhutchie.git-graph: View a Git Graph of your repository, and perform Git actions from the graph.
  //  - waderyan.gitblame: See git blame information in the status bar.
  //  - donjayamanne.githistory: View git log, file history, compare branches or commits
  //  - vscode.github: 适用于 VS Code 的 GitHub 功能
  //  - vscode.github-authentication: GitHub 身份验证提供程序
  //  - jasonn-porch.gitlab-mr: Manage MRs in Gitlab from VS Code
  //  - eamodio.gitlens: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more
  //  - vscode.grunt: Extension to add Grunt capabilities to VS Code.
  //  - vscode.gulp: 向 VSCode 提供 Gulp 功能的扩展。
  //  - vincaslt.highlight-matching-tag: Highlights matching closing and opening tags
  //  - iceworks-team.iceworks-app: Quick view your Universal Application(React/Rax/Vue, etc).
  //  - iceworks-team.iceworks-doctor: A free security and quality audit tool for modern DevOps teams
  //  - iceworks-team.iceworks-generator: Easily create React/Rax boilerplate code.
  //  - iceworks-team.iceworks-project-creator: Quick create a Universal Application(React/Rax/Vue, etc).
  //  - iceworks-team.iceworks-refactor: Easily refactor Component in React/Rax.
  //  - iceworks-team.iceworks-style-helper: Easily write styles(CSS/LESS/SASS).
  //  - iceworks-team.iceworks-time-master: Metrics, insights, and time tracking automatically generated from your programming activity.
  //  - vscode.image-preview: 提供 VS Code的内置图像预览
  //  - oderwat.indent-rainbow: Makes indentation easier to read
  //  - VisualStudioExptTeam.intellicode-api-usage-examples: See relevant code examples from GitHub for over 100K different APIs right in your editor.
  //  - vscode.ipynb: 为打开和读取 Jupyter 的 .ipynb 笔记本文件提供基本支持
  //  - vscode.jake: 向 VS Code 提供 Jake 功能的扩展。
  //  - ms-vscode.js-debug: An extension for debugging Node.js programs and Chrome.
  //  - ms-vscode.js-debug-companion: Companion extension to js-debug that provides capability for remote debugging
  //  - ms-vscode.js-debug-nightly: An extension for debugging Node.js programs and Chrome.
  //  - vscode.markdown-math: 在笔记本中向 Markdown 添加数学支持。
  //  - vscode.merge-conflict: 为内联合并冲突提供高亮和命令。
  //  - vscode.microsoft-authentication: Microsoft 身份验证提供程序
  //  - vscode.npm: 为 npm 脚本提供任务支持的扩展。
  //  - christian-kohler.npm-intellisense: Visual Studio Code plugin that autocompletes npm modules in import statements
  //  - ryu1kn.partial-diff: Compare (diff) text selections within a file, across files, or to the clipboard
  //  - IWANABETHATGUY.path-alias: 一个可以解决路径别名提示，跳转的vscode插件
  //  - christian-kohler.path-intellisense: Visual Studio Code plugin that autocompletes filenames
  //  - vscode.simple-browser: 一个非常基本的内置 Web 视图，用于显示 Web 内容。
  //  - burkeholland.simple-react-snippets: Dead simple React snippets you will actually use
  //  - zengxingxin.sort-js-object-keys: An extension to sort the js object keys
  //  - ms-vscode.sublime-keybindings: Import Sublime Text settings and keybindings into VS Code.
  //  - Gruntfuggly.todo-tree: Show TODO, FIXME, etc. comment tags in a tree view
  //  - Vue.volar: Language support for Vue 3
  //  - clinyong.vscode-css-modules: Visual Studio Code extension for CSS Modules
  //  - pranaygp.vscode-css-peek: Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition.
  //  - mikey.vscode-fileheader: insert header comment,and automatically update the time.
  //  - mkxml.vscode-filesize: Show the current file size in the status bar
  //  - sleistner.vscode-fileutils: A convenient way of creating, duplicating, moving, renaming and deleting files and directories.
  //  - kisstkondoros.vscode-gutter-preview: Shows image preview in the gutter and on hover
  //  - vscode-icons-team.vscode-icons: Icons for Visual Studio Code
  //  - wix.vscode-import-cost: Display import/require package size in the editor
  //  - ms-vscode.vscode-js-profile-table: Text visualizer for profiles taken from the JavaScript debugger
  //  - LeetCode.vscode-leetcode: Solve LeetCode problems in VS Code
  //  - eg2.vscode-npm-script: npm support for VS Code
  //  - mrmlnc.vscode-postcss-sorting: VS Code plugin to sort CSS rules content with specified order.
  //  - GitHub.vscode-pull-request-github: Pull Request and Issue Provider for GitHub
  //  - VisualStudioExptTeam.vscodeintellicode: AI-assisted development
  "editor.defaultFormatter": null,
```
