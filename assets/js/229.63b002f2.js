(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{874:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("22  git status\n23  git fetc\n24  git fetch\n25  git branch -a\n26  git checkout audit\n27  git branch -a\n28  git status\n29  git cherry pick 92c770\n30  git cherry-pick 92c770\n31  git status\n32  git push\n33  history")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$ git status\nOn branch zhonghua\nnothing to commit, working tree clean\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$ git fetc\ngit: 'fetc' is not a git command. See 'git --help'.\n\nThe most similar commands are\n        fetch\n        bisect\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$ git fetch\nlibpng warning: iCCP: cHRM chunk does not match sRGB\nlibpng warning: iCCP: cHRM chunk does not match sRGB\nremote: Counting objects: 421, done\nremote: Finding sources: 100% (288/288)\nremote: Getting sizes: 100% (256/256)\nremote: Compressing objects:  99% (266757/267128)\nremote: Total 288 (delta 140), reused 282 (delta 140)\nReceiving objects: 100% (288/288), 140.56 KiB | 271.00 KiB/s, done.\nResolving deltas: 100% (141/141), completed with 30 local objects.\nFrom http://120.78.6.202:10010/r/gloria_guide\n * [new branch]      audit      -> origin/audit\n   955bcff..0dc0a97  master     -> origin/master\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$ git branch -a\n  master\n* zhonghua\n  remotes/origin/HEAD -> origin/master\n  remotes/origin/audit\n  remotes/origin/master\n  remotes/origin/poster-2021-01-12\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (zhonghua)\n$ git checkout audit\nSwitched to a new branch 'audit'\nBranch 'audit' set up to track remote branch 'audit' from 'origin'.\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ git branch -a\n* audit\n  master\n  zhonghua\n  remotes/origin/HEAD -> origin/master\n  remotes/origin/audit\n  remotes/origin/master\n  remotes/origin/poster-2021-01-12\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ git status\nOn branch audit\nYour branch is up to date with 'origin/audit'.\n\nnothing to commit, working tree clean\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ git cherry pick 92c770\nfatal: unknown commit pick\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ git cherry-pick 92c770\nAuto-merging src/main/resources/task.properties\nAuto-merging src/main/java/com/regent/sale/SaleConfig.java\nAuto-merging pom.xml\n[audit 986e687] 稽核报备\n Date: Sat Apr 17 15:20:32 2021 +0800\n 12 files changed, 719 insertions(+), 9 deletions(-)\n create mode 100644 src/main/java/com/regent/admin/controller/ReportDetailsController.java\n create mode 100644 src/main/java/com/regent/admin/controller/ReportMattersController.java\n create mode 100644 src/main/java/com/regent/admin/service/IReportDetailsService.java\n create mode 100644 src/main/java/com/regent/admin/service/IReportMattersService.java\n create mode 100644 src/main/java/com/regent/admin/service/impl/f360/F360ReportDetailsServiceImpl.java\n create mode 100644 src/main/java/com/regent/admin/service/impl/f360/F360ReportMattersServiceImpl.java\n create mode 100644 src/main/java/com/regent/sale/domain/model/ReportDetails.java\n create mode 100644 src/main/java/com/regent/sale/domain/model/ReportMatters.java\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ git status\nOn branch audit\nYour branch is ahead of 'origin/audit' by 1 commit.\n  (use \"git push\" to publish your local commits)\n\nnothing to commit, working tree clean\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ git push\nlibpng warning: iCCP: cHRM chunk does not match sRGB\nlibpng warning: iCCP: cHRM chunk does not match sRGB\nEnumerating objects: 47, done.\nCounting objects: 100% (47/47), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (27/27), done.\nWriting objects: 100% (28/28), 7.69 KiB | 874.00 KiB/s, done.\nTotal 28 (delta 17), reused 0 (delta 0), pack-reused 0\nremote: Resolving deltas: 100% (17/17)\nremote: Updating references: 100% (1/1)\nTo http://120.78.6.202:10010/r/gloria_guide.git\n   0dc0a97..986e687  audit -> audit\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$ history\n    1  ssh-keygen -t rsa -C \"xxxxx@xxxxx.com\"\n    2  cat ~/.ssh/id_rsa.pub\n    3  ssh -T git@github.com\n    4  ssh -T git@gitee.com\n    5  ssh -T git@gitee.com\n    6  ssh-keygen -t rsa -C 1601419878@qq.com\n    7  ssh-keygen -t rsa -C \"1601419878@qq.com\"\n    8  cat ~/.ssh/id_rsa.pub\n    9  ssh -T git@github.com\n   10  $ ssh -T git@github.com\n   11  $ $ ssh -T git@github.com\n   12  ssh -T git@github.com\n   13  cd ~/.ssh\n   14   ls\n   15  pwd\n   16  git config --system --unset credential.helper\n   17  git config user.email\n   18  git config --global user.name \"chenyeshen\"\n   19  git config --global user.email \"1967495249@qq.com\"\n   20  git config user.name\n   21  git clone http://120.78.6.202:10010/r/gloria_guide_ui.git\n   22  git status\n   23  git fetc\n   24  git fetch\n   25  git branch -a\n   26  git checkout audit\n   27  git branch -a\n   28  git status\n   29  git cherry pick 92c770\n   30  git cherry-pick 92c770\n   31  git status\n   32  git push\n   33  history\n\nLENOVO@LAPTOP-Q4FAR4F8 MINGW64 /e/workspace/gloria_guide (audit)\n$\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);