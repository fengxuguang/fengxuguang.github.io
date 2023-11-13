const springboot = require('./pathDir/springboot')
const java = require('./pathDir/java')
const tools = require('./pathDir/tools')

module.exports = [
     {
         text: 'java技术',
         link: java.root,
         items: [
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
         link: '/modules/springcloud/'
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