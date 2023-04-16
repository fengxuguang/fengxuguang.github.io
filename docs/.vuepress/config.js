module.exports = {
    base: '/',
    title: '冯旭光的技术博客',
    description: '个人博客记录',
    port: 9999,
    theme: 'reco',
    themeConfig: {

    },
    plugins: [
        ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
            theme: [ "blackCat" ],
            clean: false,
            info: 'http://gitlab.bdachina.net/',
            messages: {
                welcome: '欢迎来到工具支撑平台',
                home: '心里的花，我想要带你回家。',
                theme: '好吧，希望你能喜欢我的其他小伙伴。',
                close: '你知道我喜欢吃什么吗？痴痴地望着你。'
            }
        }]
    ]
}