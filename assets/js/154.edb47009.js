(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{812:function(s,a,n){"use strict";n.r(a);var e=n(4),l=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"sentinel-注解支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-注解支持"}},[s._v("#")]),s._v(" Sentinel 注解支持")]),s._v(" "),n("p",[s._v("@SentinelResource 用于定义资源，并提供可选的异常处理和 fallback 配置项。 @SentinelResource 注解包含以下属性：")]),s._v(" "),n("ul",[n("li",[s._v("value：资源名称，必需项（不能为空）")]),s._v(" "),n("li",[s._v("entryType：entry 类型，可选项（默认为 EntryType.OUT）")]),s._v(" "),n("li",[s._v("blockHandler / blockHandlerClass: blockHandler 对应处理 BlockException 的函数名称，可选项。blockHandler 函数访问范围需要是 public，返回类型需要与原方法相匹配，参数类型需要和原方法相匹配并且最后加一个额外的参数，类型为 BlockException。blockHandler 函数默认需要和原方法在同一个类中。若希望使用其他类的函数，则可以指定 blockHandlerClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。")]),s._v(" "),n("li",[s._v("fallback：fallback 函数名称，可选项，用于在抛出异常的时候提供 fallback 处理逻辑。fallback 函数可以针对所有类型的异常（除了 - exceptionsToIgnore 里面排除掉的异常类型）进行处理。fallback 函数签名和位置要求：\n"),n("ul",[n("li",[s._v("返回值类型必须与原函数返回值类型一致；")]),s._v(" "),n("li",[s._v("方法参数列表需要和原函数一致，或者可以额外多一个 Throwable 类型的参数用于接收对应的异常。")]),s._v(" "),n("li",[s._v("fallback 函数默认需要和原方法在同一个类中。若希望使用其他类的函数，则可以指定 fallbackClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。")])])]),s._v(" "),n("li",[s._v("defaultFallback（since 1.6.0）：默认的 fallback 函数名称，可选项，通常用于通用的 fallback 逻辑（即可以用于很多服务或方法）。默认 fallback 函数可以针对所有类型的异常（除了 exceptionsToIgnore 里面排除掉的异常类型）进行处理。若同时配置了 fallback 和 defaultFallback，则只有 fallback 会生效。defaultFallback 函数签名要求：\n"),n("ul",[n("li",[s._v("返回值类型必须与原函数返回值类型一致；")]),s._v(" "),n("li",[s._v("方法参数列表需要为空，或者可以额外多一个 Throwable 类型的参数用于接收对应的异常。")]),s._v(" "),n("li",[s._v("defaultFallback 函数默认需要和原方法在同一个类中。若希望使用其他类的函数，则可以指定 fallbackClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。")])])]),s._v(" "),n("li",[s._v("exceptionsToIgnore（since 1.6.0）：用于指定哪些异常被排除掉，不会计入异常统计中，也不会进入 fallback 逻辑中，而是会原样抛出。")])]),s._v(" "),n("p",[s._v("注：1.6.0 之前的版本 fallback 函数只针对降级异常（DegradeException）进行处理，不能针对业务异常进行处理。")]),s._v(" "),n("p",[s._v("特别地，若 blockHandler 和 fallback 都进行了配置，则被限流降级而抛出 BlockException 时只会进入 blockHandler 处理逻辑。若未配置 blockHandler、fallback 和 defaultFallback，则被限流降级时会将 BlockException 直接抛出。")]),s._v(" "),n("h2",{attrs:{id:"使用注意点采坑日记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用注意点采坑日记"}},[s._v("#")]),s._v(" 使用注意点采坑日记")]),s._v(" "),n("p",[s._v("@SentinelResource 注解不单单用于controller的接口流控。同时也可以用于方法上面。如果看过实现方式代码。可以知道他底层是基于cglib动态代理实现的。进行切面处理。注意点：")]),s._v(" "),n("ul",[n("li",[s._v("不能修饰在接口上面。只能修饰在实现类的方法上")]),s._v(" "),n("li",[s._v("不能修饰在静态的方法上面。")]),s._v(" "),n("li",[s._v("同一个bean方法A调用方法B,假设方法A和B都进行了注解。B方法注解失效,请参考@Transactional 失效。\n"),n("ul",[n("li",[s._v("@Transactional 加于private方法, 无效")]),s._v(" "),n("li",[s._v("@Transactional 加于未加入接口的public方法, 再通过普通接口方法调用, 无效")]),s._v(" "),n("li",[s._v("@Transactional 加于接口方法, 无论下面调用的是private或public方法, 都有效")]),s._v(" "),n("li",[s._v("@Transactional 加于接口方法后, 被本类普通接口方法直接调用, 无效")]),s._v(" "),n("li",[s._v("@Transactional 加于接口方法后, 被本类普通接口方法通过接口调用, 有效")]),s._v(" "),n("li",[s._v("@Transactional 加于接口方法后, 被它类的接口方法调用, 有效")]),s._v(" "),n("li",[s._v("@Transactional 加于接口方法后, 被它类的私有方法调用后, 有效")])])])]),s._v(" "),n("p",[s._v("blockHandler 和 blockHandlerClass 的使用")]),s._v(" "),n("p",[s._v("blockHandler 是可选的。如果使用blockHandlerClass，必须搭配blockHandler使用， blockHandler指定blockHandlerClass类中对应的方法名称。方法名称、参数、返回值、static 必须按照上述文档描述一样。官方文档没有强调要必须要搭配使用。")]),s._v(" "),n("p",[s._v("同理 fallback 和 fallbackClass也是上面讲述的注意点。")]),s._v(" "),n("h2",{attrs:{id:"改造client-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#改造client-服务"}},[s._v("#")]),s._v(" 改造client 服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("       <dependency>\n            <groupId>com.alibaba.cloud</groupId>\n            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>\n        </dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("bootstrap.yml 配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('spring:\n    cloud:\n        sentinel:\n                filter:\n                    # sentienl 默认生效，本地调试false\n                    enabled: true\n                transport:\n                    dashboard: localhost:8890\n                    port: 8719\n                # 饥饿加载\n                eager: true\n                datasource:\n                    # Sentinel基于nacos存储获取配置信息\n                    na:\n                        nacos:\n                            server-addr: 47.99.209.72:8848\n                            groupId: DEFAULT_GROUP\n                            dataId: ${spring.application.name}-${spring.profiles.active}-sentinel\n                            # 类型\n    #            FLOW("flow", FlowRule.class),\n    #            DEGRADE("degrade", DegradeRule.class),\n    #            PARAM_FLOW("param-flow", ParamFlowRule.class),\n    #            SYSTEM("system", SystemRule.class),\n    #            AUTHORITY("authority", AuthorityRule.class),\n    #            GW_FLOW("gw-flow", "com.alibaba.csp.sentinel.adapter.gateway.common.rule.GatewayFlowRule"),\n    #            GW_API_GROUP("gw-api-group", "com.alibaba.csp.sentinel.adapter.gateway.common.api.ApiDefinition");\n                            rule-type: flow\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("nacos 创建 cloud-discovery-client-dev-sentinel 配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n    {\n        "resource": "client:log:save",\n        "limitApp": "default",\n        "grade": 1,\n        "count": 1,\n        "strategy": 0,\n        "controlBehavior": 0,\n        "clusterMode": false\n    },\n    {\n        "resource": "client:fegin:test",\n        "limitApp": "default",\n        "grade": 1,\n        "count": 1,\n        "strategy": 0,\n        "controlBehavior": 0,\n        "clusterMode": false\n    },\n     {\n        "resource": "user:service:saveTx",\n        "limitApp": "default",\n        "grade": 1,\n        "count": 1,\n        "strategy": 0,\n        "controlBehavior": 0,\n        "clusterMode": false\n    },\n    {\n        "resource": "user:service:save:test",\n        "limitApp": "default",\n        "grade": 1,\n        "count": 1,\n        "strategy": 0,\n        "controlBehavior": 0,\n        "clusterMode": false\n    }\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[s._v("创建 BackHandlerClass DiscoveryClientControllerBackHandler")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.xian.cloud.common.handler;\nimport com.alibaba.csp.sentinel.slots.block.BlockException;\nimport com.xian.cloud.entity.UserEntity;\nimport lombok.extern.slf4j.Slf4j;\n/**\n *  对应处理 BlockException 的函数名称 服务限流\n * @Author: xlr\n * @Date: Created in 9:08 PM 2019/11/16\n */\n@Slf4j\npublic class DiscoveryClientControllerBackHandler {\n    public static String defaultMessage(BlockException e){\n        log.warn( "DiscoveryClientControllerBackHandler  defaultMessage BlockException : {}",e );\n        return "defaultMessage 服务限流，请稍后尝试";\n    }\n    public static String saveTx(UserEntity entity,BlockException e) {\n        log.warn( "DiscoveryClientControllerBackHandler  saveTx BlockException : {}",e );\n        return "saveTx 服务限流，请稍后尝试";\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("创建 FallBackHandlerClass")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.xian.cloud.common.handler;\nimport com.xian.cloud.entity.UserEntity;\nimport lombok.extern.slf4j.Slf4j;\n/**\n * 仅针对降级功能生效（DegradeException）\n * @Author: xlr\n * @Date: Created in 9:13 PM 2019/11/16\n */\n@Slf4j\npublic class DiscoveryClientControllerFallBackHandler {\n    public static String defaultMessage(Throwable t){\n        log.warn( "DiscoveryClientControllerFallBackHandler defaultMessage Throwable : {}",t );\n        return "defaultMessage 服务降级，请稍后尝试";\n    }\n    public static String saveTx(UserEntity entity,Throwable t) {\n        log.warn( "DiscoveryClientControllerFallBackHandler saveTx Throwable : {}",t );\n        return "saveTx 服务降级，请稍后尝试";\n    }\n}package com.xian.cloud.common.handler;import com.xian.cloud.entity.UserEntity;import lombok.extern.slf4j.Slf4j;/** * 仅针对降级功能生效（DegradeException） * @Author: xlr * @Date: Created in 9:13 PM 2019/11/16 */@Slf4jpublic class DiscoveryClientControllerFallBackHandler {    public static String defaultMessage(Throwable t){        log.warn( "DiscoveryClientControllerFallBackHandler defaultMessage Throwable : {}",t );        return "defaultMessage 服务降级，请稍后尝试";    }    public static String saveTx(UserEntity entity,Throwable t) {        log.warn( "DiscoveryClientControllerFallBackHandler saveTx Throwable : {}",t );        return "saveTx 服务降级，请稍后尝试";    }}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("对外接口DiscoveryClientController 添加接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@SentinelResource(\n            value = "client:fegin:test",\n            blockHandler = "defaultMessage",\n            fallback = "defaultMessage",\n            blockHandlerClass = DiscoveryClientControllerBackHandler.class,\n            fallbackClass = DiscoveryClientControllerFallBackHandler.class\n    )\n    @RequestMapping(value = "fegin/test",method = RequestMethod.GET)\n    public String feginTest() {\n        String result = serverService.hello( "fegin" );\n        return  " 返回 : " + result;\n    }\n @GetMapping("/log/save")\n    @SentinelResource(\n            value = "client/log/save",\n            blockHandler = "defaultMessage",\n            fallback = "defaultMessage",\n            blockHandlerClass = DiscoveryClientControllerBackHandler.class,\n            fallbackClass = DiscoveryClientControllerFallBackHandler.class\n    )\n    public String save(){\n        UserEntity entity = new UserEntity();\n        entity.setUsername("tom");\n        entity.setPassWord("1232131");\n        entity.setEmail("222@qq.com");\n        userService.saveTx(entity);\n        return "success";\n    }\n    @GetMapping("user/service/save")\n    public String userServiceSaveTx(){\n        UserEntity entity = new UserEntity();\n        String result = userService.saveTx( entity );\n        return result;\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("UserServiceImpl 方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(' @Override\n    @Transactional\n    @SentinelResource(\n            value = "user:service:saveTx",\n            blockHandler = "saveTx",\n            fallback = "saveTx",\n            blockHandlerClass = DiscoveryClientControllerBackHandler.class,\n            fallbackClass = DiscoveryClientControllerFallBackHandler.class\n    )\n    public String saveTx(UserEntity entity) {\n        return "success";\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("以上就配置完毕。然后进行测试在页面疯狂刷新")]),s._v(" "),n("p",[s._v("http://localhost:9011/client/user/service/save")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://bbsmax.ikafan.com/static/L3Byb3h5L2h0dHBzL2ltZzIwMTguY25ibG9ncy5jb20vYmxvZy8xODQ4MTg3LzIwMTkxMS8xODQ4MTg3LTIwMTkxMTE4MjMxNTU0MTU4LTExMjkxNDA0NTYucG5n.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("http://localhost:9011/client/fegin/test")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://bbsmax.ikafan.com/static/L3Byb3h5L2h0dHBzL2ltZzIwMTguY25ibG9ncy5jb20vYmxvZy8xODQ4MTg3LzIwMTkxMS8xODQ4MTg3LTIwMTkxMTE4MjMxNTU0NDIwLTEyODI0OTE0OC5wbmc=.jpg",alt:"img"}})]),s._v(" "),n("p",[s._v("停止 server服务 再次调用 fegin、test")]),s._v(" "),n("p",[s._v("服务降级和服务限流来回切换提示在前端页面。blockHandlerClass、fallbackClass。")])])}),[],!1,null,null,null);a.default=l.exports}}]);