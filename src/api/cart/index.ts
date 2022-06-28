/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-28 10:28:01
 * @LastEditTime: 2022-06-28 10:33:17
 * @Description: 购物车相关接口
 */
import httpService from '@/utils/http/httpService'
import { AddCartParams } from './type'

enum Api {
  Cart = 'userCart',
}

// 购物车列表
export const getCart = () => httpService.get(Api.Cart)

// 添加购物车
export const addCart = (data: AddCartParams) => httpService.post(Api.Cart, data)

// 删除购物车
export const deleteCart = (id: string) => httpService.delete(`${Api.Cart}/${id}`)
