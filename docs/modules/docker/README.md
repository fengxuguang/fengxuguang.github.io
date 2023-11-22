---
title: Docker 容器
date: 2023-11-20
categories:
  - docker
---

## 简介
Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 **Linux** 或 **Window 操作系统**的机器上，也可以实现虚拟化，容器是完全使用**沙箱机制**，相互之间不会有任何接口。

一个完整的 Docker 有以下几个部分组成：
- DockerClient 客户端
- Docker Daemon 守护进程
- Docker Image 镜像
- DockerContainer 容器

## Docker 核心概念
### 镜像（image）
Docker 镜像是一个特殊的文件系统，提供容器运行时所需的程序、库、资源、配置等文件，另外还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）

### 容器（Container）
镜像与容器的关系，就是面向对象编程中类与对象的关系，我们定好每一个类，然后使用类创建对象，对应到 Docker 的使用上，则是构建好每一个镜像，然后使用镜像创建我们需要的容器。

### 仓库（Repository）
仓库是一个集中存储和分发镜像的服务。Docker Registry 包含狠毒哦仓库，每个仓库对应多个标签，不同标签对应一个软件的不同版本。仓库分为公开仓库（Public）和私有仓库（Private）两种形式。


最大的公开仓库是 Docker Hub，是 Docker 提供用于存储和分布镜像的官方 Docker Registry，也是默认的 Registry。