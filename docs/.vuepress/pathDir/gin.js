/**
 * Gin 目录配置
 */
 const baseDir = require('./root')

 const root = baseDir + 'gin/'
 const helloworld = root + 'helloworld'
 const response = root + 'response'

 module.exports = {
    root,
    helloworld,
    response,
 }