/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-26 15:01:18
 * @LastEditTime: 2022-05-26 16:56:24
 * @Description: 购物hook
 */

import { onMounted, ref, computed, unref, nextTick, watch } from 'vue'

const cartList = ref<any>([])
// 选中的
const selectGoodsGroup = ref<Array<string>>([])

const isSelectAll = ref<boolean>(false)

export function useCart() {
  onMounted(() => {
    cartList.value = [
      {
        goods_id: '110',
        imgUrl:
          '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '只-500g',
        num: 1,
      },
      {
        goods_id: '111',
        imgUrl:
          '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '只-500g',
        num: 1,
      },
      {
        goods_id: '112',
        imgUrl:
          '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '只-500g',
        num: 1,
      },
    ]
  })
  // 购物车就和
  const totalPrice = computed(() => {
    const fliterGoods = cartList.value.filter((item: any) =>
      unref(selectGoodsGroup).includes(item.goods_id)
    )
    return fliterGoods.reduce((total, item) => {
      return total + item.price * item.num
    }, 0)
  })

  // 删除购物车
  const deleteCart = (goods_id: string) => {
    cartList.value = cartList.value.filter((item: any) => item.goods_id !== goods_id)
  }
  watch(
    selectGoodsGroup,
    () => {
      nextTick(() => {
        isSelectAll.value = cartList.value.every((item: any) =>
          unref(selectGoodsGroup).includes(item.goods_id)
        )
        console.log(isSelectAll.value, 555)
      })
    },
    {
      deep: true,
    }
  )
  // 增加购物车数量
  const addCartNum = (goods_id: string) => {
    const index = cartList.value.findIndex((item: any) => item.goods_id === goods_id)
    cartList.value[index].num++
  }

  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }

  return {
    cartList,
    selectGoodsGroup,
    totalPrice,
    isSelectAll,
    deleteCart,
    addCartNum,
    clearCart,
  }
}
