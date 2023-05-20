module.exports = {
    base: '/',
    title: '阿飞个人技术博客',
    description: '个人博客记录',
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
        // 导航栏
        nav: [
            {
                text: 'java技术',
                link: '/modules/java/'
            },
            {
                text: 'springboot',
                link: '/modules/springboot/'
            },
            {
                text: '微服务',
                link: '/modules/springcloud/'
            }
        ],
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
    plugins: [
        ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
            theme: [ "whiteCat" ],
            clean: true,
            info: 'http://gitlab.bdachina.net/',
            messages: {
                welcome: '欢迎来到工具支撑平台',
                home: '心里的花，我想要带你回家。',
                theme: '好吧，希望你能喜欢我的其他小伙伴。',
                close: '你知道我喜欢吃什么吗？痴痴地望着你。'
            }
        }],
        ['vuepress-plugin-nuggets-style-copy', {
            copyText: '复制代码',
            tip: {
                content: '复制成功！'
            }
        }],
        ['@vuepress/nprogress'],
        ['cursor-effects', {
            size: 2,
            shape: 'star',
            zIndex: 9999999
        }],
        ['dynamic-title', {
            // showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
            showText: '客官欢迎回来~',
            // hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
            hideText: '客官不要走嘛~',
            recoverTime: 2000,
        }],
        ['@vuepress-reco/vuepress-plugin-bgm-player', {
            audios: [
              // 网络文件示例
              {
                name: '古巨基-Dear Leslie',
                artist: '古巨基',
                url: '/music/古巨基 - Dear Leslie.mp3',
                cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001HcQD23lrUGN_1.jpg?max_age=2592000'
              },
              {
                name: '张国荣-沉默是金',
                artist: '张国荣',
                url: 'https://www.ytmp3.cn/down/49633.mp3',
                cover: '/music/1.jpeg'
              },
              {
                name: '张国荣-共同度过',
                artist: '张国荣',
                url: 'https://www.ytmp3.cn/down/51106.mp3',
                cover: '/music/2.jpeg'
              },
              {
                name: '张国荣-春夏秋冬',
                artist: '张国荣',
                url: 'https://www.ytmp3.cn/down/51106.mp3',
                cover: '/music/3.jpeg'
              },
            ],
            position: { left: '10px', bottom: '10px', 'z-index': '999999'},
            autoShrink: false,
            shrinkMode: "float",
            floatPosition: "left",
            // autoplay: true,
        }],
        ['vuepress-plugin-comment', {
            choosen: 'gitalk', 
            options: {
                clientID: '8fdf27b1e15f5c6cf5f8',
                clientSecret: 'a23218ea32eec1547193caf58264d3d183326e4c',
                repo: 'fengxuguang.github.io',
                owner: 'fengxuguang',
                admin: ['fengxuguang'],
                distractionFreeMode: false 
            }
        }]
    ]
}