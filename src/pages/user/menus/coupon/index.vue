<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:16:47
 * @LastEditTime: 2022-06-06 11:21:58
 * @Description: 优惠卷页面
-->

<script lang="ts">
export default {
  name: 'UserCouponPage',
}
</script>
<script setup lang="ts">
import { Tabs, TabPane, Navbar } from '@nutui/nutui-taro'
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import { isWeb } from '@/utils/env'

const tabActive = ref(0)

function onBack() {
  Taro.navigateBack()
}
</script>

<template>
  <view class="coupon-page">
    <Navbar v-if="isWeb" @on-click-back="onBack" title="我的优惠券"></Navbar>
    <Tabs type="smile" v-model="tabActive">
      <TabPane title="未使用"></TabPane>
      <TabPane title="已使用"></TabPane>
      <TabPane title="已过期"></TabPane>
    </Tabs>

    <view class="list"> </view>
  </view>
</template>

<style lang="scss">
.coupon-page {
  .nut-navbar {
    margin-bottom: 0;
    box-shadow: none;
    border-bottom: 1px solid #f0f0f0;
  }
  .nut-tabpane {
    padding: 0;
  }
  .nut-tabs__titles {
    background-color: #ffffff;
  }
}
</style>
