/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-27 14:13:48
 * @LastEditTime: 2022-07-06 14:42:03
 * @Description: 商品相关
 */

import httpService from '@/utils/http/httpService'
import { GoodsCommentParams } from './type'

enum Api {
  Goods = 'product',
  GoodsComment = 'productComment',
  GoodsCommentList = 'productComment/product',
}

// 获取商品列表
export const getGoods = () => httpService.get(Api.Goods)

/**
 * 获取商品详情
 *
 * @param {string} id 商品id
 */
export const getGoodsById = (id: string) => httpService.get(`${Api.Goods}/${id}`)

// 添加商品评价
export const addGoodsComment = (params: GoodsCommentParams) =>
  httpService.post(Api.GoodsComment, params)

/**
 * 获取商品评价列表
 *
 * @param {string} goodsId 商品id
 * @param {number} type 筛选类型 0全部 1带图 2好评 3中评 4差评
 */
export const getGoodsComments = (goodsId: string, type?: number) =>
  httpService.get(`${Api.GoodsCommentList}/${goodsId}`, { type })
