---
title: SpringBootApplication 注解
date: 2023-11-13
categories:
    - springboot

tags:
    - springboot
---


## SpringBootApplication 注解
```java
// 省略...
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(
    excludeFilters = {@Filter(
    type = FilterType.CUSTOM,
    classes = {TypeExcludeFilter.class}
), @Filter(
    type = FilterType.CUSTOM,
    classes = {AutoConfigurationExcludeFilter.class}
)}
)
public @interface SpringBootApplication {
    
    // exclude 属性表示哪些类需要排除掉, 等同于 EnableAutoConfiguration 类里的 exclude 属性
    @AliasFor(annotation = EnableAutoConfiguration.class)
    Class<?>[] exclude() default {};

    // excludeName 属性表示哪些类名称需要排除掉, 等同于 EnableAutoConfiguration 类里的 excludeName 属性
    @AliasFor(annotation = EnableAutoConfiguration.class)
    String[] excludeName() default {};

    // scanBasePackages 属性表示要扫描哪些包下的类, 等同于 ComponentScan 类里的 basePackages 属性
    @AliasFor(annotation = ComponentScan.class, attribute = "basePackages")
    String[] scanBasePackages() default {};

    // scanBasePackageClasses 属性表示要扫描哪些包下的类，等同于 ComponentScan 类里的 basePackageClasses 属性
    @AliasFor(annotation = ComponentScan.class, attribute = "basePackageClasses")
    Class<?>[] scanBasePackageClasses() default {};

    @AliasFor(annotation = ComponentScan.class, attribute = "nameGenerator")
    Class<? extends BeanNameGenerator> nameGenerator() default BeanNameGenerator.class;

    // 配置是否生效, 默认 true, 表示要加载
    @AliasFor(annotation = Configuration.class)
    boolean proxyBeanMethods() default true;
}
```

@SpringBootApplication 注解是 Spring Boot 中的核心注解，它用于标识一个主要的 Spring Boot 应用程序类。

该注解是一个复合注解，包含：@ComponentScan、@SpringBootConfigure、@EnableAuthConfigure 注解。



## @ComponentScan 注解

扫描路径为当前解析这个类所在的包路径。



## @EnableAutoConfigure 注解

```java
// 省略 ...
@AutoConfigurationPackage
@Import({AutoConfigurationImportSelector.class})
public @interface EnableAutoConfiguration {
    String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";

    Class<?>[] exclude() default {};

    String[] excludeName() default {};
}
```

这个注解会负责进行自动配置类的导入，也就是将项目中的配置类自动导入到 Spring 容器中，从而得到解析。



## @SpringBootConfigure 注解

```java
// 省略 ...
@Configuration
@Indexed
public @interface SpringBootConfiguration {
    
    @AliasFor(annotation = Configuration.class)
    boolean proxyBeanMethods() default true;
}
```

相当于 **@Configuration** 注解，表示当前类是个配置类。

