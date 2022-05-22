(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{781:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"分段加锁的思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分段加锁的思想"}},[t._v("#")]),t._v(" 分段加锁的思想")]),t._v(" "),a("p",[t._v("把数据分成很多个段，每个段是一个单独的锁，所以多个线程过来并发修改数据的时候，可以并发的修改不同段的数据。不至于说，同一时间只能有一个线程独占修改ConcurrentHashMap中的数据。（根据Concurrent1.7的分段锁思路）")]),t._v(" "),a("p",[t._v("另外，Java 8中新增了一个LongAdder类，也是针对Java 7以前的AtomicLong进行的优化，解决的是CAS类操作在高并发场景下，使用乐观锁思路，会导致大量线程长时间重复循环。")]),t._v(" "),a("p",[t._v("LongAdder中也是采用了类似的分段CAS操作，失败则自动迁移到下一个分段进行CAS的思路。")]),t._v(" "),a("p",[t._v("分段锁在高并发售卖商品的示例\n"),a("img",{attrs:{src:"https://gitee.com/daixiaomao/Images/raw/master/img/20200815223136.png",alt:""}}),t._v("\n其实这就是分段加锁。")]),t._v(" "),a("h2",{attrs:{id:"拆分多个库存段，在redis之类的地方放多个库存key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆分多个库存段，在redis之类的地方放多个库存key"}},[t._v("#")]),t._v(" 拆分多个库存段，在redis之类的地方放多个库存key")]),t._v(" "),a("p",[t._v("你想，假如你现在iphone有1000个库存，那么你完全可以给拆成20个库存段，要是你愿意，可以在数据库的表里建20个库存字段，比如stock_01，stock_02，类似这样的，也可以在redis之类的地方放20个库存key。\n总之，就是把你的1000件库存给他拆开，每个库存段是50件库存，比如stock_01对应50件库存，stock_02对应50件库存。")]),t._v(" "),a("p",[t._v("接着，每秒1000个请求过来了，好！此时其实可以是自己写一个简单的随机算法，每个请求都是随机在20个分段库存里，选择一个进行加锁。")]),t._v(" "),a("p",[t._v("分段加锁只是一个思路，但是也是存在大量的代码实现的复杂度：")]),t._v(" "),a("ul",[a("li",[t._v("某个下单请求，加锁，然后发现这个分段库存里的库存不足导致的问题，这个时候需要代码层面实现自动释放锁，然后立马换下一个分段库存，再次尝试加锁后尝试处理。这个过程一定要实现。")]),t._v(" "),a("li",[t._v("首先，你得对一个数据分段存储，一个库存字段本来好好的，现在要分为20个分段库存字段；")]),t._v(" "),a("li",[t._v("其次，你在每次处理库存的时候，还得自己写随机算法，随机挑选一个分段来处理；")]),t._v(" "),a("li",[t._v("最后，如果某个分段中的数据不足了，你还得自动切换到下一个分段数据去处理。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);