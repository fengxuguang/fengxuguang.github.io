---
title: Go 基础语法
date: 2023-12-07
categories:
  - go
---

## GO 基础语法

### go 关键字

go 语言中一共有 25 个关键字。

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

整型、浮点型、字符串、布尔型、字符型

##### 整型

~~~mark
类型：int8、int16、int32、int64、uint8、uint16、uint32、uint64、byte
长度说明：位即是一个二进制位，8 即2^8=256，如果是有符号则需要一位作为符号位

整型：分为有符号和无符号。无符号即有符号前加多个 u
例如：有符号8位 int8、无符号8位 uint8
~~~

##### 浮点型

| 属性 |    说明    |
| :--: | :--------: |
| 范围 | 32位、64位 |

~~~mark
浮点型只有两种类型，float32 和 float64，默认：64，64位更加精准
~~~

PS：底层存储空间和操作系统无关

PS：浮点类型底层存储：符号位 + 指数位 + 尾数位，所以尾数位只是存了一个大概，很可能出现精度的丢失。

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

- 表达式 `T(v)`将值 v 转换为类型 T

~~~go
var num int = 100
// 转浮点型
var float float64 = float64(num)
// 转整型无符号8位
var ui uint8 = uint8(num)
fmt.Println(num, float, ui)
~~~

**其他类型转字符串**

~~~go
// 方式一（推荐）
var num int = 23
var n2 float32 = 3.14

var s1 string = fmt.Sprintf("%d", num)
fmt.Println(s1)

var s2 string = fmt.Sprintf("%f", n2)
fmt.Println(s2)

// 方式二
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
a := 1
var num *int = &a
fmt.Println(*num)
~~~

##### map

map 是一种无序的基于 key-value 的数据结构，Go 语言中的 map 是引用类型，必须初始化才能使用。

~~~go
func main() {
	// 需要使用 make() 方法初始化 map
	var gomap = make(map[int]string)
	// 添加
	gomap[1] = string("hello")
	gomap[2]= string("golang")
	
	// 遍历
	for key,value := range gomap {
		fmt.Printf("index: %v, value: %v \n", key, value)
	}
	fmt.Println("---------------------")
	// 删除
	delete(gomap, 1)
	// 遍历
	for key,value := range gomap {
		fmt.Printf("index: %v, value: %v \n", key, value)
	}
}
~~~

##### 数组与切片

**数组：**go 数组与 C 相似。需要定义数组类型，和数组长度。数组长度定义后不能修改。

~~~go
func main() {
	var intArr [4]int
	var strArr [2]string
	var arr = [...]int{1, 2, 3, 4}
	var doubleArr = [...][2]int{{1, 2}, {3, 4}}
	
	fmt.Println(intArr)
	fmt.Println(strArr)
	fmt.Println(arr)
	fmt.Println(doubleArr)
}
~~~

**切片（Slice）：**在`GO`语言中，数组是一个固定长度的序列，而切片则是一个可变长度的序列。切片是建立在数组之上的，它提供了`动态数组`的功能，可以根据需要动态地增加或缩小切片的长度。与数组相比切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大。

~~~go
func main() {
	var s []int
	s1 := []int {1, 2, 3}
	
	fmt.Println(s)
	fmt.Println(s1)
	
}
~~~

还可以使用`make`函数来创建一个指定长度和容量的切片。

`make`的第一个参数为切片类型；第二个参数为切片长度（即实际存储的元素个数）；第三个参数为切片容量，该参数为可选参数，如果为空则值默认为切片长度。

~~~go
func main() {
	// 创建一个长度为 3、容量为 5 的整型切片
	slice := make([]int, 3, 5)
	// 创建一个长度为 3、容量为 3 的字符串切片
	slice2 := make([]string, 3)
	
	fmt.Println(slice)
	fmt.Println(slice2)
}
~~~

还可以直接通过数组或切片来创建一个新的切片，新切片的长度等于从原始数组或切片中指定的开始和结束索引之间的元素个数，容量等于原始数组或切片的长度减去开始索引（`s := arr[startIndex:endIndex]`）。

~~~go
arr := [5]int{1, 2, 3, 4, 5}
// 创建一个从 arr[1] 开始到 arr[4] 结束的切片
slice3 := arr[1:4]
// 创建一个新切片，容量等于原始切片的长度
slice4 := slice3[:]
~~~

**注意：**当直接从另一个切片创建一个新切片时，两个切片将**共享相同的底层数组**。因此，修改一个切片的元素也会影响到另一个切片。

~~~go
arr := [5]int{1, 2, 3, 4, 5}
// 创建一个从 arr[1] 开始到 arr[4] 结束的切片
slice3 := arr[1:4]
// 创建一个新切片，容量等于原始切片的长度
slice4 := slice3[:]
slice3[2] = 6

fmt.Println(slice3)
fmt.Println(slice4)
fmt.Println(arr)
~~~

**切片追加元素**

使用内置的`append`函数向切片中追加元素，如果切片的容量不够，则会自动扩容。

~~~go
// 创建一个空的切片
var slice6 []int
// 向切片中追加元素
slice6 = append(slice6, 4, 5, 6)
fmt.Println(slice6)

// 向切片中追加元素
slice6 = append(slice6, 9)
fmt.Println(slice6)
~~~

**切片遍历**

可以使用`for`循环或者和`for - range`关键字来遍历切片中的元素。

~~~go
arr := [5]int{1, 2, 3, 4, 5}
println("------ for i ----")
// for 循环遍历切片
for i := 0; i < len(arr); i ++ {
    println(arr[i])
}

println("---------- for range ------")
// for range 遍历切片
for key, value := range arr {
    println(key, value)
}
~~~

**切片复制**

可以使用内置`copy`函数将一个切片中的元素复制到另一个切片中。

~~~go
slice6 := [5]int{1, 2, 3, 4, 5}
// 创建一个包含 3 个元素的整数数组
slice7 := make([]int, 2, 4)
// 将 slice6 中的元素复制到 slice7 中
copy(slice7, slice6)
fmt.Println(slice7)
~~~

**切片排序**

可以使用`sort`包中的函数对切片进行排序。

~~~go
sortArr := []int{3, 5, 2, 4, 1}
sort.Ints(sortArr)
fmt.Println(sortArr)
~~~

##### 结构体和面向对象

Go 中没有“类”的概念，也不支持“类”的继承和面向对象的概念。GO 语言中通过结构体的内嵌在配合接口比面向对象有更高的扩展性和灵活性。

**结构体定义**

结构体中字段大写开头表示公开访问，小写表示私有（仅在定义当前结构体的包中可访问）

~~~go
type <类型名> struct {
    字段名 字段类型
    字段名 字段类型
    字段名 字段类型
}
~~~

通过`.`号访问结构体属性（与 C 类似）

```go
type user struct {
    name string
    age int
}

func main() {
	user := user{"fly", 18}
	fmt.Println(user.name)
}
```

**结构体实例化方式**

~~~go
// 键值对初始化
user2 := &user {name: "fly2", age: 22}
fmt.Println(user2.name)

// 值列表
user3 := &user{"fly3", 23}
fmt.Println(user3)

// new 关键字
user4 := new(user)
user4.name = "fly4"
fmt.Println(user4.name)
~~~

##### 类型别名

语法格式

`type <类型名> 类型描述`

~~~go
type ui8 = uint8
// 定义结构体变量
var i ui8 = 1
fmt.Println(i)
~~~

##### 标识符

**什么是标识符？**

​	变量，方法等，只要是起名字的地方，那个名字就是标识符

**标识符定义规则：**

1. 三个可以（组成部分）：数字、字母、下划线

2. 四个注意：

   1. 不可以以数字开头
   2. 严格区分大小写
   3. 不能包含空格
   4. 不可以使用 GO 中的保留关键字

3. 见名知意：增加可读性

4. 下划线"_"本身在 GO 中是一个特殊的标识符，称为空标识符。可以代表任何其他的标识符，但是它对应的值会被忽略（比如：忽略某个返回值）。所以仅能被作为占位符使用，不能单独作为标识符使用。

5. 可以用如下形式，但是不建议：var int int = 10 (int, float32, float64 等不算是保留关键字，但是也尽量不要使用)

6. 长度无限制，但是不建议太长

7. 起名规则

   1. 包名：尽量保持 package 的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，不要和标准库冲突

      - 为什么之前在定义源文件的时候，一般我们都用 package main 包？

      main 包是一个程序的入口包，所以 main 函数它所在的包建议定义为 main 包，如果不定义为 main 包，那么就不能得到可执行文件。

      - 尽量保持 package 的名字和目录保持一致
      - 和标准库不要冲突

   2. 变量名、函数名、常量名：采用`驼峰命名法`

   3. 如果变量名、函数名、常量名首字母大写，则可以被其他的包访问；如果首字母小写，则只能在本包中使用

注意：

1. import 导入语句通常放在文件开头包声明语句的下面。
2. 导入的包名需要使用双引号包裹起来。
3. 包名是从 $GOPATH/src/ 开始计算的，使用 / 进行路径分隔。

需要配置一个环境变量：GOPATH



### 函数

定义：对特定的功能进行提取，形成一个代码片段，这个代码片段就是我们所说的函数

作用：提高代码的复用性

基本语法

~~~go
func 函数名(形参列表) (返回值类型列表) {
    return 返回值列表
}
~~~

（1）函数名：

- 遵循标识符命名规范：见名知意，驼峰命名
- 首字母不能是数字
- 首字母大写该函数可以被本包文件和其他包文件使用（类似 public）
- 首字母小写只能被本包文件使用，其他包文件不能使用（类似 private）

（2）形参列表

​	形参列表：个数：可以是一个参数，可以是 n 个参数，可以是 0 个参数

​	形式参数列表：作用：接收外来的数据

​	实际参数：实际的数据

（3）返回值类型列表

个数：可以 0 个，1 个或者多个

### 错误处理

#### 错误处理/捕获机制

go 中追求代码优雅，引入机制：defer + recover 机制处理错误

```go
package main

import "fmt"

func main() {
	test()
	fmt.Println("finish!")
}

func test() {
	// 利用 defer + recover 来捕获错误
	defer func() {
		// 调用 recover 内置函数, 可以捕获错误
		err := recover()
		// 如果没有捕获错误, 返回值为零值: nil
		if err != nil {
			fmt.Println("错误已经捕获")
			fmt.Println("err是：", err)
		}
	}()
	num1 := 10
	num2 := 0
	result := num1 / num2
	fmt.Println(result)
}
```

优点：提高程序健壮性

#### 自定义错误

~~~go
package main

import (
	"errors"
	"fmt"
	"log"
)

func main() {
	err := test2(10, 0)
	if err != nil {
		fmt.Println("自定义错误：", err)
	}
	fmt.Println("正常执行下面流程...")
}

func test2(num1 int, num2 int) error {
	if num2 == 0 {
		return errors.New("除数不能为0")
	} else {
		result := num1 / num2
		fmt.Println(result)
		return nil
	}
}
~~~

### 数组

~~~go
package main

import "fmt"

func main() {
	// 实现的功能: 给出 5 个学生的成绩, 求出成绩的总和、平均数
	arr()
}

func arr() {
    // 初始化数组
	var score [5]int
	score[0] = 95
	score[1] = 91
	score[2] = 49
	score[3] = 66
	score[4] = 22

	var sum int = 0
	// 总和
	for i := 0; i < len(score); i ++ {
		sum += score[i]
	}
	avg := float32(sum) / float32(len(score))
	fmt.Println("总和：", sum)
	fmt.Println("平均分：", avg)
}
~~~

