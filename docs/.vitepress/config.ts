import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
// import { version } from '../package.json'

export default defineConfig({
  // lang: 'en-US',
  title: 'SPEC',
  description: '这是一份编码规范',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebar.guide,
      '/coding-style/': sidebar.codingStyle,
      // '/naming/': sidebar.naming,
      // '/mobile/': sidebar.mobile,
      '/best/': sidebar.best,
      '/engineering/': sidebar.engineering,
      '/rules/': sidebar.rules,
      // '/tools/': sidebar.tools,
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },

    socialLinks: [{ icon: 'github', link: '#' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Evan You',
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress',
    // },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg',
    },
  },

  markdown: {
    // markdown-it-anchor 的选项
    // anchor: { permalink: false },

    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-imsize'))
    },
  },
})

function nav() {
  return [
    // activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    { text: '指引', link: '/guide/', activeMatch: '^/guide/' },
    {
      text: '编码规范',
      activeMatch: `^/(coding-style)/`,
      items: [
        { text: '命名规范', link: '/coding-style/naming/readme' },
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
      text: '最佳实践',
      activeMatch: `^/(best|code-review|refactoring|mobile)/`,
      items: [
        { text: '移动端适配', link: '/mobile/readme' },
        { text: 'Git 工作流', link: '/best/git/workflow' },
        { text: '代码评审', link: '/best/code-review/readme' },
        { text: '项目重构', link: '/refactoring/readme' },
      ],
    },
    {
      text: '工程化',
      activeMatch: `^/(engineering|rules|deploy)/`,
      items: [{ text: 'Lint接入', link: '/rules/readme' }],
    },
    { text: '工具箱', link: '/tools/readme', activeMatch: '^/tools/' },
    // {
    //   text: 'Changelog',
    //   link: '#',
    // },
  ]
}
