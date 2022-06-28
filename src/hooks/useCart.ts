/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-26 15:01:18
 * @LastEditTime: 2022-06-28 16:01:18
 * @Description: 购物hook
 */

import { ref, computed, unref, nextTick, watch } from 'vue'
import { getCart } from '@/api/cart'

const cartList = ref<any>([])
// 选中的
const selectGoodsGroup = ref<Array<string>>([])

const isSelectAll = ref<boolean>(false)

// 请求购物车数据
export async function fetchCart() {
  const res = await getCart()
  cartList.value = res
}

export function useCart() {
  // 购物车就和
  const totalPrice = computed(() => {
    const fliterGoods = cartList.value.filter((item: any) =>
      unref(selectGoodsGroup).includes(item._id)
    )
    return fliterGoods.reduce((total, item) => {
      return total + item.price * item.num
    }, 0)
  })

  watch(
    selectGoodsGroup,
    () => {
      nextTick(() => {
        isSelectAll.value = cartList.value.every((item: any) =>
          unref(selectGoodsGroup).includes(item._id)
        )
      })
    },
    {
      deep: true,
    }
  )
  // 增加购物车数量
  const addCartNum = (id: string) => {
    console.log(id)
  }

  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }

  const shopCartNum = computed(() => cartList.value.length)

  return {
    cartList,
    selectGoodsGroup,
    totalPrice,
    isSelectAll,
    shopCartNum,
    addCartNum,
    clearCart,
  }
}
