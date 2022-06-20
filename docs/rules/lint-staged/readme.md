# lint-staged

> Run linters against staged git files and don't let 💩 slip into your code base!
>
> 仅过滤 Git 暂存区的代码, 避免每次全量检测代码

- 如果对项目中所有文件一次性格式化，大范围的修改很可能出现不可控的情况。
- 借助 lint-staged 可将处理范围限制在 Git 暂存区内 (staged) 的文件。
- 由于`v12.0.0` `lint-staged`是一个纯 ESM 模块，因此请确保您的 Node.js 版本至少为`12.20.0`、`14.13.1`或`16.0.0`

## 使用

```bash
npm i -D lint-staged
```

package.json

```jsonc
// 仅对暂存区的内容进行格式化
{
  "scripts": {
    "lint-staged": "lint-staged"
  },
  // 默认任务并行，子任务顺序执行
  "lint-staged": {
    "*.{json,md,yml,yaml}": [
      "npm run prettier:fix"
    ],
    "*.{js,jsx,ts,tsx}": [
      "npm run prettier:fix",
      "npm run eslint:fix"
    ],
    "*.{css,less,scss}": [
      "npm run prettier:fix",
      "npm run stylelint:fix"
    ]
  }
}
```

注意: `--concurrent` 控制任务的并发性, 默认 `true`, 这不会影响子任务的并发性（数组里的任务, 它们将始终按顺序运行）

## 扩展

### 原理

lint-staged 由 git 命令获取暂存区的文件 `git diff --staged --diff-filter=ACMR --name-only -z`，整体步骤大致如下

- 通过命令获取暂存区文件名
- 将文件拆分后，进行序列化，获取文件的完整路径
- 获得完整路径后，根据配置的相应执行规则，创建任务，并执行

### glob

- `src/**/*.{js,vue}`：匹配 src 目录下所有的 js 和 vue 文件
- 匹配规则为 `glob-pattern`:
  - `**` 表示递归匹配目录
  - `/*.{js,vue}`会展开为 `/*.js /*.vue`

glob-pattern 文章参考

- [A Beginner’s Guide: Glob Patterns](https://www.malikbrowne.com/blog/a-beginners-guide-glob-patterns)
- [node-glob 学习](https://www.cnblogs.com/liulangmao/p/4552339.html)

也可以使用 [pretty-quick](https://github.com/azz/pretty-quick#readme) 来替代 `lint-staged`。

区别：

- `pretty-quick` 是在 git commit 之前，**先到暂存区配合prettier进行代码格式化，然后重新add到暂存区**。
- `lint-staged` 是对暂存区的代码进行 lint，执行文件对应的格式化配置。

```bash
# pre-commit

npx pretty-quick --staged
```

- `--staged`: 这个配置是告诉 linter 只在 git 阶段生效

### 其他项目

```jsonc
{
  // vite
  "simple-git-hooks": {
    "pre-commit": "pnpm exec lint-staged --concurrent false",
    "commit-msg": "pnpm exec ts-node scripts/verifyCommit.ts $1"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,less,md,json}": ["prettier --write --ignore-unknown"],
    "*.ts?(x)": ["prettier --parser=typescript --write --ignore-unknown"],
    "*": ["prettier --write --ignore-unknown"],
    "packages/*/{src,types}/**/*.ts": ["eslint --fix"],
    "packages/**/*.d.ts": ["eslint --fix"],
    "playground/**/__tests__/**/*.ts": ["eslint --fix"]
  }
}
```

### 注意

如果项目中配置了 eslint-loader 进行 eslint-on-save, 会和 lint-staged 冲突，需要关闭

因为 eslint-loader 是保存的时候进行检测，如果项目 lint 没通过，无法正常开发，此时开启 lint-staged 没有什么意义。

可以二选一, 保存时候检测 OR commit 前自动格式化+检测

其实，两者都开启，甚至同时也接入运行时 lint 检查，也没什么不可以的。

### lint-staged 接入 CI

--diff 默认情况下，对所有暂存于 git 的文件进行过滤，生成自git diff --staged.

`--diff="branch1...branch2"`

我可以lint-staged在 CI 中运行，还是在没有暂存文件的情况下运行？

默认情况下，lint-staged 仅针对在 git 中暂存文件运行检查，在 git pre-commit 钩子期间运行。其实，lint-staged 也可以覆盖此默认行为并针对特定差异中的文件运行，例如两个不同分支之间的所有更改文件。

如果您想在 CI 中运行lint-staged，也许您可​​以将其设置为将Pull Request / Merge Request中的分支与目标分支进行比较。

```bash
git diff main... --name-only -- '*.ts'

# 打印 main 和 dev 分支之间添加、更改、修改或重命名的文件列表
git diff --diff-filter=ACMR --name-only main...dev

# 我们可以如下使用
npx lint-staged --diff="master...feature/my-branch"
```

关于 `--diff-filter=[(A|C|D|M|R|T|U|X|B)…​[*]]`

添加A，复制C，删除D，修改M，重命名R，类型更改T，未合并U，未知X，配对已损坏B，使用小写字母时，用以排除。

参考：

- https://git-scm.com/docs/git-diff
- https://git-scm.com/docs/gitrevisions
- https://github.com/micromatch/micromatch
- [lint-staged 如何做到只 lint staged?](https://juejin.cn/post/6844903864722784264)

## 问题

### How can I ignore files from .eslintignore?

ESLint throws out `warning File ignored because of a matching ignore pattern. Use "--no-ignore" to override` warnings that breaks the linting process ( if you used `--max-warnings=0` which is recommended ).

遇到此问题，参考官方文档即可

