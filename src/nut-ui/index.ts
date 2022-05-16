/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 18:12:36
 * @LastEditTime: 2022-05-16 18:17:07
 * @Description: Modify here please
 */
import { App } from 'vue'
import {
  Button,
  Icon,
  Tag,
  Price,
  Swiper,
  SwiperItem,
  Avatar,
  Rate,
  Sku,
  Popup,
  InputNumber,
} from '@nutui/nutui-taro'
export function setupNutUI(app: App) {
  app
    .use(Icon)
    .use(Button)
    .use(Tag)
    .use(Price)
    .use(Swiper)
    .use(SwiperItem)
    .use(Avatar)
    .use(Rate)
    .use(Sku)
    .use(Popup)
    .use(InputNumber)
}
