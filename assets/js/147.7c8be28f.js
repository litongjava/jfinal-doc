(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{499:function(s,n,a){"use strict";a.r(n);var t=a(14),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_12-4-json-转换用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-json-转换用法"}},[s._v("#")]),s._v(" 12.4 Json 转换用法")]),s._v(" "),n("p",[s._v("json 转换在 jfinal 中的使用分为两类用法，第一类是使用配置的 json 转换，第二类是指定某个实现进行 json 转换。")]),s._v(" "),n("h3",{attrs:{id:"_1、使用配置的-json-实现转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用配置的-json-实现转换"}},[s._v("#")]),s._v(" 1、使用配置的 json 实现转换")]),s._v(" "),n("p",[s._v("如下代码将使用前面章节中介绍的配置的 json 实现进行转的换：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 在 Controller 中使用 renderJson 进行 json 转换，并渲染给客户端\nrenderJson();\nrenderJson(key, object);\nrenderJson(new String[]{...});\n \n// 使用 JsonKit 工具类进行 json 转换\nJsonKit.toJson(...);\nJsonKit.parse(...);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("2、使用指定的 json 实现转换")]),s._v(" "),n("p",[s._v("如果下代码将使用指定的 json 实现去转换：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 临时指定使用 FastJson 实现\nFastJson.getJson().toJson(...);\nFastJson.getJson().parse(...);\n \n// 为 Controller.renderJson(..) 方法直接传入转换好的 json string\nrenderJson(FastJson.getJson().toJson(...));\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面这种用法可以临时摆脱配置的 json 实现，从而使用指定的 json 实现。")])])}),[],!1,null,null,null);n.default=e.exports}}]);