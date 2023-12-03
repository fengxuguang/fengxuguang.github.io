---
title: JDK17 新特性
date: 2023-12-02
categories:
  - java
  - jdk17
---

## 1. Java Record

​	Java14 中预览的新特性叫做 Record，在 Java 中，Record 是一种特殊类型的 Java 类。可用来创建不可变类，语法简短。参考  [JEP 395](https://openjdk.java.net/jeps/395)，Jackson 2.12 支持 Record 类。



Java Record 避免上述的样板代码，如下特点：

1. 带有全部参数的构造方法
2. public 访问器
3. toString(), hashCode(), equals() 方法
4. 无 set，get 方法。没有遵循 Bean 的命名规范
5. final 类，不能继承 Record，Record 为隐式的 final 类。除此之外与普通类一样。
6. 不可变类，通过构造创建 Record。
7. final 属性，不可修改。
8. 不能声明实例属性，能声明 static 成员。



### Record 使用

**Record 使用**

~~~java
package org.example;

public record User(Integer id, String name, String email, Integer age) {
    
}
~~~

**Instance Method**

~~~java
package org.example;

import java.util.Optional;

public record User(Integer id, String name, String email, Integer age) {
    // 实例方法，concat 连接字符串
    public String concat() {
        return String.format("姓名是%s，年龄是%d", this.name, this.age);
    }

    // 静态方法，把 email 转为大写
    public static String emailToUpperCase(String email) {
        return Optional.ofNullable(email)
            .orElse("no email")
            .toUpperCase();
    }
}
~~~

**Record的构造方法**

​	我们可以在 Record 中添加构造方法，有三种类型的构造方法分别是：**紧凑的**，**规范的**和**定制构造方法**

- 紧凑型构造方法没有任何参数，甚至没有括号
- 规范构造方法是以所有成员作为参数
- 定制构造方法是自定义参数个数

~~~java
package org.example;

import java.util.Optional;

public record User(Integer id, String name, String email, Integer age) {
    // 紧凑型
    public User {
        System.out.println("id=" + id);
        if (id < 1) {
            throw new RuntimeException("id<1");
        }
    }
    
    // 定制构造方法
    public User(Integer id, String name) {
        this(id, name, null, null);
    }
}
~~~

### Record 与 Lombok

​	Java Record 是创建不可变类且减少样板代码的好方法。Lombok 是一种减少样板代码的工具。两者有表面上的重叠部分。

​	Lombok 提供语法的便利性，通常预装一些代码模板，根据您加入到类中的注解自动执行代码模板。这样的库纯粹是为了方便实现 POJO 类。通过预编译代码，将代码的模板加入到 class 中。

​	Java Record 是语言级别的，一种语义特性，为了建模而用，数据聚合。简单来说就是提供了通用的数据类，充当“**数据载体**”，用于在类和应用程序之间进行数据传输。

**Local Record**

~~~java
@Test
public void test() {
    var test = "aaa";
    // 定义 local record
    record SaleRecord(String saleId, String productName, Double money) {};
    // 创建对象
    SalaRecord saleRecord = new SaleRecord("S001", "显示器", 1000.01);
    System.out.println("saleRecord = " + saleRecord);
}
~~~

## 2. Switch 表达式新增匹配模式

使用 switch 表达式和语句的**模式匹配**以及对模式语言的扩展来增强 Java 编程语言。这个新特性允许使用新的模式，包括**类型模式**和**守卫模式**。类型模式能够在 switch 表达式中使用 instanceof，守卫模式能够使用布尔表达式。

### 类型模式

JDK16 instanceof 模式匹配

~~~java
if (obj instanceof String str) {
    // 直接使用 str
    str += "fly";
} else if (obj instanceof Integer i) {
    // 直接使用 i 进行整型逻辑运算
    i += 1;
}
~~~

JDK17 switch 可直接使用 instanceof 模式匹配选择（需要提前考虑 null 判断）

~~~java
Object obj;
switch(obj) {
    case null -> System.out.println("判空逻辑");
    case String s -> System.out.println("判断字符串逻辑：" + s);
    case record r -> System.out.println("判断 Record 类型逻辑：" + r.toString());
    case int[] iArr -> System.out.println("判断是否 int 数组，长度:" + iArr.length);
    case Integer i -> System.out.println("判断是否 Integer 对象，i:" + i);
    case User u -> System.out.println("判断是否为 User 对象，user: " + u.toString());
    default -> System.out.println("default");
}
~~~

### 守卫模式

~~~java
Object obj = "test";
switch(obj) {
    case String s && s.length() > 0 -> s;
    default -> "";
}
~~~

## 3. 文本块

在 Java17 之前的版本里，如果我们需要定义一个复杂的字符串，比如 JSON 字符串：

~~~java
String text = "{\n" + 
    " \"name\": \"Java\", \n" +
    " \"age\": 20, \n" + 
    "}";
~~~

这种方式定义有几个问题：

- 双引号需要进行转义；
- 为了字符串的可读性需要通过 + 号连接；
- 如果需要将 JSON 复制到代码中需要做大量的格式调整；

通过 Java17 中的文本块语法，类似的字符串处理则会方便很多；通过三个双引号可以定义一个文本块，并且结束的三个双引号不能和开始的在同一行。

~~~java
String text = """
{
    "name": "java",
    "age": 18
}
""";
~~~

## 4. Stream.toList() 方法

如果需要将 Stream 转换成 List，需要通过调用 collect() 方法使用 Collectors.toList() 进行转换，代码非常冗长。

~~~java
Stream<String> strStream = Stream.of("a", "b", "c");
List<String> strList = strStream.collect(Collectos.toList());
for (String s : strList) {
    System.out.println(s);
}
~~~

在 Java17 中将变得简单，可以直接调用 toList() 方法。

~~~~java
Stream<String> strStream = Stream.of("a", "b", "c");
List<String> strList = strStream.toList();
for (String s : strList) {
    System.out.println(s);
}
~~~~

