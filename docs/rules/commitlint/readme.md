# commitlint

> Lint commit messages
>
> 检验提交的说明是否符合规范，不符合则不可以提交

主要是基于 AngularJS team [git commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)，这是目前使用最广的写法，比较合理和系统化，并且有配套的工具。

- [官站](https://commitlint.js.org/)
- <https://marionebl.github.io/commitlint/#/reference-rules>

## 项目接入

usage

```bash
# Install and configure if needed
npm i -D @commitlint/{cli,config-conventional}
# For Windows:
npm i -D @commitlint/cli @commitlint/config-conventional
```

config

```bash
# Add hook
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE


# Make hook executable
chmod a+x .husky/commit-msg
```

规则配置文件

```bash
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

```js
// .commitlintrc.js
// 或 commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 100],
    // prettier-ignore
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'enhance',
        'chore',
        'test',
        'doc',
        'refactor',
        'style',
        'revert',
      ],
    ],
  },
};
```

测试

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose

echo 'foo: xxx' | npx commitlint --verbose
```

## 扩展

### commit msg 规范

为什么要，好处：

- 提供更多的历史信息，方便快速浏览
- 可以过滤某些 `commit`，便于筛选代码 `review`
- 可以追踪 `commit` 生成更新日志
- 可以关联 `issues`

### Git commit 日志基本规范

主要包含三部分：Header，Body 和 Footer, 格式规范如下

```js
<type>(<scope>): <subject> // header 必填
// 空一行
<body>
// 空一行
<footer>
```

所有的 type 类型如下：

> type 代表某次提交的类型，比如是修复一个 bug 还是增加一个新的 feature。

```js
feat:   新增 feature
fix:    修复 bug
docs:   仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
style:  仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
refactor: 代码重构，没有加新功能或者修复 bug
perf:   优化相关，比如提升性能、体验
test:   测试用例，包括单元测试、集成测试等
chore:  改变构建流程、或者增加依赖库、工具等
revert: 回滚到上一个版本
```

格式要求：

```yaml
# 标题行：50个字符以内，描述主要变更内容
#
# 主体内容：更详细的说明文本，建议72个字符以内。 需要描述的信息包括:
#
# * 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等
# * 他如何解决这个问题? 具体描述解决问题的步骤
# * 是否存在副作用、风险?
#
# 尾部：如果需要的化可以添加一个链接到issue地址或者其它文档，或者关闭某个issue。
```

规范的提交，可以通过工具辅助实现，可参考[交互式方案](./commitizen.md)。

### 接入 CI

Gitlab CI

```yaml
lint:commit:
  stage: lint
  script:
    - echo "${CI_COMMIT_MESSAGE}" | npx commitlint
```
