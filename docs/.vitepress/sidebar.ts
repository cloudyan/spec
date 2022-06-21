const guide = [
  {
    text: '指南',
    collapsible: true,
    items: [{ text: '简介', link: '/guide/' }],
  },
]

const codingStyle = [
  {
    text: '介绍',
    // collapsible: true,
    items: [
      { text: '规范说明', link: '/coding-style/readme' },
      { text: '命名规范', link: '/coding-style/naming/readme' },
    ],
  },
  {
    text: '编码规范',
    // collapsible: true,
    items: [
      { text: 'HTML 规范', link: '/coding-style/html/readme' },
      { text: 'CSS 规范', link: '/coding-style/css/readme' },
      { text: 'JavaScript 规范', link: '/coding-style/javascript/readme' },
      { text: 'TypeScript 规范', link: '/coding-style/typescript/readme' },
      { text: 'Node.js 规范', link: '/coding-style/nodejs/readme' },
      { text: 'React 规范', link: '/coding-style/react/readme' },
      { text: 'Vue 规范', link: 'https://eslint.vuejs.org/' },
    ],
  },
  {
    text: '其他',
    // collapsible: true,
    items: [
      { text: 'Image', link: '/coding-style/image/readme' },
      { text: 'Icon', link: '/coding-style/icon/readme' },
    ],
  },
]

const best = [
  {
    text: '介绍',
    // collapsible: true,
    items: [{ text: '工程实践', link: '/best/readme' }],
  },
  {
    text: '代码评审',
    // collapsible: true,
    items: [
      { text: '为什么代码审查很重要?', link: '/best/code-review/readme' },
      { text: 'checklist', link: '/best/code-review/checklist' },
    ],
  },
  {
    text: 'Git 流程',
    items: [
      { text: 'Git 工作流', link: '/best/git/workflow' },
      { text: 'Commit Msg', link: '/best/git/readme' },
    ],
  },
  {
    text: '文档',
    items: [{ text: '文档书写最佳实践', link: '/best/docs/readme' }],
  },
  {
    text: 'ChangeLog',
    items: [{ text: '更新日志', link: '/best/changelog/readme' }],
  },
]

const engineering = [
  {
    text: '介绍',
    // collapsible: true,
    items: [{ text: '工程化', link: '/engineering/readme' }],
  },
]

export default {
  guide,
  codingStyle,
  // mobile: guide,
  best,
  engineering,
  rules: [
    {
      text: '项目接入',
      // collapsible: true,
      items: [
        { text: 'project-lock', link: '/rules/readme#project-lock' },
        { text: 'editorconfig', link: '/rules/readme#editorconfig' },
        { text: 'prettier', link: '/rules/readme#prettier' },
        { text: 'eslint', link: '/rules/readme#eslint' },
        { text: 'stylelint', link: '/rules/readme#stylelint' },
        { text: 'browserlist', link: '/rules/readme#browserlist' },
        { text: 'lint-staged', link: '/rules/readme#lint-staged' },
        { text: 'husky', link: '/rules/readme#husky' },
        { text: 'commitlint', link: '/rules/readme#commitlint' },
        { text: 'conventional-changelog', link: '/rules/readme#conventional-changelog' },
        { text: 'sonarlint', link: '/rules/readme#sonarlint' },
        { text: 'markdownlint', link: '/rules/readme#markdownlint' },
      ],
    },
    {
      text: 'IDE 编辑器接入',
      // collapsible: true,
      items: [{ text: 'vscode', link: '/rules/readme#vscode' }],
    },
    {
      text: 'CI 流程接入',
      // collapsible: true,
      items: [
        { text: 'github', link: '/rules/readme#github' },
        { text: 'gitlab', link: '/rules/readme#gitlab' },
        { text: '自研系统', link: '/rules/readme#自研系统' },
      ],
    },
    {
      text: '便捷接入',
      // collapsible: true,
      items: [
        { text: '提取配置', link: '/rules/readme#提取配置' },
        { text: '一键接入', link: '/rules/readme#一键接入' },
      ],
    },
  ],
  // tools: guide,
}
