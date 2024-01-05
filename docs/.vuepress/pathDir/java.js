/**
 * java 目录配置
 */

const baseDir = require('./root')

const root = baseDir + "java/"
const lombok = root + "lombok/"
const jdk17_feature = root + "jdk17-feature"
const dynamic_druid = root + "dynamic-druid"

module.exports = {
    root,
    lombok,
    jdk17_feature,
    dynamic_druid,
}