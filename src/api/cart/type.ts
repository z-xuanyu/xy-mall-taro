/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-28 10:31:14
 * @LastEditTime: 2022-06-28 10:32:17
 * @Description: Modify here please
 */

export interface AddCartParams {
  // 商品ID
  productId: string

  // 商品名称
  productName: string

  // 商品封面图
  productPic: string

  // 商品数量
  num: number

  // 商品选中sku信息
  skuName: string

  // 商品价格
  price: number
}
