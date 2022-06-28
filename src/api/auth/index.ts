/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-28 10:38:16
 * @LastEditTime: 2022-06-28 10:41:53
 * @Description: 登陆授权接口
 */
import httpService from '@/utils/http/httpService'
import { MinLoginParams } from './type'

export enum Api {
  MinLogin = 'auth/miniProgramLogin',
}

// 小程序登陆
export const minLogin = (data: MinLoginParams) => httpService.post(Api.MinLogin, data)
