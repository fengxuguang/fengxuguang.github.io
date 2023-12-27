---
title: Gin 编写 Hello World
date: 2023-12-27
categories:
  - go
  - gin
---

## Gin HelloWorld
使用 Gin 编写一个接口非常简单
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Index(context *gin.Context) {
	context.String(200, "hello world，阿飞")
}

func main() {
	// 创建一个默认的路由
	router := gin.Default()

	// 绑定路由规则和路由函数, 访问 /index 路由, 将有对应的函数去处理
	router.GET("/index", Index)

	// 启动监听, gin 会把 web 服务运行在本机的 0.0.0.0 的 8080 端口
	router.Run(":8080")
}
```

1. `router:=gin.Default()`：这是默认的服务器。使用 Gin 的`Default`方法创建一个路由`Handler`。
2. 然后通过 Http 方法绑定路由规则和路由函数。不同于`net/http`库的路由函数，Gin 进行了封装，把`request`和`response`都封装到了`gin.Context`的上下文环境中。
3. 最后启动路由的 Run 方法监听端口。还可以用`http.ListenAndServe(":8080", router)`，或者自定义 Http 服务器配置。

## ListenAndServe 方式启动
```Go
// 用原生 http 服务的方式, router.Run 本质就是 http.ListenAndServe 的进一步封装
http.ListenAndServe(":8080", router)
```