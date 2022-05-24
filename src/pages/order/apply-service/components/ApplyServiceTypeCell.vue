<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-24 11:34:17
 * @LastEditTime: 2022-05-24 16:23:02
 * @Description: Modify here please
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'

// eslint-disable-next-line no-undef
const emit = defineEmits(['change'])

const options = [
  {
    title: '申请退款（无需退货）',
    tips: '没有收到货，或与商家协商同意不用退货只退款',
    icon: 'order',
    type: 1,
  },
  {
    title: '退货退款',
    tips: '已收到货，需要退还收到的商品',
    icon: 'order',
    type: 2,
  },
]

function onChange(type: number) {
  if (type === 1) {
    Taro.setNavigationBarTitle({ title: '申请退款' })
  }
  if (type === 2) {
    Taro.setNavigationBarTitle({ title: '申请退货退款' })
  }
  emit('change', type)
}
</script>

<template>
  <view class="order-apply-service__type">
    <nut-cell-group>
      <nut-cell v-for="item in options" :key="item.type" @click="onChange(item.type)">
        <view class="flex justify-between items-center w-full">
          <view class="flex">
            <nut-icon :name="item.icon" color="red"></nut-icon>
            <view class="ml-2">
              <view class="font-bold">
                {{ item.title }}
              </view>
              <view class="text-xs text-grey">
                {{ item.tips }}
              </view>
            </view>
          </view>
          <nut-icon name="right"></nut-icon>
        </view>
      </nut-cell>
    </nut-cell-group>
  </view>
</template>

<style scoped></style>
