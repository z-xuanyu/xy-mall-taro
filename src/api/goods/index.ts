/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-27 14:13:48
 * @LastEditTime: 2022-07-05 10:05:36
 * @Description: 商品相关
 */

import httpService from '@/utils/http/httpService'
import { GoodsCommentParams } from './type'

enum Api {
  Goods = 'product',
  GoodsComment = 'productComment',
}

// 获取商品列表
export const getGoods = () => httpService.get(Api.Goods)

// 获取商品详情
export const getGoodsById = (id: string) => httpService.get(`${Api.Goods}/${id}`)

// 添加商品评价
export const addGoodsComment = (params: GoodsCommentParams) =>
  httpService.post(Api.GoodsComment, params)
