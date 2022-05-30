<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 15:08:57
 * @LastEditTime: 2022-05-30 16:36:04
 * @Description: 购物车
-->
<script setup lang="ts">
import { Card, Navbar } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import { defineComponent, computed, ref } from 'vue'
import { useCart } from '@/hooks/useCart'
defineComponent({
  name: 'cartPage',
})

const selectGoodsGroupRef = ref<HTMLElement | null>(null)

// 是否为web环境
const isWeb = computed(() => Taro.getEnv() === Taro.ENV_TYPE.WEB)
const { cartList, selectGoodsGroup, totalPrice, isSelectAll } = useCart()

// 跳转到结算页面
function handleToSettle() {
  Taro.navigateTo({
    url: '/pages/order/order-confirm/index',
  })
}

// 全选改变
function changeAllSelect(value: boolean) {
  return (selectGoodsGroupRef.value as any).toggleAll(value)
}
</script>

<template>
  <view class="cart-page">
    <!-- 顶部导航 -->
    <block v-if="isWeb">
      <Navbar :left-show="false" title="购物车" titIcon="cart2" desc="编辑">
        <template #right>
          <nut-icon class="right" name="more-x"></nut-icon>
        </template>
      </Navbar>
    </block>

    <!-- 购物车列表 -->
    <view class="cart-list">
      <nut-checkboxgroup v-model="selectGoodsGroup" ref="selectGoodsGroupRef">
        <view
          class="cart-list__item bg-white flex rounded-xxs items-center my-3 py-2"
          v-for="(item, index) in cartList"
          :key="index"
        >
          <nut-checkbox :label="item.goods_id"></nut-checkbox>
          <Card
            :img-url="item.imgUrl"
            :title="item.title"
            :price="item.price"
            :vipPrice="item.vipPrice"
            :shopDesc="item.shopDesc"
            :delivery="item.delivery"
            :shopName="item.shopName"
          >
            <template #footer>
              <nut-inputnumber v-model="item.num" />
            </template>
          </Card>
        </view>
      </nut-checkboxgroup>
    </view>
    <!-- 底部cardbar -->
    <view class="cart-bar bg-white flex justify-between items-center px-2 py-1">
      <view class="flex items-center">
        <nut-checkbox v-model="isSelectAll" @change="changeAllSelect" label="复选框"
          >全选</nut-checkbox
        >
        <view class="ml-2">
          <view>
            <text>总计</text>
            <nut-price :price="totalPrice" size="normal" :thousands="true" />
            <text class="text-xs text-grey">(不包含运费)</text>
          </view>
          <view class="text-xs text-grey mt-1"> 已优惠￥100 </view>
        </view>
      </view>
      <nut-button type="primary" @click="handleToSettle"
        >去结算({{ selectGoodsGroup.length }})</nut-button
      >
    </view>
  </view>
</template>

<style lang="scss">
.cart-page {
  .cart-list {
    padding: 0 10px;
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
