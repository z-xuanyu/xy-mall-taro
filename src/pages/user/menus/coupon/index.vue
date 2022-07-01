<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:16:47
 * @LastEditTime: 2022-07-01 15:32:23
 * @Description: 优惠卷页面
-->

<script lang="ts">
export default {
  name: 'UserCouponPage',
}
</script>
<script setup lang="ts">
import { Tabs, TabPane, Navbar, Tag } from '@nutui/nutui-taro'
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
      <TabPane title="已使用/过期"></TabPane>
    </Tabs>

    <view class="list p-2">
      <view class="coupon-card flex mb-2" v-for="item in 4" :key="item">
        <view class="coupon-card__left">
          <view class="text-center text-red"> ￥<text class="text-4xl">10</text> </view>
          <view class="text-center text-xxs">
            无门槛券
          </view>
        </view>
        <view class="coupon-card__right flex-1 px-3">
          <view class="flex items-center">
            <Tag plain round>通用券</Tag>
            <view class="text-center text-xxs ml-2">
              可用于全店消费
            </view>
          </view>
          <view class="flex justify-between items-center mt-4">
            <view class="text-xxs text-grey">
              2022/05/17 - 2022/07/01
            </view>
            <nut-button size="mini" type="primary">立即使用</nut-button>
          </view>
        </view>
        <!-- 使用图片 -->
        <image v-if="false" class="coupon-used" src="../../../../assets/images/used.png"></image>
      </view>
    </view>
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
  .coupon-card {
    position: relative;
    background-color: #fff;
    height: 100px;
    mask-image: radial-gradient(circle at 102px 10px, transparent 10px, red 10.5px),
      radial-gradient(closest-side circle at 50%, red 99%, transparent 100%);
    mask-size: 100%, 4px 12px;
    mask-repeat: repeat, repeat-y;
    mask-position: 0 -10px, 100px;
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    // filter: grayscale(100%);
    &__left {
      box-sizing: border-box;
      width: 100px;
      padding-right: 10px;
      padding-top: 20px;
    }
    &__right {
      box-sizing: border-box;
      padding-top: 20px;
    }
    .coupon-used {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
