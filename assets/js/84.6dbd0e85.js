(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{436:function(n,e,a){"use strict";a.r(e);var t=a(14),r=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_4-8-proxy-dynamic-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-proxy-dynamic-proxy"}},[n._v("#")]),n._v(" 4.8 Proxy dynamic proxy")]),n._v(" "),e("h1",{attrs:{id:"_4-8-proxy-dynamic-proxy-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-proxy-dynamic-proxy-2"}},[n._v("#")]),n._v(" 4.8 Proxy Dynamic Proxy")]),n._v(" "),e("p",[n._v("The Proxy dynamic proxy is the underlying implementation mechanism of jfinal AOP. The jfinal 4.0 version added the com.jfinal.proxy module to eliminate the dependency on cglib/asm for dynamic proxy implementation.")]),n._v(" "),e("p",[n._v("The proxy module needs to run under the JDK environment. If you need to run it under JRE, you can add the following configuration for support:")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public void configConstant(Constants me) {\n \n  // Configuration method for versions before 4.6: me.setProxyFactory(new CglibProxyFactory());\n  me.setToCglibProxyFactory();  // New configuration method in version 4.6\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[n._v("The above configuration will switch to the cglib implementation of the proxy module. You need to add its maven dependency in pom.xml:")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<dependency>\n   <groupId>cglib</groupId>\n   <artifactId>cglib-nodep</artifactId>\n   <version>3.2.5</version>\n</dependency>\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[n._v('If you are using it in a "non-web environment", the configuration method is as follows:')]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// Configuration method for versions before 4.6: ProxyManager.me().setProxyFactory(new CglibProxyFactory());\nProxyManager.me().setToCglibProxyFactory();\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);