(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{511:function(n,s,a){"use strict";a.r(s);var e=a(14),i=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_2-5-configplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-configplugin"}},[n._v("#")]),n._v(" 2.5 configPlugin")]),n._v(" "),s("p",[n._v("此方法用来配置JFinal的Plugin，如下代码配置了Druid数据库连接池插件与ActiveRecord数据库访问插件。通过以下的配置，可以在应用中使用ActiveRecord非常方便地操作数据库。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('public void configPlugin(Plugins me) {\n    DruidPlugin dp = new DruidPlugin(jdbcUrl, userName, password);\n    me.add(dp);\n    \n    ActiveRecordPlugin arp = new ActiveRecordPlugin(dp);\n    arp.addMapping("user", User.class);\n    me.add(arp);\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("p",[n._v("JFinal插件架构是其主要扩展方式之一，可以方便地创建插件并应用到项目中去。")])])}),[],!1,null,null,null);s.default=i.exports}}]);