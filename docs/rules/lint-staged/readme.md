# lint-staged

> Run linters against staged git files and don't let 💩 slip into your code base!
> 仅过滤 Git 暂存区的代码, 避免每次全量检测代码

- 如果对项目中所有文件一次性格式化，大范围的修改很可能出现不可控的情况。
- 借助 lint-staged 可将处理范围限制在 Git 暂存区内 (staged) 的文件。

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
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,md,yml,yaml,css,less,scss}": ["npm run prettier:fix"],
    "*.{js,jsx,ts,tsx}": ["npm run eslint:fix", "npm run stylelint:fix"]
  }
}
```

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

```bash
# pre-commit

yarn pretty-quick --staged
```

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

所以二选一, 保存时候检测 OR commit 前自动格式化+检测
