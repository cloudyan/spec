/* eslint-disable max-len: 0 */
module.exports = {
  // 继承
  extends: ['@commitlint/config-conventional'],
  // parserPreset: 'conventional-changelog-conventionalcommits',
  // https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
  // 自定义校验规则
  rules: {
    'header-max-length': [1, 'always', 100],
    // prettier-ignore
    'type-enum': [2, 'always', [
      'feat',     // 新特性、新功能(A new feature)
      'fix',      // 修补bug(A bug fix)
      'docs',     // 仅文档变动(Documentation only changes)
      'style',    // 代码格式修改，注意不是 css 修改(不影响代码运行的变动 white-space, formatting, missing semi-colons...)
      'refactor', // 重构(既不是新增功能，也不是修改bug的代码变动) A code change that neither fixes a bug or adds a feature
      'pref',     // 优化相关(提升性能、体验等 A code change that improves performance)
      'test',     // 测试用例修改(包含单元测试、集成测试 Adding missing tests)
      'build',    // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
      'chore',    // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
      'ci',       // CI 持续集成修改(CI related changes)
      'revert',   // 回滚, 用于撤销以前的 commit
      // 'release',  // 新建发布版本(Create a release commit)
      // 'update',   // 普通更新（不是 feat, 不是 fix）
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
}
