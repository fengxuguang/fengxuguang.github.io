/**
 * Gin 目录配置
 */
 const baseDir = require('./root')

 const root = baseDir + 'gin/'
 const helloworld = root + 'helloworld'
 const response = root + 'response'
 const request = root + 'request'
 const bindParam = root + 'bind-param'

 module.exports = {
    root,
    helloworld,
    response,
    request,
    bindParam,
 }