/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 12:11:06
 * @LastEditTime: 2022-05-16 18:16:20
 * @Description: 程序入口文件
 */
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { useSystem } from '@/stores/modules/system'
import { setupNutUI } from '@/nut-ui'
import Taro from '@tarojs/taro'
import './app.scss'

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted() {
    console.log('启动')
  },

  // 对应 onLaunch
  onLaunch(options) {
    // 将启动参数放进到全局去
    const system = useSystem()
    system.init(options)
    system.setInfo(Taro.getSystemInfoSync())
  },

  // 对应 onShow
  onShow() {
    console.log('show')
  },

  // 对应 onHide
  onHide() {
    console.log('hide')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
// nut ui
setupNutUI(App)
// store
setupStore(App)
export default App
