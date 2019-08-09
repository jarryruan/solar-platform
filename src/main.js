import Vue from 'vue'
import App from './App.vue'
import routers from './routers'

Vue.config.productionTip = false

/* 完整引入 ElementUI 与 Omiu风格主题 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import store from './store/'


/* 引入其他CSS文件 */
import './styles'


/**
 * 载入 Echarts 主题
 */
// import echarts from 'echarts';
// const echarts_theme = require('@/echarts/theme/walden.json');
// echarts.registerTheme('walden', echarts_theme);




/**
 *  自动引入 components 目录下的所有组件 
 *  详情请见 https://cn.vuejs.org/v2/guide/components-registration.html 的“基础组件的自动化全局注册”部分
 */
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})




new Vue({
  store,
  router: routers,
  render: h => h(App)
}).$mount('#app')
