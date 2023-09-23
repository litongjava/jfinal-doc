(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{555:function(n,s,e){"use strict";e.r(s);var a=e(14),t=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_6-10-spring-boot-整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-10-spring-boot-整合"}},[n._v("#")]),n._v(" 6.10 Spring boot 整合")]),n._v(" "),s("h3",{attrs:{id:"_1、maven-坐标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、maven-坐标"}},[n._v("#")]),n._v(" 1、maven 坐标")]),n._v(" "),s("p",[n._v("Spring 整合可以在pom.xml中配置 jfinal 坐标，也可以配置 Enjoy Template Engine 的独立发布版本坐标，其 maven 坐标如下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<dependency>\n  <groupId>com.jfinal</groupId>\n  <artifactId>enjoy</artifactId>\n  <version>5.1.2</version>\n</dependency>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("JFinal Template Engine 的独立发布版本 Enjoy 只有 207K 大小，并且无任何第三方依赖。")]),n._v(" "),s("h3",{attrs:{id:"_2、spring-boot-整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、spring-boot-整合"}},[n._v("#")]),n._v(" 2、Spring Boot 整合")]),n._v(" "),s("p",[n._v("Spring boot 下整合配置如下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@Configuration\npublic class SpringBootConfig {\n \n  @Bean(name = "jfinalViewResolver")\n  public JFinalViewResolver getJFinalViewResolver() {\n    \n    // 创建用于整合 spring boot 的 ViewResolver 扩展对象\n    JFinalViewResolver jfr = new JFinalViewResolver();\n    \n    // 对 spring boot 进行配置\n    jfr.setSuffix(".html");\n    jfr.setContentType("text/html;charset=UTF-8");\n    jfr.setOrder(0);\n    \n    // 设置在模板中可通过 #(session.value) 访问 session 中的数据\n    jfr.setSessionInView(true);\n    \n    // 获取 engine 对象，对 enjoy 模板引擎进行配置，配置方式与前面章节完全一样\n    Engine engine  = JFinalViewResolver.engine;\n    \n    // 热加载配置能对后续配置产生影响，需要放在最前面\n    engine.setDevMode(true);\n \n    // 使用 ClassPathSourceFactory 从 class path 与 jar 包中加载模板文件\n    engine.setToClassPathSourceFactory();\n    \n    // 在使用 ClassPathSourceFactory 时要使用 setBaseTemplatePath\n    // 代替 jfr.setPrefix("/view/")\n    engine.setBaseTemplatePath("/view/");\n    \n    // 添加模板函数\n    engine.addSharedFunction("/common/_layout.html");\n    engine.addSharedFunction("/common/_paginate.html");\n    \n    // 更多配置与前面章节完全一样\n    // engine.addDirective(...)\n    // engine.addSharedMethod(...);\n    \n    return jfr;\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br")])]),s("p",[n._v("如上所示，jfr.setToClassPathSourceFactory() 配置的 ClassPathSourceFactory 将从class path和jar包中加载模板文件。jfr.addSharedFunction(...) 配置共享模板函数。其上有关 enjoy 的配置本质上与对 Engine 对象的配置是一致的")]),n._v(" "),s("p",[n._v("如果从项目的 webapp 路径下加载模板文件则无需配置为 ClassPathSourceFactory。")]),n._v(" "),s("h3",{attrs:{id:"_3、spring-mvc-整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、spring-mvc-整合"}},[n._v("#")]),n._v(" 3、Spring MVC 整合")]),n._v(" "),s("p",[n._v("在 Spring mvc下整合 Enjoy 非常简单，只需要配置一个 bean 即可，如下是具体配置方式：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('<bean id="viewResolver" class="com.jfinal.template.ext.spring.JFinalViewResolver">\n  \x3c!-- 是否热加载模板文件 --\x3e\n  <property name="devMode" value="true"/>\n  \x3c!-- 配置shared function，多文件用逗号分隔 --\x3e\n  <property name="sharedFunction" value="/view/_layout.html, /view/_paginate.html"/>\n \n  \x3c!-- 是否支持以 #(session.value) 的方式访问 session --\x3e\n  <property name="sessionInView" value="true"/>\n  <property name="prefix" value="/view/"/>\n  <property name="suffix" value=".html"/>\n  <property name="order" value="1"/>\n  <property name="contentType" value="text/html; charset=utf-8"/>\n</bean>\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("p",[n._v("更多、更详细的配置项及其说明，可以通过查看 JFinalViewResolver 头部的注释来了解，在绝大部分情况下，上面的配置项可以满足需求。")])])}),[],!1,null,null,null);s.default=t.exports}}]);