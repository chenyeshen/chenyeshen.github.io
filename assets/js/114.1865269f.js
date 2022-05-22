(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{760:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"依赖项和必要组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#依赖项和必要组件"}},[s._v("#")]),s._v(" 依赖项和必要组件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install -y make cmake gcc gcc-c++  \n\nyum install -y pcre pcre-devel\n\nyum install -y zlib zlib-devel\n\nyum install -y openssl openssl-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"下载安装nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载安装nginx"}},[s._v("#")]),s._v(" 下载安装nginx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("wget http://nginx.org/download/nginx-1.12.2.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("可以根据需要下载不同版本。官网：http://nginx.org/en/download.html")])]),s._v(" "),n("h2",{attrs:{id:"解压"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" "),n("strong",[s._v("解压")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tar zxvf nginx-1.12.2.tar.gz && cd nginx-1.12.2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"nginx-1-12-2目录下编译配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-1-12-2目录下编译配置"}},[s._v("#")]),s._v(" nginx-1.12.2目录下编译配置**")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("./configure && make && make instal\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("执行完本命令将会在 /usr/local/nginx 生成相应的可执行文件、配置、默认站点等文件")]),s._v(" "),n("h2",{attrs:{id:"创建全局命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建全局命令"}},[s._v("#")]),s._v(" 创建全局命令**")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"添加的环境路径中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加的环境路径中"}},[s._v("#")]),s._v(" "),n("strong",[s._v("添加的环境路径中")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vi /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如图")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export PATH=/usr/local/nginx/sbin:$PATH\nexport PATH\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/daixiaomao/Images/raw/master/img/image-20201015230822257.png",alt:"image-20201015230822257"}})]),s._v(" "),n("h2",{attrs:{id:"重新生效配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新生效配置文件"}},[s._v("#")]),s._v(" "),n("strong",[s._v("重新生效配置文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("source /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"启动：nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动：nginx"}},[s._v("#")]),s._v(" 启动：nginx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("start nginx\n或者 \ncd /usr/local/nginx/sbin\n./nginx\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nginx -t  //查看 nginx 当前的状态 \n\nnginx -s reload   //重载加载配置\n\nnginx -s stop  // 关闭nginx\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);