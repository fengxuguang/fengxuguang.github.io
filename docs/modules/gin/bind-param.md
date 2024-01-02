---
title: Gin bind绑定参数
date: 2023-12-27
categories:
  - gin
  - go
---

> Gin中的 bind 可以很方便的将前端传递来的数据与`结构体`进行`参数绑定`，以及参数校验

## 参数绑定
在使用这个功能的时候，需要给`结构体`加上 Tag：`json` `form` `uri` `xml` `yaml`

### ShouldBindJSON
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

type UserInfo struct {
	Name string `json:"name" form:"name" uri:"name"`
	Age  int    `json:"age" form:"age" uri:"age"`
	Sex  string `json:"sex" form:"sex" uri:"sex"`
}

func main() {
	router := gin.Default()

	router.POST("/", func(c *gin.Context) {
		var userInfo UserInfo
		err := c.ShouldBind(&userInfo)
		if err != nil {
			fmt.Println(err)
			c.JSON(200, gin.H{"msg": "你错了"})
			return
		}
		c.JSON(200, userInfo)
	})

	router.Run(":80")
}
```

### ShouldBindQuery
绑定查询参数
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

type UserInfo struct {
	Name string `json:"name" form:"name" uri:"name"`
	Age  int    `json:"age" form:"age" uri:"age"`
	Sex  string `json:"sex" form:"sex" uri:"sex"`
}

func main() {
	router := gin.Default()

	router.GET("/query", func(c *gin.Context) {
		var userInfo UserInfo
		// 绑定参数
		err := c.ShouldBindQuery(&userInfo)
		if err != nil {
			fmt.Println(err)
			c.JSON(200, gin.H{"msg": "你错了"})
			return
		}
		c.JSON(200, userInfo)
	})

	router.Run(":80")
}
```

### ShouldBindUri
绑定动态参数
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

type UserInfo struct {
	Name string `json:"name" form:"name" uri:"name"`
	Age  int    `json:"age" form:"age" uri:"age"`
	Sex  string `json:"sex" form:"sex" uri:"sex"`
}

func main() {
	router := gin.Default()

	router.GET("/uri/:name/:age/:sex", func(c *gin.Context) {
		var userInfo UserInfo
		// 绑定参数
		err := c.ShouldBindUri(&userInfo)
		if err != nil {
			fmt.Println(err)
			c.JSON(200, gin.H{"msg": "你错了"})
			return
		}
		c.JSON(200, userInfo)
	})

	router.Run(":80")
}
```

### ShouldBind
会根据请求头中的 Content-Type 去自动绑定。<br/>
form-data 的参数也用这个，tag 用 form<br/>
默认的 tag 就是 form <br/>
**绑定 form-data、x-www-form-urlencode**
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

type UserInfo struct {
	Name string `json:"name" form:"name" uri:"name"`
	Age  int    `json:"age" form:"age" uri:"age"`
	Sex  string `json:"sex" form:"sex" uri:"sex"`
}

func main() {
	router := gin.Default()

	router.POST("/form", func(c *gin.Context) {
		var userInfo UserInfo
		err := c.ShouldBind(&userInfo)
		if err != nil {
			fmt.Println(err)
			c.JSON(200, gin.H{"msg": "你错了"})
			return
		}
		c.JSON(200, userInfo)
	})

	router.Run(":80")
}
```

### bind 绑定器
需要使用参数验证功能，需要加 binding tag
```Go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

type SignUserInfo struct {
	Name       string `json:"name" binding:"required,min=4"`          // 用户名
	Age        int    `json:"age"`                                    // 年龄
	Sex        string `json:"sex" binding:"oneof=man women"`          // 性别
	Password   string `json:"password"`                               // 密码
	RePassword string `json:"re_password" binding:"eqfield=Password"` // 确认密码
	Date       string `json:"date" binding:datetime=2023-12-19`       // 日期
	Url        string `json:"url" binding:"url"`                      // url 是 uri 的子集
	Uri        string `json:"uri" binding:"uri"`                      // uri 是 url 的父集
}

func main() {
	router := gin.Default()

	router.POST("/", func(c *gin.Context) {
		var user SignUserInfo
		err := c.ShouldBind(&user)
		if err != nil {
			fmt.Println(err)
			c.JSON(200, gin.H{"msg": err.Error()})
			return
		}
		c.JSON(200, gin.H{"data": user})
	})

	router.Run(":80")
}
```
#### 常用验证器
```Go
// 不能为空，并且不能没有这个字段
required: 必填字段, 如: binding:"required"

// 针对字符串的长度
min 最小长度, 如: binding:"min=5"
max 最大长度, 如: binding:"max=10"
len 长度, 如: binding:"len=6"

// 针对数字的大小
eq 等于, 如: binding:"eq=3"
ne 不等于, 如: binding:"ne=12"
gt 大于, 如: binding:"gt=10"
gte 大于等于, 如: binding:"gte=10"
lt 小于, 如: binding:"lt=10"
lte 小于等于, 如: binding:lte=10"

// 针对同级字段
eqfield 等于其他字段的值, 如: Password string `binding:"eqfield=Password"`
nefield 不等于其他字段的值

- 忽略字段, 如: binding:"-"
```