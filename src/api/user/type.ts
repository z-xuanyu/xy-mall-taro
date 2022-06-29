/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-29 10:06:36
 * @LastEditTime: 2022-06-29 11:09:08
 * @Description: Modify here please
 */

export interface AddUserAddressParams {
  // 收货人姓名
  name: string
  // 收货人手机号
  phone: string
  // 收货人地址
  address: string
  // 详细地址
  detail: string
  // 是否是默认地址
  isDefault: boolean
}
