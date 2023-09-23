(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{545:function(s,a,e){"use strict";e.r(a);var n=e(14),i=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_5-2-activerecordplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-activerecordplugin"}},[s._v("#")]),s._v(" 5.2 ActiveRecordPlugin")]),s._v(" "),a("p",[s._v("ActiveRecord是作为JFinal的Plugin而存在的，所以使用时需要在JFinalConfig中配置ActiveRecordPlugin。")]),s._v(" "),a("p",[s._v("以下是Plugin配置示例代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('public class DemoConfig extends JFinalConfig {\n  public void configPlugin(Plugins me) {\n  DruidPlugin dp = new DruidPlugin("jdbc:mysql://localhost/db_name", "userName", "password");\n    me.add(dp);\n    ActiveRecordPlugin arp = new ActiveRecordPlugin(dp);\n    me.add(arp);\n    arp.addMapping("user", User.class);\n    arp.addMapping("article", "article_id", Article.class);\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("以上代码配置了两个插件：DruidPlugin与ActiveRecordPlugin，前者是druid数据源插件，后者是ActiveRecrod支持插件。ActiveReceord中定义了addMapping(String tableName, Class<? extends Model> modelClass>)方法，该方法建立了数据库表名到Model的映射关系。")]),s._v(" "),a("p",[s._v('另外，以上代码中arp.addMapping("user", User.class)，表的主键名为默认为 "id"，如果主键名称为 "user_id" 则需要手动指定，如：arp.addMapping("user", "user_id", User.class)。')]),s._v(" "),a("p",[s._v("重要：以上的 arp.addMapping(...)  映射配置，可以让 jfinal 生成器自动化完成，不再需要手动添加这类配置，具体用法见文档：https://www.jfinal.com/doc/5-4")])])}),[],!1,null,null,null);a.default=i.exports}}]);