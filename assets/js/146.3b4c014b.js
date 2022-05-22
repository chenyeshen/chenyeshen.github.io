(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{792:function(e,s,t){"use strict";t.r(s);var n=t(4),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"webmvcconfigureradapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webmvcconfigureradapter"}},[e._v("#")]),e._v(" WebMvcConfigurerAdapter")]),e._v(" "),t("h2",{attrs:{id:"拦截所有请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截所有请求"}},[e._v("#")]),e._v(" 拦截所有请求")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\t@Configuration\n\tpublic class CustMvcConfigurerAdapter extends WebMvcConfigurerAdapter {\n\n    @Autowired\n    private CustInterceptor custInterceptor;\n\n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(custInterceptor).addPathPatterns("/**");\n    }\n}\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h2",{attrs:{id:"排除指定路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排除指定路径"}},[e._v("#")]),e._v(" 排除指定路径")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(custInterceptor).addPathPatterns("/**").excludePathPatterns("/select/**");\n    }\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h3",{attrs:{id:"拦截指定路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截指定路径"}},[e._v("#")]),e._v(" 拦截指定路径")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(custInterceptor).addPathPatterns("/user/**");\n    }\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"custinterceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custinterceptor"}},[e._v("#")]),e._v(" CustInterceptor")]),e._v(" "),t("h2",{attrs:{id:"具体拦截类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体拦截类"}},[e._v("#")]),e._v(" 具体拦截类")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Component\npublic class CustInterceptor extends HandlerInterceptorAdapter {\n\t   @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n        boolean needLogin = needLogin(request);\n        if (!needLogin) {\n            return true;\n        }\n        boolean isLogin = checkLogin(request, response);\n        return isLogin;\n    }\n}\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("h3",{attrs:{id:"needlogin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#needlogin"}},[e._v("#")]),e._v(" needLogin")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    private static boolean needLogin(HttpServletRequest request) {\n        String servletPath = request.getServletPath();\n        return true;\n    }\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"checklogin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checklogin"}},[e._v("#")]),e._v(" checkLogin")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private boolean checkLogin(HttpServletRequest request, HttpServletResponse response) throws Exception{\n\treturn true;\n}\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);