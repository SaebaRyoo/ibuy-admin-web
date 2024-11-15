// https://umijs.org/config/
import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  request: {},
  initialState: {},
  model: {},
  dva: {}, // 启用dva
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  access: {},
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
    primaryColor: 'e2285f',
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV as string],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: true,
  presets: ['umi-presets-pro'],
});
