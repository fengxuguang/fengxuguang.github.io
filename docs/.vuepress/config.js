const nav = require('./nav')
const plugins = require('./plugins')
const sidebar = require('./sidebar')

module.exports = {
    base: '/',
    title: '冯旭光个人技术博客',
    description: '阿飞个人博客记录',
    port: 9999,
    // 标签 icon
    // head: [
    //     ['link', {
    //         rel: 'icon',
    //         href: '/head.jpg'
    //     }]
    // ],
    theme: 'reco',
    themeConfig: {
        logo: '/head.jpg',  // 导航栏 Logo
        sidebar: 'auto',
        // 导航栏
        nav: nav,
        sidebar: sidebar,	// 侧边栏配置
        sidebarDepth: 4,	// 侧边栏显示 2 级
        subSidebar: 'auto',	// 自动生成文档侧边栏，文档右侧显示
        // 博客配置
        // blogConfig: {
        //     category: {
        //         location: 5,
        //         text: '分类'
        //     },
        //     tag: {
        //         location: 7,
        //         text: 'Tag'
        //     }
        // }
    },
    plugins: plugins
}