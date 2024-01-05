(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{464:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker-容器命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器命令"}},[s._v("#")]),s._v(" Docker 容器命令")]),s._v(" "),a("h3",{attrs:{id:"_1-启动-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动-docker"}},[s._v("#")]),s._v(" 1. 启动 Docker")]),s._v(" "),a("p",[s._v("要启动一个已经存在的容器，可以使用 "),a("strong",[s._v("start")]),s._v(" 命令。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("容器名/containerID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("Docker start 命令本质为容器文件系统创建了一个进程隔离空间。")]),s._v(" "),a("h3",{attrs:{id:"_2-停止容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-停止容器"}},[s._v("#")]),s._v(" 2. 停止容器")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("容器名/containerID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3-运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行容器"}},[s._v("#")]),s._v(" 3. 运行容器")]),s._v(" "),a("p",[s._v("要创建和运行容器使用 "),a("strong",[s._v("run")]),s._v(" 命令。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("容器名/containerID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("该命令会从本地、Docker Hub 中搜索指定的镜像，并下载到本地，创建一个容器并启动该容器。")]),s._v(" "),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[s._v("-d：为可选项，表示以后台方式启动。")])]),s._v(" "),a("h3",{attrs:{id:"_4-查看所有运行中的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看所有运行中的容器"}},[s._v("#")]),s._v(" 4. 查看所有运行中的容器")]),s._v(" "),a("p",[s._v("列出所有运行中的容器。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])]),a("p",[s._v("列出所有的容器，不管是运行的，还是停止的。")]),s._v(" "),a("div",{staticClass:"language-she extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps -a\n")])])]),a("h3",{attrs:{id:"_5-重启容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-重启容器"}},[s._v("#")]),s._v(" 5. 重启容器")]),s._v(" "),a("p",[s._v("要重启一个运行中的容器。")]),s._v(" "),a("div",{staticClass:"language-she extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker restart [容器名/containerID]\n")])])]),a("h3",{attrs:{id:"_6-查看容器日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看容器日志"}},[s._v("#")]),s._v(" 6. 查看容器日志")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("容器名/containerID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[s._v("-f：可选，滚动刷新日志信息。")])]),s._v(" "),a("h3",{attrs:{id:"_7-进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-进入容器"}},[s._v("#")]),s._v(" 7. 进入容器")]),s._v(" "),a("p",[s._v("容器启动后，要进入容器内部。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("容器名/containerID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" /bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"_8-查看-docker-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看-docker-信息"}},[s._v("#")]),s._v(" 8. 查看 Docker 信息")]),s._v(" "),a("p",[s._v("查看 Docker 版本。")]),s._v(" "),a("div",{staticClass:"language-she extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker version\n")])])]),a("p",[s._v("如：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker version")]),s._v("\nClient: Docker Engine - Community\n Version:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.0")]),s._v(".2\n API version:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.43")]),s._v("\n Go version:        go1.20.4\n Git commit:        cb74dfc\n Built:             Thu May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":55:21 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("\n OS/Arch:           linux/amd64\n Context:           default\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.0")]),s._v(".2\n  API version:      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.43")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Go version:       go1.20.4\n  Git commit:       659604f\n  Built:            Thu May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":54:24 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n containerd:\n  Version:          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v(".25\n  GitCommit:        d8f198a4ed8892c764191ef7b3b06d8a2eeb5c7f\n runc:\n  Version:          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".10\n  GitCommit:        v1.1.10-0-g18a0cb0\n docker-init:\n  Version:          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.19")]),s._v(".0\n  GitCommit:        de40ad0\n")])])]),a("h3",{attrs:{id:"_9-查看-docker-系统的信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-查看-docker-系统的信息"}},[s._v("#")]),s._v(" 9. 查看 docker 系统的信息")]),s._v(" "),a("div",{staticClass:"language-she extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker info\n")])])]),a("p",[s._v("如：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker info")]),s._v("\nClient: Docker Engine - Community\n Version:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.0")]),s._v(".2\n Context:    default\n Debug Mode: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n Plugins:\n  buildx: Docker Buildx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Docker Inc."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Version:  v0.11.2\n    Path:     /usr/libexec/docker/cli-plugins/docker-buildx\n  compose: Docker Compose "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Docker Inc."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Version:  v2.21.0\n    Path:     /usr/libexec/docker/cli-plugins/docker-compose\n  scan: Docker Scan "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Docker Inc."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Version:  v0.23.0\n    Path:     /usr/libexec/docker/cli-plugins/docker-scan\n\nServer:\n Containers: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("\n  Running: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n  Paused: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  Stopped: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n Images: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("85")]),s._v("\n Server Version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.0")]),s._v(".2\n Storage Driver: overlay2\n  Backing Filesystem: xfs\n  Supports d_type: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  Using metacopy: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  Native Overlay Diff: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  userxattr: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n Logging Driver: json-file\n Cgroup Driver: cgroupfs\n Cgroup Version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n Plugins:\n  Volume: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n  Network: bridge "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" ipvlan macvlan null overlay\n  Log: awslogs fluentd gcplogs gelf journald json-file "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" logentries splunk \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 省略\n")])])]),a("h2",{attrs:{id:"docker-镜像命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像命令"}},[s._v("#")]),s._v(" Docker 镜像命令")]),s._v(" "),a("p",[s._v("镜像是 Docker 容器的基石，容器是镜像的运行实例，有了镜像才能启动容器。")]),s._v(" "),a("h3",{attrs:{id:"_1-列出所有镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-列出所有镜像"}},[s._v("#")]),s._v(" 1. 列出所有镜像")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])])]),a("div",{staticClass:"language-she extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@192 docker]# docker images\nREPOSITORY      TAG      IMAGE ID       CREATED         SIZE\n")])])]),a("p",[s._v("选项说明：")]),s._v(" "),a("ul",[a("li",[s._v("REPOSITORY：表示镜像的仓库源")]),s._v(" "),a("li",[s._v("TAG：镜像的标签版本号")]),s._v(" "),a("li",[s._v("IMAGE ID：镜像ID")]),s._v(" "),a("li",[s._v("CREATED：镜像创建时间")]),s._v(" "),a("li",[s._v("SIZE：镜像大小")])]),s._v(" "),a("h3",{attrs:{id:"_2-获取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取镜像"}},[s._v("#")]),s._v(" 2. 获取镜像")]),s._v(" "),a("p",[s._v("拉取 Docker 仓库中该镜像的最新版本。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("如果不显示地指定 TAG，则默认会选择 latest 标签，即下载仓库中最新版本的镜像。")]),s._v(" "),a("h3",{attrs:{id:"_3-搜索镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-搜索镜像"}},[s._v("#")]),s._v(" 3. 搜索镜像")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[s._v("--automated=false，仅显示自动创建的镜像")]),s._v(" "),a("li",[s._v("--on-trunc=false，输出信息不截断显示")]),s._v(" "),a("li",[s._v("-s, --stars=0，指定仅显示评价为指定星级以上的镜像。")])]),s._v(" "),a("p",[s._v("Docker Hub 官方地址："),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_4-运行镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-运行镜像"}},[s._v("#")]),s._v(" 4. 运行镜像")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"_5-删除镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除镜像"}},[s._v("#")]),s._v(" 5. 删除镜像")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像名/镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除多个，镜像ID或镜像名用`空格`隔开即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi 镜像名/镜像ID 镜像名/镜像ID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除全部镜像，-a：显示全部，-q：只显示ID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aq")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),a("p",[s._v("参数：")]),s._v(" "),a("ul",[a("li",[s._v("-f：强制删除")])]),s._v(" "),a("h2",{attrs:{id:"docker-运维命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-运维命令"}},[s._v("#")]),s._v(" Docker 运维命令")]),s._v(" "),a("h3",{attrs:{id:"_1-启动-docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动-docker-2"}},[s._v("#")]),s._v(" 1. 启动 Docker")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-docker-开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-开机自启"}},[s._v("#")]),s._v(" 2. docker 开机自启")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3-查看-docker-运行状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看-docker-运行状态"}},[s._v("#")]),s._v(" 3. 查看 docker 运行状态")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl status "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-查看-docker-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看-docker-日志"}},[s._v("#")]),s._v(" 4. 查看 docker 日志")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("journalctl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" docker.service\n或者\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" /var/log/messages "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Docker\n")])])]),a("h3",{attrs:{id:"_5-docker-监控相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-docker-监控相关"}},[s._v("#")]),s._v(" 5. docker 监控相关")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器的资源使用率")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stats container_ID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 限制 cpu 和内存资源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cpus")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2g "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看磁盘大小 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看每个 image、container 详细大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 dir 路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);