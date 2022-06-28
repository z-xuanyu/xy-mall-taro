/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-27 14:13:48
 * @LastEditTime: 2022-06-27 14:50:33
 * @Description: Modify here please
 */

import httpService from '@/utils/http/httpService'

enum Api {
  Goods = 'product',
}

// 获取商品列表
export const getGoods = () => httpService.get(Api.Goods)

// 获取商品详情
export const getGoodsById = (id: string) => httpService.get(`${Api.Goods}/${id}`)