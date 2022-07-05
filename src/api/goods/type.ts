/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-07-05 09:54:39
 * @LastEditTime: 2022-07-05 10:04:00
 * @Description: 商品类型
 */

export interface GoodsCommentParams {
  // 订单id
  orderId: string
  // 商品id
  productId: string
  // 评分星级
  rate: number
  // 评论内容
  content: string
  // 图片
  images: string[]
  //物流星级
  logisticsRate: number
  //服务星级
  serviceRate: number
  // 是否匿名
  anonymous: boolean
}
