module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo1.png',
    lastUpdated: 'Last Updated', // string | boolean
    // 导航栏
    nav: [
      { text: 'Home', link: '/' , target:'_self'},
      { text: 'Guide', link: '/guide/', target:'_blank' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/',items:[{text: '简体', link: '/'},{text: '繁体', link: '/'}]},
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    // 侧边栏
    sidebar: [
      '/',
      '/page-a',
      ['https://baidu.com', 'Explicit link text']
    ]
  }
}