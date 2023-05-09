import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
import nav from './header_nav'
import { biliSvg, juejinSvg } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/fe-blog-website/',
	title: 'web全栈体系',
	description: 'A VitePress Site',
	locales: {
		root: { label: '简体中文', lang: 'zh-CN' },
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: 'https://p3-passport.byteimg.com/img/user-avatar/f00ed7cb67569c31d1f314fda68d87b4~180x180.awebp',
		nav,
		sidebar,

		search: {
			provider: 'local',
		},

		outline: 'deep',

		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		returnToTopLabel: '返回顶部',
		outlineTitle: '导航栏',
		darkModeSwitchLabel: '外观',
		sidebarMenuLabel: '归档',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
			{
				icon: {
					svg: juejinSvg,
				},
				link: 'https://space.bilibili.com/26995758',
			},
			{
				icon: {
					svg: biliSvg,
				},
				link: 'https://space.bilibili.com/26995758',
			},
		],
		lastUpdatedText: 'Updated Date',
		editLink: {
			pattern: 'https://github.com/xixixiaoyu/fe-blog/tree/main/:path',
			text: '编辑页面',
		},

		footer: {
			message: 'May all encounters not be in vain',
		},
	},
})
