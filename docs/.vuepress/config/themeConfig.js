const sidebarZh = require('./sidebar-zh.json');
const sidebarEn = require('./sidebar-en.json');
const navEn = require('./nav-en.json');

module.exports = {
  logo: '/jfinallogo.png',
  lastUpdated: 'Last Updated', // string | boolean,K
  nav: navEn,
  sidebar: {
    '/zh/':
    sidebarZh,
    '/en/':
    sidebarEn
  }
};