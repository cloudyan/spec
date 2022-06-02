import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
import { version } from '../package.json'

export default defineConfig({
  // lang: 'en-US',
  title: 'SPEC',
  description: '这是一份编码规范',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebar.guide,
      // '/coding-style/': sidebar.codingStyle,
      // '/naming/': sidebar.naming,
      // '/mobile/': sidebar.mobile,
      // '/code-review/': sidebar.codeReview,
      '/rules/': sidebar.rules,
      // '/tools/': sidebar.tools,
    },

    editLink: {
      repo: 'cloudyan/spec',
      branch: 'next',
      dir: 'docs',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg',
    },
  },
})

function nav() {
  return [
    { text: '指引', link: '/guide/', activeMatch: '/guide/' },
    // { text: '代码风格', link: '/coding-style/readme', activeMatch: '/coding-style/' },
    // { text: '命名规范', link: '/naming/readme', activeMatch: '/naming/' },
    // { text: '移动端', link: '/mobile/readme', activeMatch: '/mobile/' },
    { text: 'Lint接入', link: '/rules/readme', activeMatch: '/rules/' },
    // { text: '代码评审', link: '/code-review/readme', activeMatch: '/code-review/' },
    // { text: '工具', link: '/tools/readme', activeMatch: '/tools/' },
    {
      text: 'Changelog',
      link: '#',
    },
  ]
}
