(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{542:function(s,e,a){"use strict";a.r(e);var n=a(14),l=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_5-14-多数据源支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-14-多数据源支持"}},[s._v("#")]),s._v(" 5.14 多数据源支持")]),s._v(" "),e("p",[s._v("ActiveRecordPlugin可同时支持多数据源、多方言、多缓存、多事务级别等特性，对每个 ActiveRecordPlugin 可进行彼此独立的配置。简言之 JFinal 可以同时使用多数据源，并且可以针对这多个数据源配置独立的方言、缓存、事务级别等。")]),s._v(" "),e("p",[s._v("当使用多数据源时，只需要对每个 ActiveRecordPlugin指定一个 configName即可，如下是代码示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('public void configPlugin(Plugins me) {\n  // mysql 数据源\n  DruidPlugin dsMysql = new DruidPlugin(…);\n  me.add(dsMysql);\n  \n  // mysql ActiveRecrodPlugin 实例，并指定configName为 mysql\n  ActiveRecordPlugin arpMysql = new ActiveRecordPlugin("mysql", dsMysql);\n  me.add(arpMysql);\n  arpMysql.addMapping("user", User.class);\n  \n  // oracle 数据源\n  DruidPlugin dsOracle = new DruidPlugin(…);\n  me.add(dsOracle);\n  \n  // oracle ActiveRecrodPlugin 实例，并指定configName为 oracle\n  ActiveRecordPlugin arpOracle = new ActiveRecordPlugin("oracle", dsOracle);\n  me.add(arpOracle);\n  arpOracle.setDialect(new OracleDialect());\n  arpOracle.addMapping("blog", Blog.class);\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("以上代码创建了创了两个ActiveRecordPlugin实例arpMysql与arpOrace，特别注意创建实例的同时指定其configName分别为mysql与oracle。arpMysql与arpOracle分别映射了不同的Model，配置了不同的方言。")]),s._v(" "),e("p",[s._v("对于Model的使用，不同的Model会自动找到其所属的ActiveRecrodPlugin实例以及相关配置进行数据库操作。假如希望同一个Model能够切换到不同的数据源上使用，也极度方便，这种用法非常适合不同数据源中的table拥有相同表结构的情况，开发者希望用同一个Model来操作这些相同表结构的table，以下是示例代码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('public void multiDsModel() {\n  // 默认使用arp.addMapping(...)时关联起来的数据源\n  Blog blog = new Blog().dao().findById(123);\n \n  // 只需调用一次use方法即可切换到另一数据源上去\n  blog.use("mysql-bak").save();\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v('上例中的代码，blog.use("mysql-bak") 方法切换数据源到 mysql-bak ，随后的 save() 将数据保存到该数据源。')]),s._v(" "),e("p",[s._v("特别注意：只有在同一个Model希望对应到多个数据源的table时才需要使用use方法，如果同一个Model唯一对应一个数据源的一个table，那么数据源的切换是自动的，无需使用use方法。")]),s._v(" "),e("p",[s._v("对于Db + Record的使用，数据源的切换需要使用Db.use(configName)方法得到数据库操作对象，然后就可以进行数据库操作了，以下是代码示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 查询 dsMysql数据源中的 user\nList<Record> users = Db.use("mysql").find("select * from user");\n// 查询 dsOracle数据源中的 blog\nList<Record> blogs = Db.use("oracle").find("select * from blog");\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("以上两行代码，分别通过configName为mysql、oracle得到各自的数据库操作对象，然后就可以如同单数据完全一样的方式来使用数据库操作 API了。简言之，对于 Db + Record来说，多数据源相比单数据源仅需多调用一下Db.use(configName)，随后的API使用方式完全一样。")]),s._v(" "),e("p",[s._v("注意最先创建的 ActiveRecrodPlugin实例将会成为主数据源，可以省略configName。最先创建的 ActiveRecrodPlugin实例中的配置将默认成为主配置，此外还可以通过设置configName为 DbKit.MAIN_CONFIG_NAME常量来设置主配置。")])])}),[],!1,null,null,null);e.default=l.exports}}]);