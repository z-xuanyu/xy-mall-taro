/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-30 11:34:49
 * @LastEditTime: 2022-06-30 11:40:51
 * @Description: Modify here please
 */

// 地址信息
export interface Address {
  _id: string
  name: string
  phone: string
  address: string
  detail: string
  isDefault: boolean
}

// 商品信息
interface Product {
  // 商品id
  productId: string
  // 商品数量
  num: number
  // 商品价格
  price: number
  // 商品规格信息
  skuName: string
}
// 订单提交参数
export interface OrderConfirmParams {
  // 默认为0，如果是从购物车过来的为空，立即购买为1
  way: number
  // 商品集合
  products: Array<Product>
  // 购物车id
  cartIds: Array<string>
  // 收货地址id
  addressId: string
  // 支付方式
  paymentType: number
  // 订单来源
  source: string
  // 总计
  totalPrice: number
  // 实际支付
  payment: number
  // 优惠价id
  couponId?: string
  // 订单备注
  remark?: string
}
