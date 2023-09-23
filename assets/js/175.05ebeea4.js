(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{528:function(e,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_3-8-renderfile-文件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-renderfile-文件下载"}},[e._v("#")]),e._v(" 3.8 renderFile 文件下载")]),e._v(" "),a("h3",{attrs:{id:"_1、renderfile-基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、renderfile-基本用法"}},[e._v("#")]),e._v(" 1、renderFile 基本用法")]),e._v(" "),a("p",[e._v("renderFile 系列方法用于下载文件。")]),e._v(" "),a("p",[e._v("renderFile 方法使用一个 baseDownloadPath 参数为基础路径去寻找文件。以标准的 maven 项目为例，该参数默认值指向目录：src/main/webapp/download")]),e._v(" "),a("p",[e._v("以下是在默认配置下的使用示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 最终下载文件为：src/main/webapp/download/file.zip\nrenderFile("file.zip");\n \n// 最终下载文件为：src/main/webapp/download/abc/def/file.zip\nrenderFile("abc/deb/file.zip");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("如上所示，最终下载文件总是：baseDownloadPath + renderFile 传入的参数")]),e._v(" "),a("p",[e._v("baseDownloadPath 的存在相当于固定了一个基础路路径。renderFile 总是以该路径为基础路径去寻找文件。")]),e._v(" "),a("h3",{attrs:{id:"_2、配置-basedownloadpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置-basedownloadpath"}},[e._v("#")]),e._v(" 2、配置 baseDownloadPath")]),e._v(" "),a("p",[e._v("baseDownloadPath 还可以在 configConstant(Constants me) 中自由配置，例如：")]),e._v(" "),a("p",[e._v('me.setBaseDownloadPath("files");\n以标准的 maven  项目为例，以上配置的 baseDonwnloadPath 值将指向目录 src/main/webapp/files。')]),e._v(" "),a("p",[e._v("此外，还可以将 baseDownloadPath 配置为绝对路径，那么该路径将跳出项目之外，例如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// linux、mac 系统以字符 "/" 打头是绝对路径\nme.setBaseDownloadPath("/var/download");\n \n// windows 系统以盘符打头也是绝对路径\nme.setBaseDownloadPath("D:/download");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v('以上配置 Linux 下以 "/" 打头则表示是绝对路径，那么 renderFile 将去该路径 "/var/download" 之下去寻找下载文件。')]),e._v(" "),a("p",[e._v("这种配置可以跳出项目之外，便于项目资源与下载资源进行分离，也便于集群部署（单机多实例部署）时多个节点可以共享同一个目录，共享同一份下载文件。")]),e._v(" "),a("h3",{attrs:{id:"_3、renderfile-file-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、renderfile-file-file"}},[e._v("#")]),e._v(" 3、renderFile(File file)")]),e._v(" "),a("p",[e._v("renderFile(File file) 方法直接使用 File 参数去获取下载文件，可脱离 baseDownloadPath 的束缚，指向任意地点的文件，例如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('String file = "D:/my-project/share/files/jfinal-all.zip";\nrenderFile(new File(file));\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如上所示，File 指向了一个任意地点的文件，跳出了 baseDownloadPath 的束缚。")]),e._v(" "),a("h3",{attrs:{id:"_4、为下载文件重新命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、为下载文件重新命名"}},[e._v("#")]),e._v(" 4、为下载文件重新命名")]),e._v(" "),a("p",[e._v("如果不想使用下载文件原有的文件名，还可以指定新的下载文件名：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('renderFile("老文件名.txt", "新文件名.txt");`\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);