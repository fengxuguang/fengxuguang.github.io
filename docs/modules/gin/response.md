---
title: Gin 响应
date: 2023-12-27
categories:
  - go
  - gin
---

## 状态码
200 表示响应正常 `http.StatusOK`

## 响应
### 返回字符串
```Go
func _string(c *gin.Context) {
	c.String(http.StatusOK, "返回txt")
}
```

### 返回 json
#### 结构体方式
```Go
func _json(c *gin.Context) {
	type UserInfo struct {
		UserName string `json:"user_name"`
		Age      int    `json:"age"`
		Password string `json:"-"` // 不返回该字段，使用 -
	}
	user := UserInfo{"fly", 23, "123456"}

	c.JSON(200, user)
}
```
#### map方式
```Go
func _json(c *gin.Context) {
	userMap := map[string]any{
		"user_name": "fly",
		"age":       23,
	}

	c.JSON(200, userMap)
}
```
#### gin.H 方法
```Go
func _json(c *gin.Context) {
	c.JSON(200, gin.H{"username": "fly", "age": 24})
}
```

### 返回 XML
```Go
func _xml(c *gin.Context) {
	c.XML(200, gin.H{"username": "fly", "age": 23, "status": http.StatusOK})
}
```

### 返回 YAML
```Go
func _yaml(c *gin.Context) {
	c.YAML(200, gin.H{"username": "fly", "age": 23, "status": http.StatusOK})
}
```

### 返回 HTML
需要先试用`LoadHTMLGlob()`或者`LoadHTMLFiles()`方法来加载模板文件。
```Go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func _html(c *gin.Context) {
	type UserInfo struct {
		UserName string `json:"user_name"`
		Age      int    `json:"age"`
		Password string `json:"-"` // 不返回该字段，使用 -
	}
	user := UserInfo{"fly", 23, "123456"}
	c.HTML(200, "index.html", user)
}

func main() {
	router := gin.Default()

	// 加载模板目录下所有的模板文件
	router.LoadHTMLGlob("templates/*")
	router.GET("/html", _html)

	router.Run(":80")
}

```

**index.html** 文件（path: templates/index.html）
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>模板</title>
</head>
<body>
    <header>你好 {{.UserName}}</header>
</body>
</html>
```
在模板中使用这个UserName属性，需要使用{ {.UserName}}

### 响应文件
```Go
// 在 golang 中, 没有相对文件的路径, 它只有相对项目的路径
// 网页请求这个静态目录的前缀，第二个参数是一个目录，注意：前缀不要重复
router.StaticFS("/static", http.Dir("static/static"))
// 配置单个文件，网页请求的路由会访问文件的路径
router.StaticFile("/static/hero.jpg", "static/hero.jpg")
```

### 重定向
```Go
// 重定向
func _redirect(c *gin.Context) {
	c.Redirect(302, "http://www.baidu.com")
}

func main() {
	router := gin.Default()
	router.GET("/baidu", _redirect)

	router.Run(":80")
}
```