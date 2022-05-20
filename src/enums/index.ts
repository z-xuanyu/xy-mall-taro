/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 10:35:41
 * @LastEditTime: 2022-05-20 10:40:44
 * @Description: Modify here please
 */

// 订单状态
export enum OrderStatus {
  ALL = 1, // 全部
  PENDING_PAYMENT = 2, // 待支付
  PENDING_DELIVERY = 3, // 待发货
  PENDING_RECEIPT = 4, // 待收货
  COMPLETE = 5, // 已完成/待评价
  COMPLETE_EVALUATE = 6, // 已完成/已评价
  PAYMENT_TIMEOUT = 7, // 已取消，支付超时
  CANCELED_NOT_PAYMENT = 8, // 已取消，未支付主动取消
  CANCELED_PAYMENT = 9, // 已取消，已支付主动取消
  CANCELED_REJECTION = 10, // 已取消，拒收
}
