/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:33
 * @LastEditTime: 2022-05-20 12:10:24
 * @Description: 主配置文件
 */
import { TabBarItem } from '@tarojs/taro'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/cart/index',
    'pages/category/index',
    'pages/user/index',
    'pages/user/person-info/index',
    'pages/user/name-edit/index',
  ],
  subPackages: [
    {
      root: 'pages/goods',
      pages: ['detail/index', 'comment/index', 'search/index', 'list/index'],
    },
    {
      root: 'pages/order',
      pages: [
        'detail/index',
        'list/index',
        'order-confirm/index',
        'receipt/index',
        'invoice-detail/index',
        'pay-success/index',
        'comment/index',
      ],
    },
    {
      root: 'pages/user/menus',
      pages: [
        'address/index',
        'address/edit/index',
        'history/index',
        'collection/index',
        'coupon/index',
        'integral/index',
        'help/index',
      ],
    },
  ],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#C0C4CC',
    selectedColor: '#ff6a6c',
    backgroundColor: '#fff',
    borderStyle: 'white',
    custom: false,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/tabbar/home.png',
        selectedIconPath: './assets/images/tabbar/home_active.png',
      },
      {
        pagePath: 'pages/category/index',
        text: '分类',
        iconPath: './assets/images/tabbar/category.png',
        selectedIconPath: './assets/images/tabbar/category_active.png',
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: './assets/images/tabbar/cart.png',
        selectedIconPath: './assets/images/tabbar/cart_active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: './assets/images/tabbar/user.png',
        selectedIconPath: './assets/images/tabbar/user_active.png',
      },
    ] as TabBarItem[],
  },
})
