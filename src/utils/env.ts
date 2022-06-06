/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-06 11:04:18
 * @LastEditTime: 2022-06-06 11:19:10
 * @Description: 环境判断
 */

import Taro from '@tarojs/taro'

// h5
export const isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB
// 小程序
export const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
// 百度小程序
export const isSwan = Taro.getEnv() === Taro.ENV_TYPE.SWAN
// 支付宝小程序
export const isAlipay = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
// 字节跳动小程序
export const isTt = Taro.getEnv() === Taro.ENV_TYPE.TT
// ReactNative 环境
export const isRN = Taro.getEnv() === Taro.ENV_TYPE.RN
// qq小程序
export const isQQ = Taro.getEnv() === Taro.ENV_TYPE.QQ
// 京东小程序
export const isJD = Taro.getEnv() === Taro.ENV_TYPE.JD
