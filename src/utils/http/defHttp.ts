/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-13 17:14:37
 * @LastEditTime: 2022-06-13 17:24:35
 * @Description: Modify here please
 */

import { request as _request, addInterceptor, showToast, uploadFile } from '@tarojs/taro'
import { getCache } from '../storageCache'
import ApiConfig from './api'
const BASE_URL_API = ApiConfig.api_url

type TOptions = Omit<Taro.request.Option<any>, 'url'>

export class HttpService {
  public options: any
  constructor(options) {
    this.options = options
    const interceptor = (chain) => {
      const requestParams = chain.requestParams
      const { url } = requestParams
      const isNeedSetToken = !(url && url.includes('login'))
      const token = getCache('token')
      if (isNeedSetToken && token) {
        requestParams.header = {
          ...requestParams.header,
          Authorization: `Bearer ${token}`,
        }
      }

      return chain.proceed(requestParams).then((res) => {
        return res
      })
    }
    addInterceptor(interceptor)
  }

  request(url: string, options: Taro.uploadFile.Option | TOptions, isFile?: boolean) {
    const newOptions = { ...options }
    const token = getCache('token')
    if (isFile) {
      newOptions.header = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        ...newOptions.header,
      }
      return uploadFile({
        ...(newOptions as Taro.uploadFile.Option),
        url: ApiConfig.file_url + url,
      })
        .then((res: any) => {
          // 上传成功
          return Promise.resolve(res)
        })
        .catch((error) => {
          const errMsg = error.msg || error.errMsg || '异常'
          showToast({
            title: errMsg.includes('request:fail') ? '网络异常' : errMsg,
            icon: 'none',
          })
          return Promise.reject(error)
        })
    }
    return _request({
      url: BASE_URL_API + url,
      ...options,
    })
      .then((res) => {
        return Promise.resolve(res.data)
      })
      .catch((error) => {
        const errMsg = error.msg || error.errMsg || '异常'
        showToast({
          title: errMsg.includes('request:fail') ? '网络异常' : errMsg,
          icon: 'none',
        })
        return Promise.reject(error)
      })
  }

  get(url: string, data?: any) {
    return this.request(url, { method: 'GET', data })
  }

  post(url: string, data: any, isFile?: boolean) {
    if (isFile) {
      return this.request(url, { method: 'POST', ...data }, isFile)
    }
    return this.request(url, { method: 'POST', data }, isFile)
  }
  put(url: string, data: any) {
    return this.request(url, { method: 'PUT', data })
  }
  delete(url: string, data: any) {
    return this.request(url, { method: 'DELETE', data })
  }
}
