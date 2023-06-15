import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import sidebar from './sidebar'
import nav from './header_nav'
import { biliSvg, juejinSvg } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/',
	title: 'web全栈体系',
	description: 'A VitePress Site',
	lastUpdated: true,
	ignoreDeadLinks: true,
	// markdown: {
	//   config: (md) => {
	//     const render = md.render
	//     md.render = function (src, env) {
	//       return `<div v-pre>${render.call(this, src, env)}</div>`
	//     }
	//   }
	// },
	head: [
		[
			'meta',
			{
				name: 'referrer',
				content: 'no-referrer',
			},
		],
	],

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
		outlineTitle: '目录',
		darkModeSwitchLabel: '外观',
		sidebarMenuLabel: '菜单',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/xixixiaoyu' },
			{
				icon: {
					svg: juejinSvg,
				},
				link: 'https://juejin.cn/user/1530130204207822',
			},
			{
				icon: {
					svg: biliSvg,
				},
				link: 'https://space.bilibili.com/145679856?spm_id_from=333.1007.0.0',
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
