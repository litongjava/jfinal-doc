(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{530:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_4-3-before"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-before"}},[s._v("#")]),s._v(" 4.3 Before")]),s._v(" "),n("p",[s._v("Before注解用来对拦截器进行配置，该注解可配置Class、Method级别的拦截器，以下是代码示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 配置一个Class级别的拦截器，她将拦截本类中的所有方法\n@Before(AaaInter.class)\npublic class BlogController extends Controller {\n \n  // 配置多个Method级别的拦截器，仅拦截本方法\n  @Before({BbbInter.class, CccInter.class})\n  public void index() {\n  }\n \n  // 未配置Method级别拦截器，但会被Class级别拦截器AaaInter所拦截\n  public void show() {\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("如上代码所示，Before可以将拦截器配置为Class级别与Method级别，前者将拦截本类中所有方法，后者仅拦截本方法。此外Before可以同时配置多个拦截器，只需用在大括号内用逗号将多个拦截器进行分隔即可。")]),s._v(" "),n("p",[s._v("除了 Class 与 Method 级别的拦截器以外，JFinal 还支持全局拦截器以及 Routes 拦截器，全局拦截器分为控制层全局拦截器与业务层全局拦截器，前者拦截控制 层所有 Action 方法，后者拦截业务层所有方法。")]),s._v(" "),n("p",[s._v("全局拦截器需要在 YourJFinalConfig 进行配置，以下是配置示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public class YourJFinalConfig extends JFinalConfig {\n   public void configInterceptor(Interceptors me) {\n      // 添加控制层全局拦截器\n      me.addGlobalActionInterceptor(new GlobalActionInterceptor());\n  \n      // 添加业务层全局拦截器\n      me.addGlobalServiceInterceptor(new GlobalServiceInterceptor());\n  \n      // 为兼容老版本保留的方法，功能与addGlobalActionInterceptor完全一样\n      me.add(new GlobalActionInterceptor());\n   }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("当某个Method被多个级别的拦截器所拦截，拦截器各级别执行的次序依次为：Global、Routes、Class、Method，如果同级中有多个拦截器，那么同级中的执行次序是：配置在前面的先执行。")])])}),[],!1,null,null,null);n.default=t.exports}}]);