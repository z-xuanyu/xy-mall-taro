<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 11:56:53
 * @LastEditTime: 2022-05-18 14:19:35
 * @Description: Modify here please
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  // 是否全选
  isAllSelected: {
    type: Boolean,
    default: false,
  },

  // 总计
  totalAmount: {
    type: Number,
    default: 1,
  },
  // 商品总数
  totalGoodsNum: {
    type: Number,
    default: 1,
  },
})

const isAllSelected = ref(props.isAllSelected)

function handleToSettle() {
  // 跳转到结算页面
  Taro.navigateTo({
    url: '/pages/order/order-confirm/index',
  })
}
</script>

<template>
  <view class="cart-bar bg-white flex justify-between items-center px-2 py-1">
    <view class="flex items-center">
      <nut-checkbox v-model="isAllSelected" label="复选框">全选</nut-checkbox>
      <view class="ml-2">
        <view>
          <text>总计</text>
          <nut-price :price="1788" size="normal" :thousands="true" />
          <text class="text-xs text-grey">(不包含运费)</text>
        </view>
        <view class="text-xs text-grey mt-1"> 已优惠￥100 </view>
      </view>
    </view>
    <nut-button type="primary" @click="handleToSettle">去结算(0)</nut-button>
  </view>
</template>

<style lang="scss">
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
</style>
