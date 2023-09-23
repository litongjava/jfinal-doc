(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{433:function(e,n,t){"use strict";t.r(n);var s=t(14),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_4-5-inject-dependency-injection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-inject-dependency-injection"}},[e._v("#")]),e._v(" 4.5 Inject dependency injection")]),e._v(" "),n("p",[e._v("Using the @Inject annotation, you can inject dependent objects into the Controller and Interceptor. To use the injection function, you need the following configuration:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public void configConstant(Constants me) {\n    // Enable the injection for jfinal web project components: Controller, Interceptor, and Validator.\n    me.setInjectDependency(true);\n    \n    // Enable injection for superclasses. If not enabled, injection can be done in the superclass using Aop.get(...).\n    me.setInjectSuperClass(true);\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v("The above me.setInjectDependency(true) is a configuration pertaining to jfinal web components. However, Aop.get(...) and Aop.inject(...) can support injection without any additional configuration.")]),e._v(" "),n("p",[e._v("Once configured, it can be used in controllers, for example:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class AccountController {\n   \n   @Inject\n   AccountService service;    // Here, the dependent object will be injected\n   \n   public void index() {\n       service.justDoIt();    // Call the method of the injected object\n   }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("@Inject can also be used for property injection in interceptors, for example:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MyInterceptor implements Interceptor {\n    \n    @Inject\n    Service service;    // Here, the dependent object will be injected\n    \n    public void intercept(Invocation inv) {\n        service.justDoIt();    // Call the method of the injected object\n        inv.invoke();\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[e._v("Special Note: The prerequisite for using Inject is that the object creation of the class annotated with @Inject is managed by jfinal. This allows jfinal the opportunity to perform injection. For example, the creation of Controller, Interceptor, and Validator is managed by jfinal, so these three components can use @Inject for injection.")]),e._v(" "),n("p",[e._v("Additionally, the injection action can be passed downward. For instance, if a Controller uses @Inject to inject an AaaService, then within AaaService, you can use @Inject to inject a BbbService, and so on.")]),e._v(" "),n("p",[e._v("If the object you need to create isn't managed by jfinal, you can use the Aop.get(...) method for the creation and injection of dependent objects, for example:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MyKit {\n   \n   static Service service = Aop.get(Service.class);\n   \n   public void doIt() {\n      service.justDoIt();\n   }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("Since the creation of MyKit isn't managed by jfinal, you cannot use @Inject for dependency injection. However, the creation and assembly of Controller and Interceptor are managed by jfinal, so they can use @Inject to inject dependencies.")]),e._v(" "),n("p",[e._v("With Aop.get(...), you can create and inject objects anywhere. Moreover, you can use Aop.inject(...) to only inject dependencies into objects without creating them.")]),e._v(" "),n("p",[e._v("The @Inject annotation also supports specifying the injected implementation class. For example, in the following code, a MyService object will be injected for Service:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Inject(MyService.class)\nService service;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("If the @Inject(...) annotation doesn't specify the type of injection, you can still specify the type of injection using AopManager.me().addMapping(...), for instance:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("AopManager.me().addMapping(Service.class, MyService.class);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("With the above mapping, the following code will inject MyService for Service:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class IndexController {\n    \n    @Inject\n    Service service;\n    \n    public void index() {\n        service.justDoIt();\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);