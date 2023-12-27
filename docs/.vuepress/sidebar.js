/**
 * 侧边栏配置
 */

const java = require('./pathDir/java')
const docker = require('./pathDir/docker')
const tools = require('./pathDir/tools')
const springboot = require('./pathDir/springboot')
const gin = require('./pathDir/gin')

module.exports = {
    "/modules/java/": [
        {
            title: 'Java相关',
            path: java.root
        },
        {
            title: 'JDK17新特性',
            path: java.jdk17_feature
        }
    ],
    "/modules/tools/": [
        {
            title: 'IDEA快捷键',
            path: tools.idea
        }
    ],
    "/modules/springboot/": [
        {
            title: 'SpringBootApplication注解',
            path: springboot.SpringBootApplication
        },
        {
            title: "SpringBootConfiguration注解",
            path: springboot.SpringBootConfiguration
        }
    ],
    "/modules/docker": [
        {
            title: 'Docker运行原理',
            path: docker.root
        },
        {
            title: 'Docker命令',
            path: docker.Command
        }
    ],
    "/modules/gin": [
        {
            title: 'Gin框架介绍',
            path: gin.root
        },
        {
            title: 'Gin编写HelloWorld',
            path: gin.helloworld
        },
        {
            title: 'Gin响应',
            path: gin.response
        }
    ]
}