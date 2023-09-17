// 引入JSON文件
const sidebarZh = require('./sidebar-zh.json');
const sidebarEn = require('./sidebar-en.json');
const navEn = require('./nav-en.json');
module.exports = {
	title: 'JFinal',
	description: 'Java Web 快速开发框架',
	head: [
		["link", {
			rel: "icon",
			href: '/favicon.ico'
		}],
		["meta", {
			name: "author",
			content: "litongjava@qq.com,jfinal@qq.com"
		}],
		["meta", {
			name: "keywords",
			content: "JFinal,jfinal"
		}],
		["script", {
			"crossorigin": "anonymous",
			async: true,
			src: ""
		}],
	],

	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		logo: '/jfinallogo.png',
		lastUpdated: 'Last Updated', // string | boolean,K
		nav: navEn,
		sidebar: {
			'/zh/': sidebarZh,
			'/en/': sidebarEn
		}
	},
}