(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{520:function(t,e,a){"use strict";a.r(e);var n=a(14),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_3-11-getfile-文件上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-11-getfile-文件上传"}},[t._v("#")]),t._v(" 3.11 getFile 文件上传")]),t._v(" "),e("p",[t._v("Controller提供了getFile系列方法支持文件上传。")]),t._v(" "),e("p",[t._v("如果用到了文件上传功能，需要添加一个 maven 依赖：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<dependency>\n    <groupId>com.jfinal</groupId>\n    <artifactId>cos</artifactId>\n    <version>2022.2</version>\n</dependency>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("注意版本问题：jfinal 4.9.18 版本支持大于 2G 的文件上传，从该 jfinal 版本开始，cos 必须升级到 2022.2 及其未来的更高版本，否则文件上传功能无法使用。这里要注意早于 4.9.18  的 jfinal 只能使用 cos 2020.4 以及更早其的 cos 版本。")]),t._v(" "),e("p",[t._v('特别注意：如果客户端请求为multipart request（form表单使用了enctype="multipart/form-data"），那么必须先调用getFile系列方法才能使getPara系列方法正常工作，因为multipart request需要通过getFile系列方法解析请求体中的数据，包括参数。同样的道理在Interceptor、Validator中也需要先调用getFile。')]),t._v(" "),e("p",[t._v("文件默认上传至项目根路径下的upload子路径之下，该路径称为文件上传基础路径。可以在 JFinalConfig.configConstant(Constants me)方法中通过me.setBaseUploadPath(baseUploadPath) 设置文件上传基础路径，该路径参数接受以”/”打头或者以windows磁盘盘符打头的绝对路径，即可将基础路径指向项目根径之外，方便单机多实例部署。当该路径参数设置为相对路径时，则是以项目根为基础的相对路径。")])])}),[],!1,null,null,null);e.default=s.exports}}]);