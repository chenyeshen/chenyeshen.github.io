(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{841:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"swagger文档配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swagger文档配置"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Swagger文档配置")])]),s._v(" "),n("h3",{attrs:{id:"快速使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[s._v("#")]),s._v(" 快速使用")]),s._v(" "),n("p",[s._v("在pom.xml中引入")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <dependency>\n        <groupId>com.joolun</groupId>\n        <artifactId>base-common-swagger</artifactId>\n    </dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("启动类中增加@BaseEnableSwagger注解")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@BaseEnableSwagger\n@SpringCloudApplication\n@EnableBaseFeignClients\n@EnableBaseResourceServer\npublic class BaseWeiXinApplication {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(BaseWeiXinApplication.class, args);\n\t}\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"个性化的配置（application-dev-yml）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#个性化的配置（application-dev-yml）"}},[s._v("#")]),s._v(" 个性化的配置（application-dev.yml）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# Swagger相关的配置\nswagger:\n  # 标题,默认空\n  title: 'JooLun Swagger API'\n  # 描述,默认空\n  description: 'JooLun微信快速开发框架'\n  # 版本,默认空\n  version: '2.1.6'\n  # 许可证,默认空\n  license: 'Powered By JooLun'\n  # 许可证URL,默认空\n  licenseUrl: 'http://www.joolun.com'\n  # 服务条款URL,默认空\n  terms-of-service-url: 'http://www.joolun.com'\n  # 文档的host信息，默认：空\n  host: 'http://www.joolun.com'\n  # swagger会解析的包路径,默认为空，扫描所有包\n  base-package: '' \n  # swagger会解析的url规则\n  base-path: /**\n  # 在basePath基础上需要排除的url规则\n  exclude-path: \n    - /actuator/**\n    - /error  \n  # 联系人相关配置\n  contact:\n    # 联系人姓名，默认空\n    name: 'JL'\n    # 联系人Email，默认空\n    email: 'joolun@gmail.com'\n    # 联系人URL，默认空\n    url: 'http://www.joolun.com'\n  # 统一鉴权相关配置\n  authorization:\n    # 鉴权策略名称，默认空\n    name: 'JooLun OAuth'\n    # 需要开启鉴权URL的正则，默认匹配所有\n    auth-regex: '^.*$'\n    # 鉴权作用域列表配置,默认空\n    authorization-scope-list:\n        # 鉴权作用域名称,默认空\n      - scope: 'server'\n        # 鉴权作用域描述,默认空\n        description: 'server all'\n    # 校验token的地址列表,默认空  \n    token-url-list:\n      - 'http://localhost:9999/auth/oauth/token'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("p",[s._v("文档地址： http://base-gateway:9999/doc.html http://base-gateway:9999/swagger-ui.html 参考：https://doc.xiaominfo.com/guide/")]),s._v(" "),n("h3",{attrs:{id:"swagger-ui调式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swagger-ui调式"}},[s._v("#")]),s._v(" swagger-ui调式")]),s._v(" "),n("ul",[n("li",[s._v("浏览器打开http://base-gateway:9999/swagger-ui.html （不能用ip:9999/swagger-ui.html，无法授权登录）")]),s._v(" "),n("li",[s._v("授权登录（账号密码：admin/123456）")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://joolun-blog.oss-cn-zhangjiakou.aliyuncs.com/git/QQ%E6%88%AA%E5%9B%BE20200330162159.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://joolun-blog.oss-cn-zhangjiakou.aliyuncs.com/git/QQ%E6%88%AA%E5%9B%BE20200330162159.png",alt:"img"}}),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);