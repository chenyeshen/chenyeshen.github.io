(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{762:function(s,n,e){"use strict";e.r(n);var t=e(4),i=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("centos 7以上是用Systemd进行系统初始化的，Systemd 是 Linux 系统中最新的初始化系统（init），它主要的设计目标是克服 sysvinit 固有的缺点，提高系统的启动速度。关于Systemd的详情介绍在这里。")]),s._v(" "),e("p",[s._v("Systemd服务文件以.service结尾，比如现在要建立nginx为开机启动，如果用yum install命令安装的，yum命令会自动创建nginx.service文件，直接用命令：\n"),e("strong",[s._v("systemcel enable nginx.service")])]),s._v(" "),e("p",[s._v("设置开机启动即可。\n在这里我是用源码编译安装的，所以要手动创建nginx.service服务文件。\n开机没有登陆情况下就能运行的程序，存在系统服务（system）里，即：\n"),e("strong",[s._v("/lib/systemd/system/")])]),s._v(" "),e("h2",{attrs:{id:"在系统服务目录里创建nginx-service文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在系统服务目录里创建nginx-service文件"}},[s._v("#")]),s._v(" "),e("strong",[s._v("在系统服务目录里创建nginx.service文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /lib/systemd/system/nginx.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("nginx.service内容如下：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[Unit]\nDescription=nginx\nAfter=network.target\n \n[Service]\nType=forking\nExecStart=/usr/local/nginx/sbin/nginx\nExecReload=/usr/local/nginx/sbin/nginx -s reload\nExecStop=/usr/local/nginx/sbin/nginx -s quit\nPrivateTmp=true\n \n[Install]\nWantedBy=multi-user.target\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"设置开机启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[s._v("#")]),s._v(" 设置开机启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl enable nginx.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("自此，重新centos后，nginx就自动启动了")]),s._v(" "),e("h2",{attrs:{id:"nginx其他命令："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx其他命令："}},[s._v("#")]),s._v(" nginx其他命令：")]),s._v(" "),e("p",[s._v("systemctl start nginx.service　（启动nginx服务）\nsystemctl stop nginx.service　（停止nginx服务）\nsystemctl enable nginx.service （设置开机自启动）\nsystemctl disable nginx.service （停止开机自启动）\nsystemctl status nginx.service （查看服务当前状态）\nsystemctl restart nginx.service　（重新启动服务）\nsystemctl list-units --type=service （查看所有已启动的服务）")])])}),[],!1,null,null,null);n.default=i.exports}}]);