<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 14:22:55
 * @LastEditTime: 2022-06-30 10:44:55
 * @Description: 地址选择卡片
-->
<script setup lang="ts">
import { navigateTo } from '@tarojs/taro'
import type { PropType } from 'vue'

interface Address {
  _id: string
  name: string
  phone: string
  address: string
  detail: string
  isDefault: boolean
}

// eslint-disable-next-line no-undef
defineProps({
  addressData: {
    type: Object as PropType<Address>,
    default: null,
  },
})

// 跳转地址列表
function jumpAddress() {
  navigateTo({
    url: '/pages/user/menus/address/index?from=orderConfirm',
  })
}
</script>

<template>
  <view class="address-card bg-white">
    <view v-if="addressData && addressData._id" @click="jumpAddress">
      <view class="flex justify-between items-center p-3">
        <view class="flex">
          <nut-icon size="18" class="pt-1" name="locationg3" />
          <view class="ml-2">
            <view class="text-grey text-sm">
              {{ addressData.address }}
            </view>
            <view class="py-1 address-card__text text-lg">
              {{ addressData.detail }}
            </view>
            <view class="text-sm"> {{ addressData.name }} {{ addressData.phone }} </view>
          </view>
        </view>
        <nut-icon size="14" name="right" />
      </view>
    </view>

    <nut-cell title="添加收货地址" v-else @click="jumpAddress">
      <template #icon>
        <nut-icon
          size="22"
          class="mr-2"
          font-class-name="myicon"
          class-prefix="myicon"
          name="tianjia"
        />
      </template>
    </nut-cell>
    <view class="address-card__line"> </view>
  </view>
</template>

<style lang="scss">
.address-card {
  .nut-cell {
    margin-bottom: 0;
    align-items: center;
  }
  &__line {
    width: 100%;
    height: 3px;
    background-image: url(https://cdn-we-retail.ym.tencent.com/miniapp/order/stripe.png);
    background-repeat: repeat-x;
    display: block;
  }
  &__text {
    font-weight: 600;
  }
}
</style>
