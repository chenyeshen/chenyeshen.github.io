(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{775:function(v,_,e){"use strict";e.r(_);var o=e(4),d=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[e("code",[v._v("Redis")]),v._v("作为缓存使用时，一些场景下要考虑内存的空间消耗问题。"),e("code",[v._v("Redis")]),v._v("会删除过期键以释放空间，过期键的删除策略有两种：")]),v._v(" "),e("ul",[e("li",[v._v("惰性删除：每次从键空间中获取键时，都检查取得的键是否过期，如果过期的话，就删除该键；如果没有过期，就返回该键。")]),v._v(" "),e("li",[v._v("定期删除：每隔一段时间，程序就对数据库进行一次检查，删除里面的过期键。")])]),v._v(" "),e("p",[v._v("另外，"),e("code",[v._v("Redis")]),v._v("也可以开启"),e("code",[v._v("LRU")]),v._v("功能来自动淘汰一些键值对。")]),v._v(" "),e("h2",{attrs:{id:"lru算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lru算法"}},[v._v("#")]),v._v(" LRU算法")]),v._v(" "),e("p",[v._v("当需要从缓存中淘汰数据时，我们希望能淘汰那些将来不可能再被使用的数据，保留那些将来还会频繁访问的数据，但最大的问题是缓存并不能预言未来。一个解决方法就是通过"),e("code",[v._v("LRU")]),v._v("进行预测：最近被频繁访问的数据将来被访问的可能性也越大。缓存中的数据一般会有这样的访问分布：一部分数据拥有绝大部分的访问量。当访问模式很少改变时，可以记录每个数据的最后一次访问时间，拥有最少空闲时间的数据可以被认为将来最有可能被访问到。")]),v._v(" "),e("p",[v._v("举例如下的访问模式，A每5s访问一次，B每2s访问一次，C与D每10s访问一次，"),e("code",[v._v("|")]),v._v("代表计算空闲时间的截止点：")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("​~~~~~A~~~~~A~~~~~A~~~~A~~~~~A~~~~~A~~|\n~~B~~B~~B~~B~~B~~B~~B~~B~~B~~B~~B~~B~|\n​~~~~~~~~~~C~~~~~~~~~C~~~~~~~~~C~~~~~~|\n​~~~~~D~~~~~~~~~~D~~~~~~~~~D~~~~~~~~~D|\n\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br")])]),e("p",[v._v("可以看到，"),e("code",[v._v("LRU")]),v._v("对于A、B、C工作的很好，完美预测了将来被访问到的概率B>A>C，但对于D却预测了最少的空闲时间。")]),v._v(" "),e("p",[v._v("但是，总体来说，"),e("code",[v._v("LRU")]),v._v("算法已经是一个性能足够好的算法了")]),v._v(" "),e("h2",{attrs:{id:"lru配置参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lru配置参数"}},[v._v("#")]),v._v(" LRU配置参数")]),v._v(" "),e("p",[e("code",[v._v("Redis")]),v._v("配置中和"),e("code",[v._v("LRU")]),v._v("有关的有三个：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("maxmemory")]),v._v(": 配置"),e("code",[v._v("Redis")]),v._v("存储数据时指定限制的内存大小，比如"),e("code",[v._v("100m")]),v._v("。当缓存消耗的内存超过这个数值时, 将触发数据淘汰。该数据配置为0时，表示缓存的数据量没有限制, 即LRU功能不生效。64位的系统默认值为0，32位的系统默认内存限制为3GB")]),v._v(" "),e("li",[e("code",[v._v("maxmemory_policy")]),v._v(": 触发数据淘汰后的淘汰策略")]),v._v(" "),e("li",[e("code",[v._v("maxmemory_samples")]),v._v(": 随机采样的精度，也就是随即取出key的数目。该数值配置越大, 越接近于真实的LRU算法，但是数值越大，相应消耗也变高，对性能有一定影响，样本值默认为5。")])]),v._v(" "),e("h2",{attrs:{id:"淘汰策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#淘汰策略"}},[v._v("#")]),v._v(" 淘汰策略")]),v._v(" "),e("p",[v._v("淘汰策略即"),e("code",[v._v("maxmemory_policy")]),v._v("的赋值有以下几种：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("noeviction")]),v._v(":如果缓存数据超过了"),e("code",[v._v("maxmemory")]),v._v("限定值，并且客户端正在执行的命令(大部分的写入指令，但DEL和几个指令例外)会导致内存分配，则向客户端返回错误响应")]),v._v(" "),e("li",[e("code",[v._v("allkeys-lru")]),v._v(": 对所有的键都采取"),e("code",[v._v("LRU")]),v._v("淘汰")]),v._v(" "),e("li",[e("code",[v._v("volatile-lru")]),v._v(": 仅对设置了过期时间的键采取"),e("code",[v._v("LRU")]),v._v("淘汰")]),v._v(" "),e("li",[e("code",[v._v("allkeys-random")]),v._v(": 随机回收所有的键")]),v._v(" "),e("li",[e("code",[v._v("volatile-random")]),v._v(": 随机回收设置过期时间的键")]),v._v(" "),e("li",[e("code",[v._v("volatile-ttl")]),v._v(": 仅淘汰设置了过期时间的键---淘汰生存时间"),e("code",[v._v("TTL(Time To Live)")]),v._v("更小的键")])]),v._v(" "),e("p",[e("code",[v._v("volatile-lru")]),v._v(", "),e("code",[v._v("volatile-random")]),v._v("和"),e("code",[v._v("volatile-ttl")]),v._v("这三个淘汰策略使用的不是全量数据，有可能无法淘汰出足够的内存空间。在没有过期键或者没有设置超时属性的键的情况下，这三种策略和"),e("code",[v._v("noeviction")]),v._v("差不多。")]),v._v(" "),e("p",[v._v("一般的经验规则:")]),v._v(" "),e("ul",[e("li",[v._v("使用"),e("code",[v._v("allkeys-lru")]),v._v("策略：当预期请求符合一个幂次分布(二八法则等)，比如一部分的子集元素比其它其它元素被访问的更多时，可以选择这个策略。")]),v._v(" "),e("li",[v._v("使用"),e("code",[v._v("allkeys-random")]),v._v("：循环连续的访问所有的键时，或者预期请求分布平均（所有元素被访问的概率都差不多）")]),v._v(" "),e("li",[v._v("使用"),e("code",[v._v("volatile-ttl")]),v._v("：要采取这个策略，缓存对象的"),e("code",[v._v("TTL")]),v._v("值最好有差异")])]),v._v(" "),e("p",[e("code",[v._v("volatile-lru")]),v._v(" 和 "),e("code",[v._v("volatile-random")]),v._v("策略，当你想要使用单一的"),e("code",[v._v("Redis")]),v._v("实例来同时实现缓存淘汰和持久化一些经常使用的键集合时很有用。未设置过期时间的键进行持久化保存，设置了过期时间的键参与缓存淘汰。不过一般运行两个实例是解决这个问题的更好方法。")]),v._v(" "),e("p",[v._v("为键设置过期时间也是需要消耗内存的，所以使用"),e("code",[v._v("allkeys-lru")]),v._v("这种策略更加节省空间，因为这种策略下可以不为键设置过期时间。")]),v._v(" "),e("h2",{attrs:{id:"近似lru算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#近似lru算法"}},[v._v("#")]),v._v(" 近似LRU算法")]),v._v(" "),e("p",[v._v("我们知道，"),e("code",[v._v("LRU")]),v._v("算法需要一个双向链表来记录数据的最近被访问顺序，但是出于节省内存的考虑，"),e("code",[v._v("Redis")]),v._v("的"),e("code",[v._v("LRU")]),v._v("算法并非完整的实现。"),e("code",[v._v("Redis")]),v._v("并不会选择最久未被访问的键进行回收，相反它会尝试运行一个近似"),e("code",[v._v("LRU")]),v._v("的算法，通过对少量键进行取样，然后回收其中的最久未被访问的键。通过调整每次回收时的采样数量"),e("code",[v._v("maxmemory-samples")]),v._v("，可以实现调整算法的精度。")]),v._v(" "),e("p",[v._v("根据"),e("code",[v._v("Redis")]),v._v("作者的说法，每个"),e("code",[v._v("Redis Object")]),v._v("可以挤出24 bits的空间，但24 bits是不够存储两个指针的，而存储一个低位时间戳是足够的，"),e("code",[v._v("Redis Object")]),v._v("以秒为单位存储了对象新建或者更新时的"),e("code",[v._v("unix time")]),v._v("，也就是"),e("code",[v._v("LRU clock")]),v._v("，24 bits数据要溢出的话需要194天，而缓存的数据更新非常频繁，已经足够了。")]),v._v(" "),e("p",[e("code",[v._v("Redis")]),v._v("的键空间是放在一个哈希表中的，要从所有的键中选出一个最久未被访问的键，需要另外一个数据结构存储这些源信息，这显然不划算。最初，"),e("code",[v._v("Redis")]),v._v("只是随机的选3个key，然后从中淘汰，后来算法改进到了"),e("code",[v._v("N个key")]),v._v("的策略，默认是5个。")]),v._v(" "),e("p",[e("code",[v._v("Redis")]),v._v("3.0之后又改善了算法的性能，会提供一个待淘汰候选key的"),e("code",[v._v("pool")]),v._v("，里面默认有16个key，按照空闲时间排好序。更新时从"),e("code",[v._v("Redis")]),v._v("键空间随机选择N个key，分别计算它们的空闲时间"),e("code",[v._v("idle")]),v._v("，key只会在"),e("code",[v._v("pool")]),v._v("不满或者空闲时间大于"),e("code",[v._v("pool")]),v._v("里最小的时，才会进入"),e("code",[v._v("pool")]),v._v("，然后从"),e("code",[v._v("pool")]),v._v("中选择空闲时间最大的key淘汰掉。")]),v._v(" "),e("p",[v._v("真实"),e("code",[v._v("LRU")]),v._v("算法与近似"),e("code",[v._v("LRU")]),v._v("的算法可以通过下面的图像对比：")]),v._v(" "),e("p",[v._v("浅灰色带是已经被淘汰的对象，灰色带是没有被淘汰的对象，绿色带是新添加的对象。可以看出，"),e("code",[v._v("maxmemory-samples")]),v._v("值为5时"),e("code",[v._v("Redis 3.0")]),v._v("效果比"),e("code",[v._v("Redis 2.8")]),v._v("要好。使用10个采样大小的"),e("code",[v._v("Redis 3.0")]),v._v("的近似"),e("code",[v._v("LRU")]),v._v("算法已经非常接近理论的性能了。")]),v._v(" "),e("p",[v._v("数据访问模式非常接近幂次分布时，也就是大部分的访问集中于部分键时，"),e("code",[v._v("LRU")]),v._v("近似算法会处理得很好。")]),v._v(" "),e("p",[v._v("在模拟实验的过程中，我们发现如果使用幂次分布的访问模式，真实"),e("code",[v._v("LRU")]),v._v("算法和近似"),e("code",[v._v("LRU")]),v._v("算法几乎没有差别。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/12/11/HPg5FcWa2whvXmS.png",alt:""}})])])}),[],!1,null,null,null);_.default=d.exports}}]);