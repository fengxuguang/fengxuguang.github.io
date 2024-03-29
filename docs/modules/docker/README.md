---
title: Docker 容器
date: 2023-11-20
categories:
  - docker
---

## 简介
​	Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 **Linux** 或 **Window 操作系统**的机器上，也可以实现虚拟化，容器是完全使用**沙箱机制**，相互之间不会有任何接口。

一个完整的 Docker 有以下几个部分组成：
- DockerClient 客户端
- Docker Daemon 守护进程
- Docker Image 镜像
- DockerContainer 容器

## Docker 核心概念
### 镜像（image）
&emsp;&emsp;Docker 镜像是一个特殊的文件系统，提供容器运行时所需的程序、库、资源、配置等文件，另外还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）

### 容器（Container）
​	镜像与容器的关系，就是面向对象编程中类与对象的关系，我们定好每一个类，然后使用类创建对象，对应到 Docker 的使用上，则是构建好每一个镜像，然后使用镜像创建我们需要的容器。

### 仓库（Repository）
​	仓库是一个集中存储和分发镜像的服务。Docker Registry 包含很多个仓库，每个仓库对应多个标签，不同标签对应一个软件的不同版本。仓库分为公开仓库（Public）和私有仓库（Private）两种形式。


最大的公开仓库是 [Docker Hub](https://hub.docker.com/)，是 Docker 提供用于存储和分布镜像的官方 Docker Registry，也是默认的 Registry。



## Docker 实现原理

&emsp;&emsp;Docker 核心解决的问题是利用 LXC 来实现类似 VM 的功能，从而利用更加节省的硬件资源提供给用户更多的计算资源。同 VM 的方式不同，LXC 其并不是一套硬件虚拟化方法，而是一个操作系统虚拟化方法，其解决的主要是以下 4 个问题：

- 隔离性 - 每个用户实例直接相互隔离，互不影响。硬件虚拟化方法给出的方法是 VM，LXC 给出的方法是 container，更细一点是 kernel namespace

- 可配额/可度量 - 每个用户实例可以按需提供其计算资源，所使用的资源可以被计量。硬件虚拟化方法因为虚拟了 CPU，memory 可以方便实现，LXC 则主要是利用 cgroups 来控制资源
- 移动性 - 用户的实例可以很方便地复制、移动和重建。硬件虚拟化方法提供 snapshot 和 image 来实现，docker （主要）利用 AUFS 实现
- 安全性 - 这里强调是 host 主机的角度尽量保护 container。硬件虚拟化的方法因为虚拟化的水平比较高，用户进程都是在 KVM 等虚拟机容器中翻译运行的，然而对应 LXC，用户的进程是 lxc-start 进程的子进程，只是在 Kernel 的 namespace 中隔离的，因此需要一些 kernel 的 patch 来保证用户的运行环境不会收到来自 host 主机的恶意入侵，dotcloud（主要是）利用 kernel grsec patch 解决的



### 1. Namespace

&emsp;&emsp;在服务器上启动了多个服务，这些服务其实会相互影响的，每一个服务都能看到其他服务的进程，也可以访问宿主机上的任意文件，这不是我们要的效果，我们更希望运行在同一台机器上的不同服务能做到完全隔离，就像运行在多台不同的机器上一样。



Linux 的命名空间（namespace）可以为我们提供用于隔离进程树、网络接口、挂载点以及进程间通信等资源的方法。