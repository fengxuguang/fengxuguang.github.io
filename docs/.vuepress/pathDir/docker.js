/**
 * docker 目录配置
 */

const baseDir = require('./root')

const root = baseDir + 'docker/'
const Command = root + 'Command';

module.exports={
    root,
    Command,
}