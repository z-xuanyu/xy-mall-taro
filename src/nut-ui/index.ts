/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 18:12:36
 * @LastEditTime: 2022-05-17 14:55:20
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
  Input,
  AddressList,
  Address,
  Elevator,
  Swipe,
  Form,
  FormItem,
  Cell,
  CellGroup,
  TextArea,
  Switch,
  OverLay,
  Dialog,
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
    .use(Input)
    .use(AddressList)
    .use(Swipe)
    .use(Form)
    .use(FormItem)
    .use(Cell)
    .use(CellGroup)
    .use(TextArea)
    .use(Switch)
    .use(Address)
    .use(Elevator)
    .use(OverLay)
    .use(Dialog)
}
