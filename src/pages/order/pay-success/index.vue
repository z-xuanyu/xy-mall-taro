<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 18:03:44
 * @LastEditTime: 2022-05-18 18:23:54
 * @Description: Modify here please
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { defineComponent } from 'vue'

defineComponent({
  name: 'PaySuccessPage',
})

// 跳转订单列表
function jumpOrderList() {
  Taro.navigateTo({
    url: '/pages/order/list/index',
  })
}

// 回到首页
function jumpHome() {
  Taro.switchTab({
    url: '/pages/index/index',
  })
}
</script>

<template>
  <view class="pay-success-page text-center py-3 pt-10">
    <view class="flex items-center justify-center">
      <nut-icon name="success" size="30" color="#47D368" />
      <text class="ml-2 text-xl">支付成功</text>
    </view>
    <view class="py-3">
      <text class="text-sm">微信支付：</text>
      <nut-price :price="4273" :show-symbol="false" :show-decimal="false" />
    </view>
    <view class="py-5">
      <nut-button plain @click="jumpOrderList" class="px-10" type="primary">查看订单</nut-button>
      <nut-button plain @click="jumpHome" class="ml-2 px-10" type="primary">返回首页</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #fff;
}
</style>
