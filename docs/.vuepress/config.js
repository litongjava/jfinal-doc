module.exports = {
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
            link: '/zh/guide/'
          },
          {
            text: 'English',
            link: '/en/guide/'
          }
        ]
      },
      {
        text: 'Abount',
        link: '/about/',
      }
    ]
  }
}