export default defineAppConfig({
  pages: [
    'pages/main/index',
    'pages/index/index'
  ],
  tabBar: {
    list: [
      { pagePath: 'pages/main/index', text: '主页' },
      { pagePath: 'pages/index/index', text: '首页' },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
