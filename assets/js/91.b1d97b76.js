(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{738:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"maven默认打包后，jar文件都是生成在各自服务的target下，对微服务的部署不太友好，需要整个项目上传服务器，里面包含了源码，其实我们可以在打包时把所需jar包复制到指定的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven默认打包后，jar文件都是生成在各自服务的target下，对微服务的部署不太友好，需要整个项目上传服务器，里面包含了源码，其实我们可以在打包时把所需jar包复制到指定的目录"}},[s._v("#")]),s._v(" maven默认打包后，jar文件都是生成在各自服务的target下，对微服务的部署不太友好，需要整个项目上传服务器，里面包含了源码，其实我们可以在打包时把所需jar包复制到指定的目录")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在父级POM配置中加入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<properties>\n    \x3c!--打包配置--\x3e\n    <copy>true</copy>\n    <localDir>C:/joolun-jar</localDir>\n    ......\n</properties>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在各个module项目中pom中配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!--打包时复制jar包到指定文件目录--\x3e\n<plugin>\n    <artifactId>maven-antrun-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>copy</id>\x3c!--需要唯一--\x3e\n            <phase>package</phase>\x3c!--当执行package操作时执行一下任务--\x3e\n            <configuration>\n                <tasks>\x3c!--任务--\x3e\n                    <echo message="start.................................."/>\x3c!--打印--\x3e\n                    <echo message="load maven plugin ant-contrib-1.0b3"/>\n                    \x3c!--加载plugin ant-contrib的配置文件--\x3e\n                    <taskdef resource="net/sf/antcontrib/antlib.xml">\n                        <classpath>\x3c!--加载jar包,${settings.localRepository}的值是你maven settings文件中配置的本地仓库位置--\x3e\n                            <pathelement location="${settings.localRepository}/ant-contrib/ant-contrib/1.0b3/ant-contrib-1.0b3.jar"/>\n                        </classpath>\n                    </taskdef>\n                    \x3c!--复制jar包--\x3e\n                    <if>\n                        <equals arg1="${copy}" arg2="true"/>\x3c!--是否复制jar包--\x3e\n                        <then>\n                            <echo message="Copy jar to your desired path."/>\n                            <copy todir="${localDir}" overwrite="true">\x3c!--执行复制操作,todir的值是将要复制jar包到的地方,overwrite是否重写--\x3e\n                                <fileset dir="${project.build.directory}">\x3c!--${project.build.directory}值是你的target目录--\x3e\n                                    <include name="*.jar"/>\x3c!--target目录下的jar包--\x3e\n                                </fileset>\n                            </copy>\n                        </then>\n                    </if>\n                </tasks>\n            </configuration>\n            <goals>\n                <goal>run</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配完以上代码后mvn clean install，部署所需的jar文件就都在C:/joolun-jar下了")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);