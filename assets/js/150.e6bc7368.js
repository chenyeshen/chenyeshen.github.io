(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{815:function(n,e,s){"use strict";s.r(e);var a=s(4),l=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"_1-背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[n._v("#")]),n._v(" 1.背景")]),n._v(" "),s("p",[n._v("Sentinel 是阿里中间件团队开源的，面向分布式服务架构的轻量级高可用流量控制组件，主要以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度来帮助用户保护服务的稳定性。这里大家可能会问：Sentinel 和之前常用的熔断降级库 Netflix Hystrix 有什么异同呢？Sentinel官网有一个对比和Hystrix迁移到sentinel的文章，这里摘抄一个总结的表格，具体的对比可以点此 "),s("a",{attrs:{href:"https://github.com/alibaba/Sentinel/wiki/Guideline:-%E4%BB%8E-Hystrix-%E8%BF%81%E7%A7%BB%E5%88%B0-Sentinel",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接 "),s("OutboundLink")],1),n._v("查看。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("功能对比\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://img2018.cnblogs.com/i-beta/1368530/201911/1368530-20191108140950345-206637597.png",alt:"img"}})]),n._v(" "),s("p",[n._v("从对比的表格可以明显看到，Sentinel比Hystrix在功能性上还要强大一些。")]),n._v(" "),s("h2",{attrs:{id:"_2-功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能"}},[n._v("#")]),n._v(" 2.功能")]),n._v(" "),s("p",[n._v("Sentinel 功能主要体现在三个方面")]),n._v(" "),s("h3",{attrs:{id:"_2-1-流量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-流量控制"}},[n._v("#")]),n._v(" 2.1 流量控制")]),n._v(" "),s("p",[n._v("​    对于系统来说，任意时间到来的请求往往是随机不可控的，而系统的处理能力是有限的。我们需要根据系统的处理能力对流量进行控制。")]),n._v(" "),s("p",[n._v("控制角度如下：")]),n._v(" "),s("ul",[s("li",[n._v("资源的调用关系，例如资源的调用链路，资源和资源之间的关系")]),n._v(" "),s("li",[n._v("运行指标，例如 QPS、线程池、系统负载等")]),n._v(" "),s("li",[n._v("控制的效果，例如直接限流、冷启动、排队等")])]),n._v(" "),s("h3",{attrs:{id:"_2-2-熔断降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-熔断降级"}},[n._v("#")]),n._v(" 2.2 熔断降级")]),n._v(" "),s("p",[n._v("​        当检测到调用链路中某个资源出现不稳定的表现，例如请求响应时间长或异常比例升高的时候，则对这个资源的调用进行限制，让请求快速失败，避免影响到其它的资源而导致级联故障。手段如下")]),n._v(" "),s("ul",[s("li",[n._v("通过并发线程数进行限制 ：当线程数在特定资源上堆积到一定的数量之后，对该资源的新请求就会被拒绝。堆积的线程完成任务后才开始继续接收请求。")]),n._v(" "),s("li",[n._v("通过响应时间对资源进行降级：当依赖的资源出现响应时间过长后，所有对该资源的访问都会被直接拒绝，直到过了指定的时间窗口之后才重新恢复。")])]),n._v(" "),s("h3",{attrs:{id:"_2-3-系统负载保护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-系统负载保护"}},[n._v("#")]),n._v(" 2.3 系统负载保护")]),n._v(" "),s("p",[n._v("​          Sentinel 同时提供系统维度的自适应保护能力。防止雪崩，是系统防护中重要的一环。当系统负载较高的时候，如果还持续让请求进入，可能会导致系统崩溃，无法响应。在集群环境下，网络负载均衡会把本应这台机器承载的流量转发到其它的机器上去。如果 这个时候其它的机器也处在一个边缘状态的时候，这个增加的流量就会导致这台机器也崩溃，最后导致整个集群不可用。")]),n._v(" "),s("p",[n._v("​          针对这个情况，Sentinel 提供了对应的保护机制，让系统的入口流量和系统的负载达到一个平衡，保证系统在能力范围之内处理最多的请求。")]),n._v(" "),s("h2",{attrs:{id:"_3-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[n._v("#")]),n._v(" 3.使用")]),n._v(" "),s("h3",{attrs:{id:"_3-1-依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-依赖"}},[n._v("#")]),n._v(" 3.1 依赖")]),n._v(" "),s("p",[n._v("​    这里我使用sentinel 是基于gradle配置，兼容spring clould alibaba，所以添加如下依赖")]),n._v(" "),s("h3",{attrs:{id:"_3-2-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-注解"}},[n._v("#")]),n._v(" "),s("strong",[n._v("3.2 注解")])]),n._v(" "),s("p",[n._v("​      Sentinel 提供了 @SentinelResource 注解用于定义资源，并提供了 AspectJ 的扩展用于自动定义资源、处理 BlockException等，当然也支持使用aop的方式，这里演示使用aop的方式，添加如下配置类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class SentinelAspectConfiguration {\n    @Bean\n    public SentinelResourceAspect sentinelResourceAspect() {\n        return new SentinelResourceAspect();\n   }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("** @SentinelResource** 用于定义资源，并提供可选的异常处理和 fallback 配置项 。@SentinelResource 注解包含以下属性")]),n._v(" "),s("ul",[s("li",[n._v("value：资源名称，必需项（不能为空）")]),n._v(" "),s("li",[n._v("entryType：entry 类型，可选项EntryType.OUT/EntryType.IN（默认为 EntryType.OUT）,对应入口控制/出口控制")]),n._v(" "),s("li",[n._v("blockHandler / blockHandlerClass: blockHandler 对应处理 BlockException 的函数名称。")]),n._v(" "),s("li",[n._v("fallback：fallback 函数名称，可选项，用于在抛出异常的时候提供 fallback 处理逻辑。fallback 函数可以针对所有类型的异常（除了 exceptionsToIgnore 里面排除掉的异常类型）进行处理\n"),s("ul",[s("li",[n._v("返回值类型必须与原函数返回值类型一致")]),n._v(" "),s("li",[n._v("fllback 函数默认需要和原方法在同一个类中。若希望使用其他类的函数，则可以指定 fallbackClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。")])])]),n._v(" "),s("li",[n._v("defaultFallback（since 1.6.0）：默认的 fallback 函数名称，可选项，通常用于通用的 fallback 逻辑（即可以用于很多服务或方法）。默认 fallback 函数可以针对所有类型的异常（除了 exceptionsToIgnore 里面排除掉的异常类型）进行处理。若同时配置了 fallback 和 defaultFallback，则只有 fallback 会生效。函数签名和fallback一致")]),n._v(" "),s("li",[n._v("exceptionsToIgnore（since 1.6.0）：用于指定哪些异常被排除掉，不会计入异常统计中，也不会进入 fallback 逻辑中，而是会原样抛出。")])]),n._v(" "),s("h3",{attrs:{id:"_3-3-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-示例"}},[n._v("#")]),n._v(" **3.3 示例  **")]),n._v(" "),s("p",[n._v("服务具体实现类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@Service\n@Slf4j\npublic class HelloProviderServiceImpl implements HelloProviderService {\n\n  @Autowired\n  private ConfigurableEnvironment configurableEnvironment;\n\n  // 对应的 `handleException` 函数需要位于 `ExceptionUtil` 类中，并且必须为 static 函数\n  @Override\n  @SentinelResource(value = "test", blockHandler = "handleException", blockHandlerClass = {\n      ExceptionUtil.class})\n  public void test() {\n    log.info("Test");\n  }\n\n  @Override\n  @SentinelResource(value = "sayHi", blockHandler = "exceptionHandler", fallback = "helloFallback")\n  public String sayHi(long time) {\n    if (time < 0) {\n      throw new IllegalArgumentException("invalid arg");\n    }\n    try {\n      Thread.sleep(time);\n    } catch (InterruptedException e) {\n      throw new IllegalArgumentException("inter arg");\n    }\n    return String.format("Hello time %d", time);\n  }\n\n  // 这里俗称资源埋点，在设置限流策略的时候会根据此埋点来控制\n  @Override\n  @SentinelResource(value = "helloAnother", defaultFallback = "defaultFallback",\n      exceptionsToIgnore = {IllegalStateException.class})\n  public String helloAnother(String name) {\n    if (name == null || "bad".equals(name)) {\n      throw new IllegalArgumentException("oops");\n    }\n    if ("foo".equals(name)) {\n      throw new IllegalStateException("oops");\n    }\n    return "Hello, " + name;\n  }\n\n  // Fallback 函数，函数签名与原函数一致或加一个 Throwable 类型的参数.\n  public String helloFallback(long s, Throwable ex) {\n    log.error("fallbackHandler：" + s);\n    return "Oops fallbackHandler, error occurred at " + s;\n  }\n\n  //默认的 fallback 函数名称\n  public String defaultFallback() {\n    log.info("Go to default fallback");\n    return "default_fallback";\n  }\n\n  // Block 异常处理函数，参数最后多一个 BlockException，其余与原函数一致.\n  public String exceptionHandler(long s, BlockException ex) {\n    // Do some log here.\n    return "Oops,exceptionHandler, error occurred at " + s;\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br")])]),s("p",[n._v("服务接口")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public interface HelloProviderService {\n    public String sayHi(long t) throws InterruptedException;\n    String helloAnother(String name);\n    void test();\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("ExceptionUtil类\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@Slf4j\npublic final class ExceptionUtil {\n  public static void handleException(BlockException ex) {\n     log.info("Oops: " + ex.getClass().getCanonicalName());\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("controller 类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@RestController\n@Slf4j\npublic class HelloProviderController {\n\n  @Autowired\n  HelloProviderServiceImpl helloServiceProviderService;\n\n  @GetMapping("/sayHi")\n  public String sayHi(@RequestParam(required = false) Long time) throws Exception {\n    if (time == null) {\n      time = 300L;\n    }\n    helloServiceProviderService.test();\n    \n  return helloServiceProviderService.sayHi(time);\n  }\n\n  @GetMapping("baz/{name}")\n  public String apiBaz(@PathVariable("name") String name) {\n    return helloServiceProviderService.helloAnother(name);\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br")])]),s("h3",{attrs:{id:"_3-4-sentinel-控制台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-sentinel-控制台"}},[n._v("#")]),n._v(" 3.4 Sentinel 控制台")]),n._v(" "),s("p",[n._v("一个轻量级的开源控制台，它提供机器发现以及健康情况管理、监控（单机和集群），规则管理和推送的功能。主要可以通过该控制台对服务端设置的资源埋点进行动态的限流配置推送，这样可以灵活的设置限流策略而不用在代码里写死")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("提供web界面,可视化资源和流量监控、对资源埋点进行配置")])]),n._v(" "),s("li",[s("p",[n._v("具体安装比较简单，所以这里不再提及，可以参考"),s("a",{attrs:{href:"https://github.com/alibaba/Sentinel/wiki/%E6%8E%A7%E5%88%B6%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接"),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.com/alibaba/Sentinel/wiki/%E6%8E%A7%E5%88%B6%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"}},[s("OutboundLink")],1)])])]),n._v(" "),s("h3",{attrs:{id:"_3-5-降级策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-降级策略"}},[n._v("#")]),n._v(" 3.5 降级策略")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("平均响应时间 (DEGRADE_GRADE_RT)：当 1s 内持续进入 5 个请求，对应时刻的平均响应时间（秒级）均超过阈值（count，以 ms 为单位），那么在接下的时间窗口（DegradeRule 中的 timeWindow，以 s 为单位）之内，对这个方法的调用都会自动地熔断（抛出 DegradeException）。注意 Sentinel 默认统计的 RT 上限是 4900 ms，超出此阈值的都会算作 4900 ms，若需要变更此上限可以通过启动配置项 -Dcsp.sentinel.statistic.max.rt=xxx 来配置。")])]),n._v(" "),s("li",[s("p",[n._v("异常比例 (DEGRADE_GRADE_EXCEPTION_RATIO)：当资源的每秒请求量 >= 5，并且每秒异常总数占通过量的比值超过阈值（DegradeRule 中的 count）之后，资源进入降级状态，即在接下的时间窗口（DegradeRule 中的 timeWindow，以 s 为单位）之内，对这个方法的调用都会自动地返回。异常比率的阈值范围是 [0.0, 1.0]，代表 0% - 100%。")])]),n._v(" "),s("li",[s("p",[n._v("异常数 (DEGRADE_GRADE_EXCEPTION_COUNT)：当资源近 1 分钟的异常数目超过阈值之后会进行熔断。注意由于统计时间窗口是分钟级别的，若 timeWindow 小于 60s，则结束熔断状态后仍可能再进入熔断状态。")])]),n._v(" "),s("li",[s("p",[n._v("可以启用Sentinel 控制台，在控制台上直接配置熔断降级规则。")]),n._v(" "),s("ul",[s("li",[n._v("打开控制台界面，点击簇点链路,选择程序里的资源埋点，点击降级")]),n._v(" "),s("li",[n._v("配置降级规则"),s("img",{attrs:{src:"https://img2018.cnblogs.com/i-beta/1368530/201911/1368530-20191108145810019-1727318509.png",alt:"img"}})])])]),n._v(" "),s("li",[s("ul",[s("li",[n._v("配置RT模式测试,控制台输入RT和窗口时间\n"),s("ul",[s("li",[n._v("url：ip:port/sayHi?time=delayTime, 当 1s 内持续进入 5 个请求 平均delayTime>RT 进入降级服务")])])]),n._v(" "),s("li",[n._v("配置异常比例，控制台输入异常比例\n"),s("ul",[s("li",[n._v("url：ip:port/baz/bad, 当资源的每秒请求量 >= 5，并且每秒异常总数占通过量的比值设定的异常比例 将在接下来设置的窗口时间内进入降级服务")])])])])])]),n._v(" "),s("h1",{attrs:{id:"feign-sentine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feign-sentine"}},[n._v("#")]),n._v(" Feign+Sentine")]),n._v(" "),s("h2",{attrs:{id:"_1-背景-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景-2"}},[n._v("#")]),n._v(" 1. 背景")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("    Feign是Netflix公司开源的轻量级的一种负载均衡的HTTP客户端,，使用Feign调用API就像调用本地方法一样，从避免了 调用目标微服务时，需要不断的解析/封装json 数据的繁琐。 Spring Cloud引入Feign并且集成了Ribbon实现客户端负载均衡调用。 通俗一点讲：可以像调用本地方法一样的调用远程服务的方法。\n当然其中也有不少坑等踩。\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[n._v("#")]),n._v(" 2.使用")]),n._v(" "),s("p",[n._v("Sentinel 适配了 Fegin组件。如果想使用，除了引入 "),s("code",[n._v("spring-cloud-starter-alibaba-sentinel")]),n._v(" 的依赖外还需要 2 个步骤：")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("配置文件打开 Sentinel 对 Feign 的支持："),s("code",[n._v("feign.sentinel.enabled=true")])])]),n._v(" "),s("li",[s("p",[n._v("加入")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("openfeign starter\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("依赖使")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("sentinel starter\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("中的自动化配置类生效：")]),n._v(" "),s("p",[n._v("​")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("      <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-openfeign</artifactId>\n        </dependency>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])])])]),n._v(" "),s("h3",{attrs:{id:"_2-1示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1示例"}},[n._v("#")]),n._v(" 2.1示例")]),n._v(" "),s("p",[n._v('​    添加接口 EchoService类，该接口通过@FeignClient(name = "service-provider")注解来绑定该接口对应service01服务')]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@FeignClient(name = "nacos-provider-sentianel1", fallback = EchoServiceFallback.class, configuration = FeignConfiguration.class)\npublic interface EchoService {\n\n  @GetMapping(value = "/sayHi")\n  String sayHi(@RequestParam(value = "time", required = false) Long time);\n\n  @RequestMapping("/api/{name}")\n  String apiBaz(@PathVariable("name") String name);\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("p",[n._v("​    其中 @FeignClient 中name 中的值作为 提供服务提供方的名称，该接口中配置当前服务需要调用nacos-provider-sentianel1服务提供的接口。nacos-provider-sentianel1注册到注册服务上，我这里使用的是Nacos.")]),n._v(" "),s("p",[n._v("服务配置如下")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://img2018.cnblogs.com/i-beta/1368530/201911/1368530-20191108180513108-1572653730.png",alt:"img"}})]),n._v(" "),s("p",[n._v("nacos-provider-sentianel1 中的controller是这个样子的，这里可以看到 和"),s("strong",[n._v("EchoService中的方法签名都是一致的")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@RestController\npublic class HelloProviderController2 {\n\n  @GetMapping("/echo")\n  public String helloConsumer(@RequestParam(required = false) Long time) {\n    return "echo";\n  }\n\n  @GetMapping("/api/{name}")\n  public String apiBaz(@PathVariable("name") String name) {\n    return "another provider " + name;\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("p",[n._v("添加 EchoServiceFallback，这里是fegin的Fallback机制，主要用来做容错处理。因为在网络请求时，可能会出现异常请求，如果还想再异常情况下使系统可用，那么就需要容错处理。`")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@Component。\npublic class EchoServiceFallback implements EchoService {\n\n  @Override\n  public String sayHi(Long time) {\n    return "sayHi fallback";\n  }\n\n  @Override\n  public String apiBaz(String name) {\n    return "apiBaz fallback";\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("p",[n._v("添加FeignConfiguration")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class FeignConfiguration {\n  @Bean\n  public EchoServiceFallback echoServiceFallback() {\n    return new EchoServiceFallback();\n  }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("在上文HelloProviderServiceImpl的基础上添加EchoService调用")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@Service\n@Slf4j\npublic class HelloProviderServiceImpl implements HelloProviderService {\n\n  @Autowired\n  private ConfigurableEnvironment configurableEnvironment;\n\n  @Autowired\n  EchoService echoService;\n\n  // 对应的 `handleException` 函数需要位于 `ExceptionUtil` 类中，并且必须为 static 函数\n  @Override\n  @SentinelResource(value = "test", blockHandler = "handleException", blockHandlerClass = {\n      ExceptionUtil.class})\n  public void test() {\n    log.info("Test");\n  }\n\n  @Override\n  @SentinelResource(value = "sayHi", blockHandler = "exceptionHandler", fallback = "helloFallback")\n  public String sayHi(long time) {\n    if (time < 0) {\n      throw new IllegalArgumentException("invalid arg");\n    }\n    try {\n      Thread.sleep(time);\n    } catch (InterruptedException e) {\n      throw new IllegalArgumentException("inter arg");\n    }\n    return String.format("Hello time %d", time);\n  }\n\n  @Override\n  @SentinelResource(value = "helloAnother", defaultFallback = "defaultFallback",\n      exceptionsToIgnore = {IllegalStateException.class})\n  public String helloAnother(String name) {\n    if (name == null || "bad".equals(name)) {\n      throw new IllegalArgumentException("oops");\n    }\n    if ("foo".equals(name)) {\n      throw new IllegalStateException("oops");\n    }\n    return "Hello, " + name;\n  }\n\n  // Fallback 函数，函数签名与原函数一致或加一个 Throwable 类型的参数.\n  public String helloFallback(long s, Throwable ex) {\n    log.error("fallbackHandler：" + s);\n\n    return "Oops fallbackHandler, error occurred at " + s;\n  }\n\n  //默认的 fallback 函数名称\n  public String defaultFallback() {\n    log.info("Go to default fallback");\n    return echoService.apiBaz("bad");\n    //return "default_fallback";\n  }\n\n  // Block 异常处理函数，参数最后多一个 BlockException，其余与原函数一致.\n  public String exceptionHandler(long s, BlockException ex) {\n    // Do some log here.\n    return "Oops,exceptionHandler, error occurred at " + s;\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br")])]),s("p",[n._v('这里我们在defaultFallback中使用 echoService.apiBaz("bad") 来调用nacos-provider-sentianel1 的apiBaz方法')]),n._v(" "),s("p",[n._v("在sentinel控制台中配置helloAnother的降级规则，当触发降级后，将会调用acos-provider-sentianel1服务的apiBaz方法，返回结果。")]),n._v(" "),s("h1",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),s("p",[n._v("​      使用sentinel控制系统流量，当系统流超出当前服务的接受范围的时候，可以通过Feign 调用降级服务，这样就可构成一个最基础的熔断降级模块，当然Feign中还集成了"),s("code",[n._v("Ribbon,可以通过配置实现客户端负载均衡调用。")])])])}),[],!1,null,null,null);e.default=l.exports}}]);