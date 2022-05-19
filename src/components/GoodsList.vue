<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 10:07:20
 * @LastEditTime: 2022-05-19 10:57:15
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
  <view class="goods-list">
    <view class="goods-list__item" v-for="item in 10" :key="item" @click="jumpDetai">
      <view class="goods-list__item-img">
        <image
          src="https://img14.360buyimg.com/ceco/s300x300_jfs/t1/126663/31/12341/83168/5f58b7fbE1e7b3333/f0c9c03054652024.jpg!q70.jpg"
        />
      </view>
      <view class="goods-list__item-title text-overflow-2 px-2">
        雅迪 双重减震 电动车雅迪 双重减震 电动车雅迪 双重减震 电动车
      </view>
      <view class="goods-list__item-tag px-2">
        <Tag type="danger" plain round>限时抢购</Tag>
      </view>
      <view class="goods-list__item-price p-2">
        <nut-price :price="288" :thousands="true" :decimal-digits="0" />
        <nut-icon name="cart" color="red" :size="22"></nut-icon>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
  &__item {
    width: 47%;
    background-color: #fff;
    margin: 5px;
    overflow: hidden;
    border-radius: 5px;
    image {
      height: 180px;
      width: 100%;
    }
    &-title {
      font-size: 14px;
      color: #333;
    }
    &-tag {
      padding: 5px;
    }
    &-price {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
