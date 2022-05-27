<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 10:07:20
 * @LastEditTime: 2022-05-27 11:07:50
 * @Description: Modify here please
-->
<script setup lang="ts">
import { Tag } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'

function jumpDetai() {
  Taro.navigateTo({
    url: '/pages/goods/detail/index',
  })
}
</script>

<template>
  <view class="goods-list p-2">
    <view class="goods-list__item" v-for="item in 10" :key="item" @click="jumpDetai">
      <view class="goods-list__item-img">
        <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png" />
      </view>
      <view class="goods-list__item-title text-overflow-2 px-2">
        雅迪 双重减震 电动车雅迪 双重减震 电动车雅迪 双重减震 电动车
      </view>
      <view class="goods-list__item-tag px-2">
        <Tag type="danger" plain round>限时抢购</Tag>
      </view>
      <view class="goods-list__item-price p-2 flex justify-between items-center">
        <nut-price :price="288" :thousands="true" :decimal-digits="0" />
        <nut-icon name="cart" color="red" :size="18"></nut-icon>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.goods-list {
  column-count: 2;
  column-gap: 10px;
  &__item {
    break-inside: avoid;
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 5px;
    image {
      height: 160px;
      width: 100%;
    }
    &-title {
      font-size: 14px;
      color: #333;
    }
    &-tag {
      padding: 5px;
    }
  }
}
</style>
