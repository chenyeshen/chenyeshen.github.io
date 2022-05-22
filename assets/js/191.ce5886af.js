(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{843:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("首先说一下从零开始自己去搭一个fastdfs有多不顺，搭起来步骤繁琐,很麻烦，后来想到用docker搭建fastDFS，搭建起来就很容易了，百度是最好的老师  嘿嘿。")]),s._v(" "),a("p",[s._v("首先有docker环境哟   "),a("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS Docker 安装"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"通过docker安装fastdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过docker安装fastdfs"}},[s._v("#")]),s._v(" 通过docker安装fastdfs")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个显然是别人已经做好图片服务器之服务打成的镜像上传到了docker的中央仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull qbanxiaoli/fastdfs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建映射图片服务器的本地路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /root/docker/fastdfs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#IP要改为自己机子的ip，作者linux ip为192.168.100.192【请读者根据自己实际情况修改】")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fastdfs -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.192 -v /root/docker/fastdfs:/var/local/fdfs qbanxiaoli/fastdfs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看图片服务器进程storaged以及tracked")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -luntp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" dfs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入docker启动的图片服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it fastdfs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建一个小文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello FastDFS!"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("index.html\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上传index.html到图片服务器")]),s._v("\nfdfs_test /etc/fdfs/client.conf upload index.html\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出图片服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看刚才上传的小文件【即映射到图片服务器的本地地址】")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /root/docker/fastdfs/storage/data/00/00\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("我们看到，刚才上传的小文件已经被重命名了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/19/w41rzFjevqJ7cXW.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/19/6xO4Z2TIqeoPBWD.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"springboot整合fastdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot整合fastdfs"}},[s._v("#")]),s._v(" SpringBoot整合fastDFS")]),s._v(" "),a("h3",{attrs:{id:"依赖pom-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖pom-xml"}},[s._v("#")]),s._v(" 依赖pom.xml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<dependency>\n   <groupId>com.github.tobato</groupId>\n   <artifactId>fastdfs-client</artifactId>\n   <version>1.26.2</version>\n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"在springboot启动类上加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在springboot启动类上加"}},[s._v("#")]),s._v(" 在springboot启动类上加")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Import(FdfsClientConfig.class)\n@EnableMBeanExport(registration = RegistrationPolicy.IGNORE_EXISTING)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/19/z2pYLH6oytajQOI.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"fastdfsclient工具类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastdfsclient工具类"}},[s._v("#")]),s._v(" "),a("strong",[s._v("FastDFSClient工具类")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.example.demo;\n\nimport com.github.tobato.fastdfs.conn.FdfsWebServer;\nimport com.github.tobato.fastdfs.domain.StorePath;\nimport com.github.tobato.fastdfs.proto.storage.DownloadByteArray;\nimport com.github.tobato.fastdfs.service.FastFileStorageClient;\nimport org.apache.commons.io.FilenameUtils;\nimport org.apache.commons.lang3.StringUtils;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.io.*;\n\n@Component\npublic class FastDFSClient {\n\n    private static Logger log =LoggerFactory.getLogger(FastDFSClient.class);\n\n    private static FastFileStorageClient fastFileStorageClient;\n\n    private static FdfsWebServer fdfsWebServer;\n\n    @Autowired\n    public void setFastDFSClient(FastFileStorageClient fastFileStorageClient, FdfsWebServer fdfsWebServer) {\n        FastDFSClient.fastFileStorageClient = fastFileStorageClient;\n        FastDFSClient.fdfsWebServer = fdfsWebServer;\n    }\n\n    /**\n     * @param multipartFile 文件对象\n     * @return 返回文件地址\n     * @author yeshen\n     * @description 上传文件\n     */\n    public static String uploadFile(MultipartFile multipartFile) {\n        try {\n            StorePath storePath = fastFileStorageClient.uploadFile(multipartFile.getInputStream(), multipartFile.getSize(), FilenameUtils.getExtension(multipartFile.getOriginalFilename()), null);\n            return storePath.getFullPath();\n        } catch (IOException e) {\n            log.error(e.getMessage());\n            return null;\n        }\n    }\n\n    /**\n     * @param multipartFile 图片对象\n     * @return 返回图片地址\n     * @author yeshen\n     * @description 上传缩略图\n     */\n    public static String uploadImageAndCrtThumbImage(MultipartFile multipartFile) {\n        try {\n            StorePath storePath = fastFileStorageClient.uploadImageAndCrtThumbImage(multipartFile.getInputStream(), multipartFile.getSize(), FilenameUtils.getExtension(multipartFile.getOriginalFilename()), null);\n            return storePath.getFullPath();\n        } catch (Exception e) {\n            log.error(e.getMessage());\n            return null;\n        }\n    }\n\n    /**\n     * @param file 文件对象\n     * @return 返回文件地址\n     * @author yeshen\n     * @description 上传文件\n     */\n    public static String uploadFile(File file) {\n        try {\n            FileInputStream inputStream = new FileInputStream(file);\n            StorePath storePath = fastFileStorageClient.uploadFile(inputStream, file.length(), FilenameUtils.getExtension(file.getName()), null);\n            return storePath.getFullPath();\n        } catch (Exception e) {\n            log.error(e.getMessage());\n            return null;\n        }\n    }\n\n    /**\n     * @param file 图片对象\n     * @return 返回图片地址\n     * @author yeshen\n     * @description 上传缩略图\n     */\n    public static String uploadImageAndCrtThumbImage(File file) {\n        try {\n            FileInputStream inputStream = new FileInputStream(file);\n            StorePath storePath = fastFileStorageClient.uploadImageAndCrtThumbImage(inputStream, file.length(), FilenameUtils.getExtension(file.getName()), null);\n            return storePath.getFullPath();\n        } catch (Exception e) {\n            log.error(e.getMessage());\n            return null;\n        }\n    }\n\n    /**\n     * @param bytes         byte数组\n     * @param fileExtension 文件扩展名\n     * @return 返回文件地址\n     * @author yeshen\n     * @description 将byte数组生成一个文件上传\n     */\n    public static String uploadFile(byte[] bytes, String fileExtension) {\n        ByteArrayInputStream stream = new ByteArrayInputStream(bytes);\n        StorePath storePath = fastFileStorageClient.uploadFile(stream, bytes.length, fileExtension, null);\n        return storePath.getFullPath();\n    }\n\n    /**\n     * @param fileUrl 文件访问地址\n     * @param file    文件保存路径\n     * @author yeshen\n     * @description 下载文件\n     */\n    public static boolean downloadFile(String fileUrl, File file) {\n        try {\n            StorePath storePath = StorePath.praseFromUrl(fileUrl);\n            byte[] bytes = fastFileStorageClient.downloadFile(storePath.getGroup(), storePath.getPath(), new DownloadByteArray());\n            FileOutputStream stream = new FileOutputStream(file);\n            stream.write(bytes);\n        } catch (Exception e) {\n            log.error(e.getMessage());\n            return false;\n        }\n        return true;\n    }\n\n    /**\n     * @param fileUrl 文件访问地址\n     * @author yeshen\n     * @description 删除文件\n     */\n    public static boolean deleteFile(String fileUrl) {\n        if (StringUtils.isEmpty(fileUrl)) {\n            return false;\n        }\n        try {\n            StorePath storePath = StorePath.praseFromUrl(fileUrl);\n            fastFileStorageClient.deleteFile(storePath.getGroup(), storePath.getPath());\n        } catch (Exception e) {\n            log.error(e.getMessage());\n            return false;\n        }\n        return true;\n    }\n\n    // 封装文件完整URL地址\n    public static String getResAccessUrl(String path) {\n        String url = fdfsWebServer.getWebServerUrl() + path;\n        log.info("上传文件地址为：\\n" + url);\n        return url;\n    }\n    \n      /**\n     * <B>方法名称：</B>获取文件后缀名<BR>\n     * <B>概要说明：</B>获取文件后缀名<BR>\n     * @param fileName\n     * @return  如："jpg"、"txt"、"zip" 等\n     */\n    private static String getFileExt(String fileName) {\n        if (StringUtils.isBlank(fileName) || !fileName.contains(".")) {\n            return "";\n        } else {\n            return fileName.substring(fileName.lastIndexOf(".") + 1);\n        }\n    }\n\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br"),a("span",{staticClass:"line-number"},[s._v("162")]),a("br"),a("span",{staticClass:"line-number"},[s._v("163")]),a("br"),a("span",{staticClass:"line-number"},[s._v("164")]),a("br"),a("span",{staticClass:"line-number"},[s._v("165")]),a("br"),a("span",{staticClass:"line-number"},[s._v("166")]),a("br"),a("span",{staticClass:"line-number"},[s._v("167")]),a("br"),a("span",{staticClass:"line-number"},[s._v("168")]),a("br"),a("span",{staticClass:"line-number"},[s._v("169")]),a("br"),a("span",{staticClass:"line-number"},[s._v("170")]),a("br"),a("span",{staticClass:"line-number"},[s._v("171")]),a("br")])]),a("h3",{attrs:{id:"yml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yml文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("yml文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 分布式文件系统fastdfs配置\nfdfs:\n  # socket连接超时时长\n  soTimeout: 1500\n  # 连接tracker服务器超时时长\n  connectTimeout: 600\n  pool:\n    # 从池中借出的对象的最大数目\n    max-total: 153\n    # 获取连接时的最大等待毫秒数100\n    max-wait-millis: 102\n  # 缩略图生成参数，可选\n  thumbImage:\n    width: 150\n    height: 150\n  # 跟踪服务器tracker_server请求地址,支持多个，这里只有一个，如果有多个在下方加- x.x.x.x:port\n  trackerList:\n    - 192.168.52.130:22122\n  #\n  # 存储服务器storage_server访问地址\n  web-server-url: http://192.168.52.130/\n  spring:\n    http:\n      multipart:\n        max-file-size: 100MB # 最大支持文件大小\n        max-request-size: 100MB # 最大支持请求大小\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"test上传图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test上传图片"}},[s._v("#")]),s._v(" Test上传图片")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.example.demo;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.boot.test.context.SpringBootTest;\n\nimport java.io.File;\n\n@SpringBootTest\nclass DemoApplicationTests {\n\n    @Test\n    public void Upload() {\n        String fileUrl = this.getClass().getResource("/daba.jpg").getPath();\n        File file = new File(fileUrl);\n        String str = FastDFSClient.uploadFile(file);\n        FastDFSClient.getResAccessUrl(str);\n    }\n    @Test\n    public void Delete() {\n        FastDFSClient.deleteFile("group1/M00/00/00/wKg0jV8UP9GAB0kTAAFzhx0A9_0736.jpg");\n    }\n\n\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/19/qEAFM4m3clRZxVg.png",alt:""}})]),s._v(" "),a("p",[s._v("把我最喜欢😍的图片👆了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/19/s8YCDWukQe72d6p.png",alt:""}})])])}),[],!1,null,null,null);n.default=e.exports}}]);