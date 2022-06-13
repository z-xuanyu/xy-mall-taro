/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-25 10:48:47
 * @LastEditTime: 2022-06-13 16:57:34
 * @Description: Modify here please
 */

import Taro from '@tarojs/taro'

// 获取用户头像
export function getUserInfo() {
  return new Promise((resolve, reject) => {
    Taro.getUserProfile({
      desc: '用户信息',
      success: (info) => {
        resolve(info.userInfo)
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}

// 获取用户code
export function getUserCode() {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: (res) => {
        resolve(res.code)
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}
