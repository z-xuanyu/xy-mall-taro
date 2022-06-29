/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-13 16:46:50
 * @LastEditTime: 2022-06-29 14:56:49
 * @Description: Modify here please
 */
import {
  request as _request,
  addInterceptor,
  showToast,
  uploadFile,
  showLoading,
  hideLoading,
  navigateBack,
  showModal,
} from '@tarojs/taro'
import { getCache, removeCache } from '../storageCache'
import ApiConfig from './api'
const BASE_URL_API = ApiConfig.api_url

enum ECode {
  UN_AUTHORIZED = 401, // 无权访问
  OPERATION_SUCCESS = 10000, // "操作成功"
  GAIN_SUCCESS = 0, // "成功获取数据，数据非空"
  GAIN_SUCCESS_EMPTY = 10002, // "操作成功,数据为空"
  OPERATION_FAIL = 20000, // "操作失败"
  PARM_ERRO = 20001, // "参数错误"
  EXCEPTION_FAIL = 20002, // "异常报错"
  SOCKET_CON_FAIL = 20003, // "Sockt 连接失败"
  UNAUTH_ERRO = 20004, // "未登录"
  FORBB_ERRO = 20005, // "无权限"
  NOT_ACCEPTABLE = 20006, // "未签名"
  DISABLE_ACCOUNT = 20007, // "账号被冻结"
  USER_PASSWORD_ERRO = 20008, // "账号密码错误"
}

export interface IApiData {
  result: any
  code: ECode
  message: string
}
type TOptions = Omit<Taro.request.Option<any>, 'url'>
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
function request(url: string, options: Taro.uploadFile.Option | TOptions, isFile?: boolean) {
  // 加载loading
  showLoading({
    title: '加载中',
  })

  const newOptions = { ...options }
  const token = getCache('token')
  // 是否文件上传
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
  // 请求
  return _request({
    url: BASE_URL_API + url,
    ...options,
  })
    .then((res) => {
      const { code, result, message, statusCode } = res.data
      // 关闭loading
      hideLoading()

      // 成功
      if (code === ECode.GAIN_SUCCESS) {
        return Promise.resolve(result)
      }
      // 未登录
      if (statusCode === ECode.UN_AUTHORIZED) {
        console.log('请重新登陆')
        // 清除token
        removeCache('token')
        // 清除用户信息
        removeCache('userInfo')

        showModal({
          title: '提示',
          content: '登录已过期，请重新登录',
          showCancel: false,
          confirmText: '确定',
          success: (res) => {
            if (res.confirm) {
              navigateBack()
            }
          },
        })
      }
      return Promise.resolve(message)
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

const httpService = {
  get(url: string, data?: any) {
    return request(url, { method: 'GET', data })
  },
  post(url: string, data: any, isFile?: boolean) {
    if (isFile) {
      return request(url, { method: 'POST', ...data }, isFile)
    }
    return request(url, { method: 'POST', data }, isFile)
  },
  put(url: string, data: any) {
    return request(url, { method: 'PUT', data })
  },
  delete(url: string, data?: any) {
    return request(url, { method: 'DELETE', data })
  },
}

export default httpService
