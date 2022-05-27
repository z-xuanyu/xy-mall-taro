/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:34
 * @LastEditTime: 2022-05-27 10:17:29
 * @Description: 请求封装
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'taro-axios'
import Taro from '@tarojs/taro'
import { getCache } from '@/utils/storageCache'

const instance = axios.create({
  baseURL: 'https://xy-mall-web-api.zhouxuanyu.com/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCache('token')
  config.headers = {
    Authorization: `Bearer ${token}`,
    ...config.headers,
  }
  return config
})

const showToast = (title: string) => {
  Taro.showToast({
    title,
    icon: 'none',
    duration: 3000,
  })
}
const showMessage = (title: unknown) => {
  const message = JSON.stringify(title).replace(/"/g, '')
  if (message.indexOf('Network') > -1) {
    showToast('请求失败，请联系客服')
  } else if (message.indexOf('timeout') > -1) {
    showToast('请求超时')
  } else {
    showToast(message)
  }
}
interface ApiResult<T> {
  code: number
  message?: string
  result: T
}
// Taro.showToast 和loading 是单例 所以只有成功时候hideLoading 其他情况showToast
export default function request<T>(options: AxiosRequestConfig = {}) {
  Taro.showLoading({
    title: '加载中...',
  })
  Taro.showNavigationBarLoading()
  return new Promise<T>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse<ApiResult<T>>) => {
        if (response?.status === 200 && response?.data?.code === 0) {
          resolve(response.data.result)
          Taro.hideLoading()
        } else {
          throw response
        }
      })
      .catch((result) => {
        if (result?.status === 200 && result?.data?.code === -1) {
          //重新登陆 result?.data?.code === -1 ||
        } else {
          // 其他情况 code 非 0 情况 有 message 就显示
          showMessage(result?.data?.message ?? result?.message)
        }
        reject(result)
      })
      .finally(() => {
        Taro.hideNavigationBarLoading()
      })
  })
}
