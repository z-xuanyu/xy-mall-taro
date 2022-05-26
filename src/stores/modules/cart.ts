/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 15:14:17
 * @LastEditTime: 2022-05-26 11:25:16
 * @Description: 购物车
 */

import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'user-cart',
  state: () => ({
    cartList: [],
  }),

  getters: {
    getCartList: (state) => state.cartList,
    getCartNum: (state) => state.cartList.length,
  },

  actions: {
    addCart(item) {
      this.cartList.push(item)
    },
    removeCart(item) {
      this.cartList.splice(this.cartList.indexOf(item), 1)
    },
    clearCart() {
      this.cartList = []
    },
  },
})
