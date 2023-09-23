(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{538:function(s,n,e){"use strict";e.r(n);var t=e(14),a=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_4-7-routes-级别拦截器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-routes-级别拦截器"}},[s._v("#")]),s._v(" 4.7 Routes 级别拦截器")]),s._v(" "),n("p",[s._v("Routes级别拦截器是指在Routes中添加的拦截器，如下是示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/**\n * 后端路由\n */\npublic class AdminRoutes extends Routes {\n \n  public void config() {\n     // 此处配置 Routes 级别的拦截器，可配置多个\n     addInterceptor(new AdminAuthInterceptor());\n \n     add("/admin", IndexAdminController.class, "/index");\n     add("/admin/project", ProjectAdminController.class, "/project");\n     add("/admin/share", ShareAdminController.class, "/share");\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("在上例中，AdminAuthInterceptor 将拦截IndexAdminController、ProjectAdminController、ShareAdminController 中所有的 action 方法。")]),s._v(" "),n("p",[s._v("Routes 拦截器在功能上通过一行代码，同时为多个 Controller 配置好相同的拦截器，减少了代码冗余。Routes 级别拦截器将在 Class 级别拦截器之前被调用。")])])}),[],!1,null,null,null);n.default=a.exports}}]);