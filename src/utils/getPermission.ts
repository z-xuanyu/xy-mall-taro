/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-25 10:48:47
 * @LastEditTime: 2022-06-29 11:30:51
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
        resolve(res.code as string)
      },
      fail: (error) => {
        reject(error)
      },
    })
  })
}

// 获取权限

export const getPermission = ({ code, name }) => {
  return new Promise((resolve, reject) => {
    Taro.getSetting({
      success: (res) => {
        if (res.authSetting[code] === false) {
          Taro.showModal({
            title: `获取${name}失败`,
            content: `获取${name}失败，请在【右上角】-小程序【设置】项中，将【${name}】开启。`,
            confirmText: '去设置',
            confirmColor: '#FA550F',
            cancelColor: '取消',
            success(res) {
              if (res.confirm) {
                Taro.openSetting({
                  success(settinRes) {
                    if (settinRes.authSetting[code] === true) {
                      resolve(settinRes)
                    } else {
                      console.warn('用户未打开权限', name, code)
                      reject()
                    }
                  },
                })
              } else {
                reject()
              }
            },
            fail() {
              reject()
            },
          })
        } else {
          resolve(res)
        }
      },
      fail() {
        reject()
      },
    })
  })
}
