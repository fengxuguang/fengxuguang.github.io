---
title: Gin 请求
date: 2023-12-27
categories:
  - go
  - gin
---

## 请求参数

**main 主体函数**
```Go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"strconv"
)

func main() {
	router := gin.Default()

	router.GET("/query", _query)
	router.GET("/param/:user_id/:book_id", _param)
	router.POST("/form", _form)
	router.POST("/raw", _raw)
	router.GET("/articles", _getArticles)
	router.GET("/articles/:id", _getArticleDetails)

	router.Run(":80")
}
```
### 查询参数 Query
```Go
func _query(c *gin.Context) {
	username := c.Query("username")
	query, b := c.GetQuery("username")
	fmt.Println("username=", username)
	fmt.Println("query=", query)
	fmt.Println("b=", b)    // 存在username参数时，为true，否则为false
}

router.GET("/query", _query)
```
### 动态参数
```Go
func _param(context *gin.Context) {
	fmt.Println(context.Param("user_id"))
	fmt.Println(context.Param("book_id"))
}

router.GET("/param/:user_id/:book_id", _param)
```
### 表单 PostForm
```Go
func _form(context *gin.Context) {
	fmt.Println(context.PostForm("name"))
	fmt.Println(context.PostFormArray("name"))
}

router.POST("/form", _form)
```
### 原始参数 GetRawData
```Go
func _raw(context *gin.Context) {
	type User struct {
		Name string
		Age  int
	}
	var user User
	bindJson(context, &user)
	fmt.Println(user)
}

func bindJson(context *gin.Context, obj any) (err error) {
	body, _ := context.GetRawData()
	contentType := context.GetHeader("Content-Type")
	switch contentType {
        case "application/json":
            err := json.Unmarshal(body, &obj)
            if err != nil {
                fmt.Println(err.Error())
                return err
            }
	}

	return nil
}
```

## 请求头相关
### 请求头参数获取
`context.GetHeader()`获取参数时可以`不区分大小写`
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// 请求头的各种获取方式
	router.GET("/", func(context *gin.Context) {
		// 字母大小写不区分, 单词与单词之间用 - 连接
		// 用于获取一个请求头
		fmt.Println(context.GetHeader("User-Agent"))
		fmt.Println(context.GetHeader("user-Agent"))
		fmt.Println(context.GetHeader("user-agent"))

		// Header 是一个普通的 Map[string][string]
		fmt.Println(context.Request.Header)
		// 如果是使用 Get 方法或者是 .GetHeader, 那么可以不用区分大小写, 并且返回第一个 value
		fmt.Println(context.Request.Header.Get("User-Agent"))
		// 如果是用 map 的取值方式; 请注意大小写问题
		fmt.Println(context.Request.Header["user-agent"])

		// 自定义请求头
		fmt.Println(context.Request.Header.Get("Token"))
		fmt.Println(context.Request.Header.Get("token"))

		context.JSON(200, gin.H{"msg": "成功"})
	})

	// 爬虫和用户区别对待
	router.GET("/index", func(context *gin.Context) {

	})

	router.Run(":80")
}
```

## 响应头相关
### 设置响应头
```Go
// 设置响应头
router.GET("/res", func(context *gin.Context) {
    context.Header("token", "seks873dfe")
    context.JSON(200, gin.H{"data": "设置响应头"})
})
```