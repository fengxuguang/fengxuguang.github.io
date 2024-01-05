/**
 * 界面顶部栏配置
 */

const springboot = require('./pathDir/springboot')
const java = require('./pathDir/java')
const tools = require('./pathDir/tools')
const docker = require('./pathDir/docker')
const springcloud = require('./pathDir/springcloud')
const go = require('./pathDir/go')
const gin = require('./pathDir/gin')
const leetcode = require('./pathDir/leetcode')

module.exports = [
     {
         text: 'java技术',
         link: java.root,
         items: [
            {
                text: 'Java',
                link: java.root
            },
             {
                 text: 'Lombok',
                 link: java.lombok
             }
         ]
     },
     {
         text: 'springboot',
         link: springboot.root
     },
     {
         text: '微服务',
         link: springcloud.root
     },
     {
        text: 'Go',
        link: go.root
     },
     {
        text: 'Gin框架',
        link: gin.root
     },
     {
        text: 'Docker',
        link: docker.root
     },
     {
        text: '算法',
        link: leetcode.root
     },
     {
         text: '工具',
         link: tools.root,
         items: [
             {
                 text: 'IDEA快捷键',
                 link: tools.idea
             }
         ]
     }
 ]