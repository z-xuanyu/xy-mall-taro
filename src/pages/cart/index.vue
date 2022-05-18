<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 15:08:57
 * @LastEditTime: 2022-05-18 12:11:28
 * @Description: 购物车
-->
<script setup lang="ts">
import { Card, Navbar } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import { defineComponent, ref, computed } from 'vue'
import CartBar from './components/CartBar.vue'
defineComponent({
  name: 'cartPage',
})

// 是否为web环境
const isWeb = computed(() => Taro.getEnv() === Taro.ENV_TYPE.WEB)
const cartList = ref([
  {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  },
  {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  },
  {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  },
])

const checkboxgroup1 = ref([])
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
      <nut-checkboxgroup v-model="checkboxgroup1">
        <view
          class="cart-list__item bg-white flex items-center my-3 py-2"
          v-for="(item, index) in cartList"
          :key="index"
        >
          <nut-checkbox label="1"></nut-checkbox>
          <Card
            :img-url="item.imgUrl"
            :title="item.title"
            :price="item.price"
            :vipPrice="item.vipPrice"
            :shopDesc="item.shopDesc"
            :delivery="item.delivery"
            :shopName="item.shopName"
          >
          </Card>
        </view>
      </nut-checkboxgroup>
    </view>
    <CartBar></CartBar>
  </view>
</template>

<style lang="scss">
.cart-page {
  .cart-list {
    padding: 0 10px;
  }
}
.nut-card__right__title {
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}
.nut-card__left > .h5-img {
  border-radius: 5px;
}
</style>
