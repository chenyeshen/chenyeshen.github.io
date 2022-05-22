(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{727:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一、配置服务文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、配置服务文件"}},[s._v("#")]),s._v(" 一、配置服务文件")]),s._v(" "),e("h3",{attrs:{id:"_1、进入服务配置文件下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、进入服务配置文件下"}},[s._v("#")]),s._v(" 1、进入服务配置文件下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /lib/systemd/system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2、生成-zookeeper的配置文件-并添加内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、生成-zookeeper的配置文件-并添加内容"}},[s._v("#")]),s._v(" 2、生成 zookeeper的配置文件,并添加内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim zookeeper.service\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[Unit]\nDescription=Zookeeper service\nAfter=network.target\n\n[Service]\nType=simple\nEnvironment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/java/jdk/bin"\nUser=root\nGroup=root\nExecStart=/usr/local/services/kafka/kafka/bin/zookeeper-server-start.sh /usr/local/services/kafka/kafka/config/zookeeper.properties\nExecStop=/usr/local/services/kafka/kafka/bin/zookeeper-server-stop.sh\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h3",{attrs:{id:"_3、生成kafka-service配置文件，并添加内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、生成kafka-service配置文件，并添加内容"}},[s._v("#")]),s._v(" 3、生成kafka.service配置文件，并添加内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim kafka.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[Unit]\nDescription=Apache Kafka server (broker)\nAfter=network.target  zookeeper.service\n\n[Service]\nType=simple\nEnvironment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/java/jdk/bin"\nUser=root\nGroup=root\nExecStart=/usr/local/services/kafka/kafka/bin/kafka-server-start.sh /usr/local/services/kafka/kafka/config/server.properties\nExecStop=/usr/local/services/kafka/kafka/bin/kafka-server-stop.sh\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"_4、刷新配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、刷新配置文件"}},[s._v("#")]),s._v(" 4、刷新配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl daemon-reload\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_5、将zookeeper和kafka加入开机服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、将zookeeper和kafka加入开机服务"}},[s._v("#")]),s._v(" 5、将zookeeper和kafka加入开机服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl enable zookeeper\n\nsystemctl enable kafka \n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://chenyeshen.oss-cn-shenzhen.aliyuncs.com/oneblog/article/20191117201555355.png",alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"_6、开启zookeeper服务并查看状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、开启zookeeper服务并查看状态"}},[s._v("#")]),s._v(" 6、开启zookeeper服务并查看状态")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start zookeeper\n\nsystemctl status zookeeper\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://chenyeshen.oss-cn-shenzhen.aliyuncs.com/oneblog/article/20191117201559587.png",alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"_7、开启kafka服务并查看状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、开启kafka服务并查看状态"}},[s._v("#")]),s._v(" 7、开启kafka服务并查看状态")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start kafka\n\nsystemctl status kafka\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://chenyeshen.oss-cn-shenzhen.aliyuncs.com/oneblog/article/20191117201635563.png",alt:"img"}})]),s._v(" "),e("p",[s._v("注意：kafka服务一定要放在zookeeper服务之后启动")])])}),[],!1,null,null,null);a.default=t.exports}}]);