/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 15:14:10
 * @LastEditTime: 2022-05-26 12:06:28
 * @Description: 用户信息
 */
import { defineStore } from 'pinia'
import { getUserInfo, getUserCode } from '@/utils/getPermission'
import { setCache, getCache } from '@/utils/storageCache'

interface UserInfoType {
  // 用户昵称
  nickName: string
  // 用户头像
  avatarUrl: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: (getCache('userInfo') || {}) as UserInfoType,
    token: getCache('token') || null,
  }),

  getters: {
    isLogin: (state) => !!state.token,
    getUserInfo: (state) => state.userInfo,
  },

  actions: {
    setUserInfo(userInfo: UserInfoType) {
      this.userInfo = userInfo
    },
    setToken(token: string) {
      this.token = token
    },
    // 小程序登录
    async handleMiniLogin() {
      const info = await getUserInfo()
      const code = await getUserCode()
      this.setUserInfo(info)
      this.setToken(code)
      setCache('userInfo', info)
      setCache('token', code)
    },
  },
})
