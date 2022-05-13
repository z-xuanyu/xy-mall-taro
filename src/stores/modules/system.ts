/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:34
 * @LastEditTime: 2022-05-13 10:02:11
 * @Description: Modify here please
 */
import { defineStore } from 'pinia'

export interface Options {
  path: string
  scene: number
  query: object
  shareTicket: string
  referrerInfo: object
}

export const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'system',
  /** 状态 */
  state: () => ({
    options: {} as Options,
    info: {} as Taro.getSystemInfoSync.Result,
  }),
  actions: {
    init(options: Options) {
      this.options = options
    },
    setInfo(info: Taro.getSystemInfoSync.Result) {
      this.info = info
    },
  },
})
