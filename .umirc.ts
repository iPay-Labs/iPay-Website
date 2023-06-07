export default {
  npmClient: "yarn",
  fastRefresh: true,
  favicons: ['/icon.svg'],
  title:'Base 百思·得其解',
  dva: {},
  plugins: ["@umijs/plugins/dist/dva",
    "@umijs/plugins/dist/locale",
    "@umijs/plugins/dist/qiankun",
    "@umijs/plugins/dist/model",
  ],
  // 启用本地化配置
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  theme: {
    'primary-color':'#422DDD',
  },
  model: {},
  routes: [
    { path: '/', component: '@/pages/Message' },
  ],
  // proxy: {
  //   '/api': {
  //     'target': 'https://movie.jdd001.top',
  //     'changeOrigin': true,
  //     // 'pathRewrite': { '^/api' : '' },
  //   },
  // },
};
