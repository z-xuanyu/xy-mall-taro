<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 10:07:20
 * @LastEditTime: 2022-06-14 11:31:15
 * @Description: 商品列表
-->
<script setup lang="ts">
import { Tag } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import type { PropType } from 'vue';

interface GoodsItem {
  _id: string
  title: string
  price: number
  pic: string
}

// eslint-disable-next-line no-undef
defineProps({
  list: {
    type: Array as PropType<GoodsItem[]>,
    default: () => [],
  },
})

function jumpDetai() {
  Taro.navigateTo({
    url: '/pages/goods/detail/index',
  })
}
</script>

<template>
  <view class="goods-list-column p-2">
    <view class="goods-list-column__item" v-for="item in list" :key="item._id" @click="jumpDetai">
      <view>
        <image class="goods-img" :src="item.pic" />
      </view>
      <view class="goods-list-column__item-title text-overflow-2 px-2">
        {{ item.title }}
      </view>
      <view class="px-2">
        <Tag type="danger" plain round>限时抢购</Tag>
      </view>
      <view class="px-2 flex justify-between items-center">
        <nut-price :price="item.price" :thousands="true" :decimal-digits="0" />
        <nut-icon name="cart" color="red" :size="18"></nut-icon>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.goods-list-column {
  column-count: 2;
  column-gap: 10px;
  &__item {
    break-inside: avoid;
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    .goods-img {
      height: 160px;
      width: 100%;
    }
    &-title {
      font-size: 14px;
      color: #333;
    }
    .nut-price--symbol-large {
      font-size: 14px;
    }
    .nut-price--large {
      font-size: 20px;
    }
  }
}
</style>
