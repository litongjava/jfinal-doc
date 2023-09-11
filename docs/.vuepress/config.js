// 引入JSON文件
const sidebarZh = require('./sidebar-zh.json');
const sidebarEn = require('./sidebar-en.json');
module.exports = {
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/jfinallogo.png',
    nav: [{
        text: 'Sources',
        ariaLabel: 'Sources Menu',
        items: [{
            text: 'Gitee',
            link: 'https://gitee.com/jfinal/jfinal'
          },
          {
            text: 'Github',
            link: 'https://github.com/jfinal/jfinal'
          }
        ]
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [{
            text: 'Chinese',
            link: '/zh/1 快速上手/1.0 快速上手.md'
          },
          {
            text: 'English',
            link: '/en/1 Quick Start/1.0 Quick Start.md'
          }
        ]
      },
      {
        text: 'About',
        link: '/about/',
      }
    ],
    sidebar: {
      '/zh/': sidebarZh,
      '/en/': sidebarEn
    }
  },
}