(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{747:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"gridfs介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gridfs介绍"}},[s._v("#")]),s._v(" GridFS介绍")]),s._v(" "),a("p",[s._v("GridFS是MongoDB提供的用于持久化存储文件的模块，CMS使用MongoDB存储数据，使用GridFS可以快速集成\n开发。\n"),a("strong",[s._v("它的工作原理是：")]),s._v("\n在GridFS存储文件是将文件分块存储，文件会按照256KB的大小分割成多个块进行存储，GridFS使用两个集合\n（collection）存储文件，一个集合是chunks, 用于存储文件的二进制数据；一个集合是files，用于存储文件的元数\n据信息（文件名称、块大小、上传时间等信息）。\n从GridFS中读取文件要对文件的各各块进行组装、合并。\n详细参考：https://docs.mongodb.com/manual/core/gridfs/")]),s._v(" "),a("h2",{attrs:{id:"gridfs-存取文件测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gridfs-存取文件测试"}},[s._v("#")]),s._v(" GridFS 存取文件测试")]),s._v(" "),a("h3",{attrs:{id:"_1、存文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、存文件"}},[s._v("#")]),s._v(" 1、存文件")]),s._v(" "),a("p",[s._v("使用GridFsTemplate存储文件测试代码：\n向测试程序注入GridFsTemplate。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' @Test\n    public void testGridFs() throws FileNotFoundException {\n        //要存储的文件\n        File file = new File("d:/index_banner.html");\n        //定义输入流\n        FileInputStream inputStram = new FileInputStream(file);\n        //向GridFS存储文件\n        ObjectId objectId = = gridFsTemplate.store(inputStram, "轮播图测试文件01", "");\n        //得到文件ID\n        String fileId = objectId.toString();\n        System.out.println(file);\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("存储原理说明：\n文件存储成功得到一个文件id\n此文件id是fs.files集合中的主键。\n可以通过文件id查询fs.chunks表中的记录，得到文件的内容。")]),s._v(" "),a("h3",{attrs:{id:"_2、读取文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、读取文件"}},[s._v("#")]),s._v(" 2、读取文件")]),s._v(" "),a("p",[s._v("1）在config包中定义Mongodb的配置类，如下：\nGridFSBucket用于打开下载流对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Configuration\npublic class MongoConfig {\n    @Value("${spring.data.mongodb.database}")\n    String db;\n    @Bean\n    public GridFSBucket getGridFSBucket(MongoClient mongoClient){\n        MongoDatabase database = mongoClient.getDatabase(db);\n        GridFSBucket bucket = GridFSBuckets.create(database);\n        return bucket;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("2）测试代码如下")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootTest")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RunWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringRunner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFsTest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFsTemplate")]),s._v(" gridFsTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFSBucket")]),s._v(" gridFSBucket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("queryFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" fileId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5b9c54e264c614237c271a99"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//根据id查询文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFSFile")]),s._v(" gridFSFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\ngridFsTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Criteria")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fileId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打开下载流对象")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFSDownloadStream")]),s._v(" gridFSDownloadStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\ngridFSBucket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("openDownloadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gridFSFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getObjectId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建gridFsResource，用于获取流对象")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFsResource")]),s._v(" gridFsResource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GridFsResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gridFSFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("gridFSDownloadStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取流中的数据")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gridFsResource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF‐8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"_3、删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、删除文件"}},[s._v("#")]),s._v(" 3、删除文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//删除文件\n@Test\npublic void testDelFile() throws IOException {\n    //根据文件id删除fs.files和fs.chunks中的记录\n    gridFsTemplate.delete(Query.query(Criteria.where("_id").is("5b32480ed3a022164c4d2f92")));\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);