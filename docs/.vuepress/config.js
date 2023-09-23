// 引入JSON文件
const sidebarZh = require('./sidebar-zh.json');
const sidebarEn = require('./sidebar-en.json');
const navEn = require('./nav-en.json');
module.exports = {
  base: '/jfinal-doc/',
  title: 'JFinal Docs',
  description: 'Java Web 快速开发框架',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
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
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: "New content is available.",
          buttonText: "Refresh"
        },
        '/zh/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    }],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github-v4',
      owner: 'litongjava',
      repo: 'jfinal-doc',
      clientId: 'ae6d92a29afb796496fb',
      clientSecret: '9c459b786da1ccb9608e951e3e118a5e026ada69',
      autoCreateIssue: true,
    }],
    ['@vuepress/back-to-top']
  ],

  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/jfinallogo.png',
    lastUpdated: 'Last Updated', // string | boolean,K
    nav: navEn,
    sidebar: {
      '/zh/':
      sidebarZh,
      '/en/':
      sidebarEn
    }
  }
}