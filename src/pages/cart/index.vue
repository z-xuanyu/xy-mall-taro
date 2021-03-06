<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 15:08:57
 * @LastEditTime: 2022-06-30 14:36:35
 * @Description: 购物车
-->
<script lang="ts">
export default {
  name: 'CartPage',
}
</script>
<script setup lang="ts">
import { Card, Navbar } from '@nutui/nutui-taro'
import { navigateTo, useDidShow, showToast } from '@tarojs/taro'
import { ref } from 'vue'
import { useCart, fetchCart } from '@/hooks/useCart'
import { isWeb } from '@/utils/env'
import { deleteCart } from '@/api/cart'
import { setCache } from '@/utils/storageCache'

const selectGoodsGroupRef = ref<HTMLElement | null>(null)
const { cartList, selectGoodsGroup, totalPrice, isSelectAll } = useCart()

const isEdit = ref(false)
const visibleDel = ref(false)
// 跳转到结算页面
function handleToSettle() {
  if (selectGoodsGroup.value.length === 0) {
    return showToast({
      title: '请选择商品',
      icon: 'none',
    })
  }
  const selectPayGoods = cartList.value.filter((item: any) =>
    selectGoodsGroup.value.includes(item._id)
  )
  setCache('selectPayGoods', selectPayGoods)
  navigateTo({
    url: '/pages/order/order-confirm/index',
  })
}

useDidShow(() => {
  fetchCart()
})
// 全选改变
function changeAllSelect(value: boolean) {
  return (selectGoodsGroupRef.value as any).toggleAll(value)
}

// 删除购物车商品
async function onDelOk() {
  try {
    for (const item of selectGoodsGroup.value) {
      await deleteCart(item)
    }
    showToast({
      title: '删除成功',
      icon: 'success',
      duration: 1000,
    })
    fetchCart()
  } catch (error) {
    showToast({
      title: '删除失败',
      icon: 'none',
      duration: 1000,
    })
  }
}

// 跳转全部商品列表
function jumpAllGoods() {
  navigateTo({
    url: '/pages/goods/list/index',
  })
}
</script>

<template>
  <view class="cart-page">
    <view class="sticky-top">
      <Navbar v-if="isWeb" :left-show="false" title="我的购物车"></Navbar>
    </view>
    <!-- 提示 -->
    <view class="flex justify-between items-center text-xxs text-grey px-5 my-3">
      <view class="flex items-center">
        <nut-icon size="14" name="success"></nut-icon>
        <text class="ml-1">100%正品保证</text>
      </view>
      <view class="flex items-center">
        <nut-icon size="14" name="success"></nut-icon>
        <text class="ml-1">所有商品精选细选</text>
      </view>
      <view class="flex items-center">
        <nut-icon size="14" name="success"></nut-icon>
        <text class="ml-1">售后无忧</text>
      </view>
    </view>
    <!-- 编辑购物车 -->
    <view class="bg-white flex justify-between items-center py-2 px-5">
      <view class="text-xs">
        <text>购物车数量</text>
        <text class="ml-1 text-primary">{{ cartList.length }}</text>
      </view>
      <nut-tag v-if="cartList.length" type="primary" @click="isEdit = !isEdit" plain>{{
        isEdit ? '取消' : '编辑'
      }}</nut-tag>
    </view>

    <!-- 购物车列表 -->
    <view class="cart-list">
      <nut-checkboxgroup v-model="selectGoodsGroup" ref="selectGoodsGroupRef">
        <view
          class="cart-list__item bg-white flex rounded-xxs items-center my-3 py-2"
          v-for="item in cartList"
          :key="item._id"
        >
          <nut-checkbox :label="item._id"></nut-checkbox>
          <Card
            :img-url="item.productPic"
            :title="item.productName"
            :price="String(item.price)"
            shopDesc="热销"
            delivery="新品"
            :shopName="item.skuName"
          >
            <template #footer>
              <nut-inputnumber v-model="item.num" />
            </template>
          </Card>
        </view>
      </nut-checkboxgroup>
    </view>
    <!-- 购物车空 -->
    <view class="cart-empty" v-if="cartList.length === 0">
      <view class="text-center">
        <image src="../../assets/images/empty/cart.png"></image>
        <view class="text-grey text-sm mb-5">购物车空空如也</view>
        <view class="px-10">
          <nut-button type="primary" @click="jumpAllGoods" block>去逛逛,添加点什么吧</nut-button>
        </view>
      </view>
    </view>
    <!-- 底部cardbar -->
    <view
      class="cart-bar bg-white flex justify-between items-center px-2 py-1"
      v-if="cartList.length"
    >
      <view class="flex items-center">
        <nut-checkbox v-model="isSelectAll" @change="changeAllSelect" label="复选框"
          >全选</nut-checkbox
        >
        <view class="ml-2" v-if="!isEdit">
          <view>
            <text class="text-base">总计</text>
            <nut-price :price="totalPrice" size="normal" :thousands="true" />
            <text class="text-xs text-grey">(不包含运费)</text>
          </view>
          <view class="text-xs text-grey"> 已优惠￥100 </view>
        </view>
      </view>
      <nut-button v-if="!isEdit" type="primary" @click="handleToSettle"
        >去结算({{ selectGoodsGroup.length }})</nut-button
      >
      <nut-button v-if="isEdit" size="small" @click="visibleDel = true" type="primary"
        >删除</nut-button
      >
    </view>
    <!-- 删除提示 -->
    <nut-dialog content="确认要删除选中商品吗？" v-model:visible="visibleDel" @ok="onDelOk" />
  </view>
</template>

<style lang="scss">
.cart-page {
  .nut-navbar {
    margin-bottom: 0;
    box-shadow: none;
    border-bottom: 1px solid #f0f0f0;
  }
  .cart-list {
    padding: 0 10px;
    padding-bottom: 60px;
  }
  .nut-checkbox {
    padding: 0 8px;
    &__label {
      margin: 0;
    }
  }
  .cart-bar {
    position: fixed;
    height: 50px;
    bottom: 0;
    /*  #ifdef h5 */
    bottom: 50px;
    /*  #endif  */
    left: 0;
    right: 0;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .nut-checkbox__label {
      margin-left: 5px;
    }
  }
}
.nut-card__right__title {
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}
.nut-card__left > .h5-img {
  border-radius: 5px;
}
</style>
