module.exports = {
  // prettier-ignore
  extends: [
    '@commitlint/config-conventional',
  ],
  // https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
  rules: {
    // prettier-ignore
    'type-enum': [2, 'always', [
      'build',    // 构建过程变动
      'chore',    // 构建过程或辅助工具的变动(改变构建流程, 增加依赖库或工具等)
      'ci',       // CI 相关变动(CI related changes)
      'docs',     // 仅文档变动(Documentation only changes)
      'feat',     // 新功能(A new feature)
      'fix',      // 修补bug(A bug fix)
      'pref',     // 优化相关(提升性能、体验等 A code change that improves performance)
      'refactor', // 重构(既不是新增功能，也不是修改bug的代码变动)
                  //    A code change that neither fixes a bug or adds a feature
      'release',  // 新建发布版本(Create a release commit)
      'style',    // 格式调整(如空格，缩进，逗号等，不影响代码运行的变动 Markup, white-space, formatting, missing semi-colons...)
      'revert',   // 回滚, 用于撤销以前的 commit
      'test',     // 测试相关(包含单元测试、集成测试 Adding missing tests)
      'upd',      // 更新某功能（不是 feat, 不是 fix）
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
