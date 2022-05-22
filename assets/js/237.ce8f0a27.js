(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{886:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-安装准备的东西"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-安装准备的东西"}},[s._v("#")]),s._v(" 一.安装准备的东西")]),s._v(" "),e("p",[s._v("青龙面板是使用Docker来安装的.只要有可以运行Docker的电脑都可以进行安装,但是要定时运行 24小时开机太费电脑 最好不要使用电脑，推荐使用腾讯云或者阿里云的服务器都很便宜，自己百度找一哈")]),s._v(" "),e("h2",{attrs:{id:"二-安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-安装docker"}},[s._v("#")]),s._v(" 二.安装docker")]),s._v(" "),e("p",[s._v("安装过Docker的可以跳过这一步，没有安装的使用以下脚本命令直接安装Docker。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//安装依赖\nyum -y install yum-utils device-mapper-persistent-data lvm2\n\n//配置仓库镜像\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n//安装docker\nyum -y install docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("安装Docker好后记得启动Docker，和设置开机启动 使用一下命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("##启动Docker：  sudo systemctl start docker\n\n##开机启动Docker：  sudo systemctl enable docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"三-拉取青龙镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-拉取青龙镜像"}},[s._v("#")]),s._v(" 三.拉取青龙镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull whyour/qinglong:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"四-部署镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-部署镜像"}},[s._v("#")]),s._v(" 四.部署镜像")]),s._v(" "),e("p",[s._v("##建议改一下青龙端口以防被爆破 将-P 5700：5700改成-P 5800：5700 青龙面板地址就变成你的ip+5800 前提改的端口没有被占用，如果你不需要改直接复制以下命令执行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" docker run -dit \\\n   -v $PWD/ql/config:/ql/config \\\n   -v $PWD/ql/log:/ql/log \\\n   -v $PWD/ql/db:/ql/db \\\n   -v $PWD/ql/jbot:/ql/jbot \\\n   -v $PWD/ql/raw:/ql/raw \\\n   -v $PWD/ql/repo:/ql/repo \\\n   -v $PWD/ql/scripts:/ql/scripts \\\n   -p 5700:5700 \\\n   --name qinglong \\\n   --hostname qinglong \\\n   --restart always \\\n   whyour/qinglong:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"五-打开防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-打开防火墙"}},[s._v("#")]),s._v(" 五.打开防火墙")]),s._v(" "),e("p",[s._v("去你的服务商开启防火墙 开放端口5700")]),s._v(" "),e("p",[s._v("以下部分主机商开通端口教程")]),s._v(" "),e("p",[s._v("腾讯云: https://www.bt.cn/bbs/thread-1229-1-1.html")]),s._v(" "),e("p",[s._v("阿里云：https://www.bt.cn/bbs/thread-2897-1-1.html")]),s._v(" "),e("p",[s._v("华为云：https://www.bt.cn/bbs/thread-3923-1-1.html")]),s._v(" "),e("h2",{attrs:{id:"六-登录青龙面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六-登录青龙面板"}},[s._v("#")]),s._v(" 六.登录青龙面板")]),s._v(" "),e("p",[s._v("面板地址：http://你服务器IP:5600\n默认账号：admin\n默认密码：adminadmin\n注意：当您使用以上密码首次登录后，面板会显示已初始化密码。请在SSH终端内输入以下指令查看新密码（输出的结果就是实际的密码了{“username”:“admin ##这里是你的管理员账号”,“password”:” 123456 ##这里的就是你新管理密码”），代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker exec -it qinglong cat /ql/config/auth.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"七-完成登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七-完成登录"}},[s._v("#")]),s._v(" 七.完成登录")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://bizhi-1251208429.cos.ap-guangzhou.myqcloud.com/lingxue/2022/02/1645804261-db1bb4d932f5d34.jpg?imageMogr2/format/webp/interlace/1/quality/100",alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"青龙面板更新命令：一步一步执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#青龙面板更新命令：一步一步执行"}},[s._v("#")]),s._v(" 青龙面板更新命令：一步一步执行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd qinglong   ##进入青龙目录 qinglong改你的目录\n\ndocker-compose down\n\ndocker pull whyour/qinglong:latest\n\ndocker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"八-依赖安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八-依赖安装"}},[s._v("#")]),s._v(" 八.依赖安装")]),s._v(" "),e("p",[s._v("1.出现下列错误：(缺依赖)")]),s._v(" "),e("p",[s._v("Error: Cannot find module ‘xx’")]),s._v(" "),e("p",[s._v("执行命令：docker exec -it ql(ql你的容器名称) pnpm install xx（xx填缺少依赖的文件名）")]),s._v(" "),e("p",[s._v("2.一般出现这种错误：(缺文件)")]),s._v(" "),e("p",[s._v("Error: Cannot find module ‘./xx’")]),s._v(" "),e("p",[s._v("执行命令：那就很有是拉库命令不完整，请检查或复制完整的拉库命令,看看群置顶↑?")]),s._v(" "),e("p",[s._v("3.一般出现这种错误：(缺py依赖)")]),s._v(" "),e("p",[s._v("ModuleNotFoundError: No module named ‘xxx’,并且是.py结尾的脚本")]),s._v(" "),e("p",[s._v("执行命令：docker exec -it ql(ql你的容器名称) pip3 install xxx")]),s._v(" "),e("p",[s._v("4.遇到这种问题：(脚本问题)")]),s._v(" "),e("p",[s._v("TypeError: Cannot read property ‘xxxx’ of undefined")]),s._v(" "),e("p",[s._v("操作是：原因可能是脚本问题，或者接口问题，又或者是黑号，又或者是京东问题，又或者是ip黑了，等等。总之遇到这种情况，有人说重装能解决，或者换ip再试试，自")]),s._v(" "),e("p",[s._v("SSH安装依赖：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('docker exec -it qinglong bash -c "apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev && cd scripts && npm install canvas --build-from-source"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("宠物汪汪依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('docker exec -it qinglong bash -c "cd scripts && npm i -S png-js"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("全部依赖库：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('docker exec -it qinglong bash -c "npm install -g typescript"\ndocker exec -it qinglong bash -c "npm install axios date-fns"\ndocker exec -it qinglong bash -c "npm install crypto -g"\ndocker exec -it qinglong bash -c "npm install jsdom"\ndocker exec -it qinglong bash -c "npm install png-js"\ndocker exec -it qinglong bash -c "npm install -g npm"\ndocker exec -it qinglong bash -c "pnpm i png-js"\ndocker exec -it qinglong bash -c "pip3 install requests"\ndocker exec -it qinglong bash -c "apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev && cd scripts && npm install canvas --build-from-source"\ndocker exec -it qinglong bash -c "apk add python3 zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev"\ndocker exec -it qinglong bash -c "cd /ql/scripts/ && apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev && npm i && npm i -S ts-node typescript @types/node date-fns axios png-js canvas --build-from-source"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);