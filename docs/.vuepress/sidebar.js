/**
 * 侧边栏配置
 */

const java = require('./pathDir/java')
const docker = require('./pathDir/docker')
const tools = require('./pathDir/tools')
const springboot = require('./pathDir/springboot')
const gin = require('./pathDir/gin')
const leetcode = require('./pathDir/leetcode')

module.exports = {
    "/modules/java/": [
        {
            title: 'Java相关',
            path: java.root
        },
        {
            title: 'JDK17新特性',
            path: java.jdk17_feature
        },
        {
            title: '动态Druid连接池',
            path: java.dynamic_druid
        },
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
    "/modules/leetcode": [
        {
            title: '1.两数之和【简单】',
            path: leetcode.sum_of_two_number
        },
        {
            title: '2.两数相加【中等】',
            path: leetcode.add_two_number_together
        },
        {
            title: '3.无重复字符的最长子串【中等】',
            path: leetcode.the_longest_string_without_repeating_characters
        },
        {
            title: '5.最长回文子串【中等】',
            path: leetcode.the_longest_return_substring
        },
        {
            title: '7.整数反转【中等】',
            path: leetcode.integer_inversion
        },
        {
            title: '9.回文数【简单】',
            path: leetcode.palindromic_number
        },
        {
            title: '13.罗马数字转整数【简单】',
            path: leetcode.roman_numerals_to_whole_numbers
        },
        {
            title: '20.有效的括号【简单】',
            path: leetcode.valid_bracket
        },
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