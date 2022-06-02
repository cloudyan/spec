const guide = [
  {
    text: '指引',
    collapsible: true,
    items: [{ text: '简介', link: '/guide/' }],
  },
]

const codingStyle = [
  {
    text: '介绍',
    collapsible: true,
    items: [{ text: '为什么需要?', link: '/coding-style/why' }],
  },
  {
    text: 'HTML',
    collapsible: true,
    items: [
      { text: '通用约定', link: '/coding-style/html/general' },
      { text: 'HEAD', link: '/coding-style/html/head' },
      { text: '语义化', link: '/coding-style/html/semantic' },
    ],
  },
  {
    text: 'CSS',
    collapsible: true,
    items: [
      { text: '通用约定', link: '/coding-style/css/general' },
      { text: 'CSS性能', link: '/coding-style/css/performance' },
      { text: 'Less', link: '/coding-style/css/less' },
      { text: 'Scss', link: '/coding-style/css/scss' },
    ],
  },
  {
    text: 'JavaScript',
    collapsible: true,
    items: [
      { text: '通用约定', link: '/coding-style/javascript/general' },
      { text: 'JS性能', link: '/coding-style/javascript/performance' },
      { text: 'jQuery', link: '/coding-style/javascript/jquery' },
    ],
  },
  {
    text: 'TypeScript',
    collapsible: true,
    items: [{ text: '通用约定', link: '/coding-style/typescript/readme' }],
  },
  {
    text: 'React',
    collapsible: true,
    items: [{ text: 'JSX', link: '/coding-style/react/jsx' }],
  },
  {
    text: 'Vue',
    collapsible: true,
    items: [{ text: '官方规范', link: 'https://eslint.vuejs.org/' }],
  },
  {
    text: 'Image',
    collapsible: true,
    items: [
      { text: '图片格式', link: '/coding-style/image/format' },
      { text: '图片引入', link: '/coding-style/image/import' },
    ],
  },
]

export default {
  guide,
  // codingStyle,
  // naming: guide,
  // mobile: guide,
  // codeReview: guide,
  rules: [
    {
      text: '项目接入',
      collapsible: true,
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
      collapsible: true,
      items: [{ text: 'vscode', link: '/rules/readme#vscode' }],
    },
    {
      text: 'CI 流程接入',
      collapsible: true,
      items: [
        { text: 'github-actions', link: '/rules/readme#github-actions' },
        { text: 'gitlab-ci', link: '/rules/readme#gitlab-ci' },
        { text: '自研系统', link: '/rules/readme#自研系统' },
      ],
    },
    {
      text: '便捷接入',
      collapsible: true,
      items: [
        { text: '提取配置', link: '/rules/readme#提取配置' },
        { text: '一键接入', link: '/rules/readme#一键接入' },
      ],
    },
  ],
  // tools: guide,
}
