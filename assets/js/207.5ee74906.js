(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{855:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"短信发送功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短信发送功能"}},[s._v("#")]),s._v(" 短信发送功能")]),s._v(" "),e("h3",{attrs:{id:"joolun版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#joolun版本"}},[s._v("#")]),s._v(" JooLun版本")]),s._v(" "),e("ul",[e("li",[s._v("V2.7.1+")])]),s._v(" "),e("h3",{attrs:{id:"短信商"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短信商"}},[s._v("#")]),s._v(" 短信商")]),s._v(" "),e("ul",[e("li",[s._v("阿里")])]),s._v(" "),e("h3",{attrs:{id:"短信sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短信sdk"}},[s._v("#")]),s._v(" 短信SDK")]),s._v(" "),e("ul",[e("li",[s._v("aliyun-java-sdk-core")])]),s._v(" "),e("h3",{attrs:{id:"短信模板申请"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短信模板申请"}},[s._v("#")]),s._v(" 短信模板申请")]),s._v(" "),e("ul",[e("li",[s._v("阿里云申请"),e("a",{attrs:{href:"https://www.aliyun.com/product/sms?spm=5176.10695662.1128094.1.2a6b4beeZuuoI5",target:"_blank",rel:"noopener noreferrer"}},[s._v("短信模板"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"短信配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短信配置"}},[s._v("#")]),s._v(" 短信配置")]),s._v(" "),e("ul",[e("li",[s._v("nacos中base-upms-admin-dev.yml配置文件sms:标签")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#阿里短信配置\nsms:\n  regionId: cn-hangzhou\n  accessKeyId: XXXXXXXXXXX\n  accessKeySecret: XXXXXXXXXXXXXXXXXXXXXXXXXX\n  #模板\n  templates:\n    #登录模板\n    signName1: JooLun商城3\n    templateCode1: SMS_xxxxxxxx1\n    #绑定模板\n    signName2: JooLun商城2\n    templateCode2: SMS_xxxxxxxx2\n    #解绑模板\n    signName3: JooLun商城1\n    templateCode3: SMS_xxxxxxxx3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"服务中使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务中使用"}},[s._v("#")]),s._v(" 服务中使用")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("服务中引用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!--sms--\x3e\n<dependency>\n    <groupId>com.joolun</groupId>\n    <artifactId>base-common-sms</artifactId>\n</dependency>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("代码中使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("private final SmsUtils smsUtils;\n....\nsmsUtils.sendSms(signName, phoneNumbers, templateCode, templateParam)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])])])}),[],!1,null,null,null);a.default=t.exports}}]);