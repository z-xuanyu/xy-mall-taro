/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 18:12:36
 * @LastEditTime: 2022-05-18 11:43:26
 * @Description: Modify here please
 */
import { App } from 'vue'
import {
  Button,
  Icon,
  Tag,
  Price,
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
  Cell,
  CellGroup,
  TextArea,
  Switch,
  OverLay,
  Dialog,
  CheckboxGroup,
  Checkbox,
} from '@nutui/nutui-taro'
export function setupNutUI(app: App) {
  app
    .use(Icon)
    .use(Button)
    .use(Tag)
    .use(Price)
    .use(Avatar)
    .use(Rate)
    .use(Sku)
    .use(Popup)
    .use(InputNumber)
    .use(Input)
    .use(AddressList)
    .use(Swipe)
    .use(Cell)
    .use(CellGroup)
    .use(TextArea)
    .use(Switch)
    .use(Address)
    .use(Elevator)
    .use(OverLay)
    .use(Dialog)
    .use(CheckboxGroup)
    .use(Checkbox)
}
