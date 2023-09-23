// 引入JSON文件
const head = require('./config/head');
const plugin = require('./config/plugins');
const themeConfig = require('./config/themeConfig');
module.exports = {
  base: '/jfinal-doc/',
  title: 'JFinal Docs',
  description: 'Java Web 快速开发框架',
  head: head,
  plugins: plugin,

  markdown: {
    lineNumbers: true
  },
  themeConfig: themeConfig,
}