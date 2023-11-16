/**
 * springboot 目录路径
 */

const baseDir = require('./root')

// 定义文件路径
const root = baseDir + "springboot/"
const SpringBootApplication = root + "SpringBootApplication"
const SpringBootConfiguration = root + "SpringBootConfiguration"

// 暴露出变量
module.exports = {
    root: SpringBootApplication,
    SpringBootApplication,
    SpringBootConfiguration
}