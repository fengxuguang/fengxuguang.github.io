/**
 * 侧边栏配置
 */

const docker = require('./pathDir/docker')
const tools = require('./pathDir/tools')
const springboot = require('./pathDir/springboot')

module.exports = {
    "/modules/tools": [
        {
            title: 'IDEA快捷键',
            path: tools.idea
        }
    ],
    "/modules/springboot": [
        {
            title: 'SpringBootApplication注解',
            path: springboot.SpringBootApplication
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
    ]
}