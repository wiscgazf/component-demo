module.exports = {
    lang: 'zh-CN',
    title: 'Zf-UI',
    base: '/zf-ui/',
    description: '这是我的第一个 VuePress 站点',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/wiscgazf/zf-ui',
        repoLabel: 'Zf-UI',
        navbar: [
            { text: '主页', link: '/' },
            { text: '组件', link: '/component/guide/introduction', activeMatch: '^/component/' },
            { text: '主题', link: '/theme/' }
        ],
        sidebar: {
            '/component/': [
                {
                    text: '开发指南',
                    collapsable: false,
                    children: [
                        {
                            text: 'introduction',
                            link: '/component/guide/introduction'
                        },
                        {
                            text: 'guide',
                            link: '/component/guide/guide'
                        }
                    ]
                },
                {
                    text: '基础组件',
                    collapsable: false,
                    children: [
                        {
                            text: 'button',
                            link: '/component/basic/button'
                        }
                    ]
                }
            ]
        }
    }
};
