/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-26 11:50:56
 * @LastEditTime: 2022-05-26 11:58:04
 * @Description: Modify here please
 */

import Taro from '@tarojs/taro'

export const getCache = (key: string) => Taro.getStorageSync(key)

export const setCache = (key: string, value: any) => Taro.setStorageSync(key, value)

export const removeCache = (key: string) => Taro.removeStorageSync(key)

export const clearCache = () => Taro.clearStorageSync()
