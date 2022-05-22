(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{725:function(a,s,e){"use strict";e.r(s);var t=e(4),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("docker安装参考    "),e("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS Docker 安装"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"docker环境下安装rancher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker环境下安装rancher"}},[a._v("#")]),a._v(" docker环境下安装Rancher")]),a._v(" "),e("p",[a._v("在shell中执行以下命令:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost ~]# mkdir -p /etc/docker\n[root@localhost ~]# vim  /etc/docker/daemon.json\n[root@localhost ~]# systemctl daemon-reload\n[root@localhost ~]#  systemctl restart docker\n[root@localhost ~]# mkdir /rancher\n[root@localhost ~]# docker run -d --restart=unless-stopped -v /rancher/:/var/lib/rancher/ -p 80:80 -p 443:443 rancher/rancher:stable\nUnable to find image 'rancher/rancher:stable' locally\nstable: Pulling from rancher/rancher\n7ddbc47eeb70: Pull complete\nc1bbdc448b72: Pull complete\n8c3b70e39044: Pull complete\n45d437916d57: Pull complete\n28a9e619eb92: Pull complete\n3922b811dfe2: Pull complete\n81d9d43baeba: Pull complete\nea183fe1d558: Pull complete\n59cb3488b9cd: Pull complete\n470bfb078fde: Pull complete\n9d3364413c7e: Pull complete\ndcceab1151c5: Pull complete\n22541110ae37: Pull complete\n594323731b75: Pull complete\nDigest: sha256:e1da0ac036379f3bb58b3a8a94ba7f794aca9ec34bb42ca24d1e935c4a744f1e\nStatus: Downloaded newer image for rancher/rancher:stable\n5c8e861f6a7049eb86dc01fab3a4fdf99394538660c40557ad5ff7e2f6f55e8e\n[root@localhost ~]# docker ps -l\nCONTAINER ID        IMAGE                    COMMAND             CREATED             STATUS              PORTS                                      NAMES\n5c8e861f6a70        rancher/rancher:stable   \"entrypoint.sh\"     23 seconds ago      Up 21 seconds       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   suspicious_davinci\n[root@localhost ~]#\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br")])]),e("h2",{attrs:{id:"登录rancher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录rancher"}},[a._v("#")]),a._v(" 登录Rancher")]),a._v(" "),e("ol",[e("li",[a._v("打开浏览器，输入"),e("code",[a._v("https://<server_ip>")]),a._v(","),e("code",[a._v("server_ip")]),a._v("替换为运行Rancher容器主机的ip;")]),a._v(" "),e("li",[a._v("因为是自动使用的自签名证书，在第一次登录会提示安全授信问题，信任即可；")])]),a._v(" "),e("p",[a._v("设置管理员密码")]),a._v(" "),e("p",[a._v("第一次登录会要求设置管理员密码，默认管理员账号为: admin")]),a._v(" "),e("blockquote",[e("p",[a._v("如果没有设置密码而要求输入当前密码，可以输入密码: admin")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/18/fTphnAJlVE5ORzZ.png",alt:""}})]),a._v(" "),e("p",[a._v("设置Rancher Server URL，默认即可")]),a._v(" "),e("h2",{attrs:{id:"创建k8s集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建k8s集群"}},[a._v("#")]),a._v(" 创建k8s集群")]),a._v(" "),e("h3",{attrs:{id:"在集群中添加集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在集群中添加集群"}},[a._v("#")]),a._v(" "),e("strong",[a._v("在集群中添加集群")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/18/DY1BcsNKSg7lITt.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"自定义集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义集群"}},[a._v("#")]),a._v(" "),e("strong",[a._v("自定义集群")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/18/j1RcAwNZPo3DmEr.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"设置网络驱动为-flannel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置网络驱动为-flannel"}},[a._v("#")]),a._v(" 设置网络驱动为 Flannel")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/18/5pym1wnKlkzxVCM.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"完成-下一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成-下一步"}},[a._v("#")]),a._v(" 完成 下一步")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/daixiaomao/Images/raw/master/img/20200816192103.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"复制命令在主机的ssh终端运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制命令在主机的ssh终端运行"}},[a._v("#")]),a._v(" 复制命令在主机的SSH终端运行")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/07/18/uyOK3QpdciMLZrv.png",alt:""}})]),a._v(" "),e("p",[a._v("等等安装即可")]),a._v(" "),e("h2",{attrs:{id:"安装成功-哈哈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装成功-哈哈"}},[a._v("#")]),a._v(" 安装成功   哈哈")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/daixiaomao/Images/raw/master/img/20200816191935.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);