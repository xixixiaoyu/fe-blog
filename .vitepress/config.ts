import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
import { biliSvg, juejinSvg } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/fe-blog-website/',
  title: 'web全栈体系',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://p3-passport.byteimg.com/img/user-avatar/f00ed7cb67569c31d1f314fda68d87b4~180x180.awebp',
    nav: [
      {
        text: '精读书籍',
        link: '/books/你不知道的JavaScript/你不知道的JavaScript上卷（第一部分）',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      { text: 'vue', link: '/vue/01-邂逅Vue3' },
      { text: 'react', link: '/vue/' },
      { text: 'ts', link: '/react/' },
      { text: 'js', link: '/source/' },
      { text: 'interview', link: '/source/' },
      { text: '前端路线', link: 'https://roadmap.shengxinjing.cn/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar,

    outline: 3,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: juejinSvg
        },
        link: 'https://space.bilibili.com/26995758'
      },
      {
        icon: {
          svg: biliSvg
        },
        link: 'https://space.bilibili.com/26995758'
      }
    ],
    lastUpdatedText: 'Updated Date',
    editLink: {
      pattern:
        'https://github.com/shengxinjing/fe-advanced-interview/tree/main/docs/:path',
      text: '编辑页面'
    },
    
    footer: {
      message: 'May all encounters not be in vain'
    }
  }
})
