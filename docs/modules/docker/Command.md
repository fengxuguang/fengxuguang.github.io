---
title: Docker 命令
date: 2023-11-26
categories:
  - docker
---

## Docker 容器命令

### 1. 启动 Docker
要启动一个已经存在的容器，可以使用 **start** 命令。
```shell
docker start [容器名/containerID]
```
Docker start 命令本质为容器文件系统创建了一个进程隔离空间。

### 2. 停止容器
```shell
docker stop [容器名/containerID]
```

### 3. 运行容器
要创建和运行容器使用 **run** 命令。
```shell
docker run [容器名/containerID]
```
该命令会从本地、Docker Hub 中搜索指定的镜像，并下载到本地，创建一个容器并启动该容器。

### 4. 查看所有运行中的容器

列出所有运行中的容器。

```shell
docker ps
```

列出所有的容器，不管是运行的，还是停止的。

```she
docker ps -a
```

### 5. 重启容器

要重启一个运行中的容器。

```she
docker restart [容器名/containerID]
```

### 6. 查看容器日志

```shell
docker log -f [容器名/containerID]
```

选项：

- -f：可选，滚动刷新日志信息。

### 7. 查看 Docker 信息

查看 Docker 版本。

```she
docker version
```

如：

```shell
[root@192 ~]# docker version
Client: Docker Engine - Community
 Version:           24.0.2
 API version:       1.43
 Go version:        go1.20.4
 Git commit:        cb74dfc
 Built:             Thu May 25 21:55:21 2023
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          24.0.2
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.4
  Git commit:       659604f
  Built:            Thu May 25 21:54:24 2023
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.25
  GitCommit:        d8f198a4ed8892c764191ef7b3b06d8a2eeb5c7f
 runc:
  Version:          1.1.10
  GitCommit:        v1.1.10-0-g18a0cb0
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```



### 8. 查看 docker 系统的信息

```she
docker info
```

如：

```sh
[root@192 ~]# docker info
Client: Docker Engine - Community
 Version:    24.0.2
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.11.2
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.21.0
    Path:     /usr/libexec/docker/cli-plugins/docker-compose
  scan: Docker Scan (Docker Inc.)
    Version:  v0.23.0
    Path:     /usr/libexec/docker/cli-plugins/docker-scan

Server:
 Containers: 19
  Running: 16
  Paused: 0
  Stopped: 3
 Images: 85
 Server Version: 24.0.2
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk 
... 省略
```



## Docker 镜像命令

镜像是 Docker 容器的基石，容器是镜像的运行实例，有了镜像才能启动容器。



### 1. 列出所有镜像

```shell
docker images
```

```she
[root@192 docker]# docker images
REPOSITORY      TAG      IMAGE ID       CREATED         SIZE
```

选项说明：

- REPOSITORY：表示镜像的仓库源
- TAG：镜像的标签版本号
- IMAGE ID：镜像ID
- CREATED：镜像创建时间
- SIZE：镜像大小

### 2. 获取镜像

拉取 Docker 仓库中该镜像的最新版本。

```shell
docker images pull [镜像名]
```

### 3. 搜索镜像

```shell
docker search [镜像名]
```

Docker Hub 官方地址：[Docker Hub](https://hub.docker.com/)

### 4. 运行镜像

```shell
docker run [镜像名]
```

### 5. 删除镜像

```shell
# 删除一个镜像
docker rmi [镜像名/镜像ID]

# 删除多个，镜像ID或镜像名用`空格`隔开即可
docker rmi 镜像名/镜像ID 镜像名/镜像ID

# 删除全部镜像，-a：显示全部，-q：只显示ID
docker rmi -f $(docker images -aq)
```

参数：

- -f：强制删除



## Docker 运维命令

### 1. 启动 Docker

```shell
sudo systemctl start docker 

# 重启
sudo systemctl restart docker
```

### 2. docker 开机自启

```shell
sudo systemctl enable docker
```

### 3. 查看 docker 运行状态

```shell
systemctl status docker
```

### 4. 查看 docker 日志

```shell
journalctl -u docker.service
或者
less /var/log/messages | grep Docker
```

### 5. docker 监控相关

```shell
# 查看容器的资源使用率
docker stats container_ID

# 限制 cpu 和内存资源
docker run --cpus=1 -m=2g --name nginx -d nginx

# 查看磁盘大小 
docker system df

# 查看每个 image、container 详细大小
docker system df -v

# 查看 dir 路径
docker info | grep -i dir
```

