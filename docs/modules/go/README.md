---
title: Go 基础语法
date: 2023-12-07
categories:
  - go
---

## GO 基础语法

### go 关键字

~~~go
break default func interface select case defer
go map struct chan else goto package switch
const fallthrough if range type continue for
import return var
~~~

### go 数据类型定义

1. `var`声明定义一个变量，定义后，值可修改
2. `const`声明定义一个变量，定义后，值不可修改
3. `:=`定义一个变量，类型由后面的值觉得。**常用定义方式**

### go 数据类型

**go数据类型主要分为两类：基本数据类型和派生数据类型**

#### 基本数据类型

整型、浮点型、字符串

##### 整型

~~~mark
长度说明：位即是一个二进制位，8 即2^8=256，如果是有符号则需要一位作为符号位

整型：分为有符号和无符号。无符号即有符号前加多个 u
例如：有符号8位 int8、无符号8位 uint8
~~~

##### 浮点型

| 属性 | 说明       |
| ---- | ---------- |
| 范围 | 32位、64位 |

~~~mark
浮点型只有两种类型，float32 和 float64，默认：64，64位更加精准
~~~

##### 字符和字符串

字符串就是一串固定长度的字符连接起来的字符序列。Go 的字符串是由单个字节连接起来的，也就是说对于传统的字符串是由字符组成的，而 Go 的字符串是由字节组成的。

1. 字符使用单引号定义字符，字符定义后无法修改

   ~~~go
   var word byte = 'a'
   ~~~

2. 字符串可以用双引号和反引号定义，字符串定义后可修改

   双引号会解析特殊字符，如 \n 或 \r 等，反引号直接原样处理。

   ~~~go
   var word string = "hello \n world"
   var word2 string = `hello \n world`
   ~~~

##### 基本数据类型相互转换

Golang 和 Java/C 不同，Golang 在不同类型的变量之间赋值时**需要显示转换**。也就是 Golang 中数据类型**不能自动转换**。

**基本语法：**

- 表达式 `var_type(var_name)`将值 v 转换为类型 var_type

~~~go
var num int = 42
// 转浮点型
var float float64 = float64(num)
// 转整型无符号8位
var ui uint8 = uint8(num)
fmt.Println(num, float, ui)
~~~

**其他类型转字符串**

~~~go
var num int = 99
var num2 float64 = 23.456
var isTrue bool = true
var str string = strconv.FormatInt(int64(num), 10)
fmt.Println(str)

str = strconv.FormatFloat(num2, 'f', 10, 64)
fmt.Println(str)

str = strconv.FormatBool(isTrue)
fmt.Println(str)
~~~

#### 派生数据类型

指针、数组、切片、函数、map、结构体、通道、接口

##### 指针

指针保存变量在内存中的地址，与 C 类似，类似 Java 中的引用

1. 用`*类型`来定义指针变量，对于指针变量，可以用`*变量名`来获取内存地址指向的值
2. & 用来获取变量的地址

~~~go
var a := 1
var num *int = &az
fmt.Println(*num)
~~~

