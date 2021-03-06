/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-30 11:41:14
 * @LastEditTime: 2022-06-30 17:52:56
 * @Description: 订单相关接口
 */
import httpService from '@/utils/http/httpService'
import { OrderConfirmParams, OrderListParams, UpdateOrderAddressParams } from './type'

enum Api {
  Order = 'order',
  OrderAddress = 'order/updateAddress',
}

// 创建订单
export const createOrder = (params: OrderConfirmParams) => {
  return httpService.post(Api.Order, params)
}

// 获取订单列表
export const getOrderList = (params: OrderListParams) => {
  return httpService.get(Api.Order, params)
}

// 获取订单详情
export const getOrderDetail = (id: string) => {
  return httpService.get(`${Api.Order}/${id}`)
}

// 取消订单
export const cancelOrder = (id: string) => {
  return httpService.delete(`${Api.Order}/${id}`)
}

// 更新订单收货地址
export const updateOrderAddress = (params: UpdateOrderAddressParams) => {
  return httpService.put(Api.OrderAddress, params)
}
