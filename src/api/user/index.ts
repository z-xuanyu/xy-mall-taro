/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-29 10:06:30
 * @LastEditTime: 2022-07-01 11:46:49
 * @Description: 用户相关借口
 */
import httpService from '@/utils/http/httpService'
import { AddUserAddressParams } from './type'

enum Api {
  User = 'user',
  Address = 'user/address',
  ViewsHistory = 'user/viewsHistory',
}

// 获取用户地址列表
export const getUserAddress = () => httpService.get(Api.Address)

// 查找用户地址
export const findUserAddress = (id: string) => httpService.get(`${Api.Address}/${id}`)

// 添加用户地址
export const addUserAddress = (data: AddUserAddressParams) => httpService.post(Api.Address, data)

// 更新用户地址
export const updateUserAddress = (id: string, data: AddUserAddressParams) =>
  httpService.put(`${Api.Address}/${id}`, data)

// 删除用户地址
export const deleteUserAddress = (id: string) => httpService.delete(`${Api.Address}/${id}`)

// 获取用户浏览记录
export const getUserViewsHistory = () => httpService.get(Api.ViewsHistory)
