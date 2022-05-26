<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 14:14:14
 * @LastEditTime: 2022-05-26 17:32:32
 * @Description: 确认订单
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { defineComponent } from 'vue'
import AddressCard from './components/AddressCard.vue'

defineComponent({
  name: 'OrderConfirmPage',
})

// 跳转发票页面
function jumpReceipt(): void {
  Taro.navigateTo({
    url: '/pages/order/receipt/index',
  })
}

// 提交订单
function onSubmitOrder(): void {
  Taro.navigateTo({
    url: '/pages/order/pay-success/index',
  })
}
</script>

<template>
  <view class="order-confirm-page pb-10 bg-white mb-10">
    <AddressCard></AddressCard>
    <!-- 商品列表 -->
    <view class="goods-list px-3">
      <nut-cell icon="shop" title="XYMALL旗舰店"></nut-cell>
      <view class="goods-list__item flex mb-3" v-for="item in 3" :key="item">
        <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png" />
        <view class="flex-1 ml-2">
          <text class="goods-list__item-title text-overflow-2">
            白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙
          </text>
          <view class="goods-list__item-price my-2">
            <text>
              <text>¥</text>
              <text class="text-lg">999</text>
              x 1</text
            >
          </view>
          <view class="goods-list__item-sku text-xs text-grey">
            <text>颜色：白色</text>
            <text>尺码：XL</text>
          </view>
        </view>
      </view>
    </view>
    <!-- cell -->
    <view class="pay-detail px-3 text-sm">
      <view class="flex justify-between py-2">
        <text>商品总额</text>
        <text>￥4284.00</text>
      </view>
      <view class="flex justify-between py-2">
        <text>运费</text>
        <text>免运费</text>
      </view>
      <view class="flex justify-between py-2">
        <text>活动优惠</text>
        <text class="text-red">-￥11.00</text>
      </view>
      <view class="flex justify-between py-2">
        <text>优惠券</text>
        <view>
          <text>选择优惠券</text>
          <nut-icon size="12" name="right" />
        </view>
      </view>
      <view class="flex justify-between py-2">
        <text>发票</text>
        <view @click="jumpReceipt">
          <text>暂不开发票</text>
          <nut-icon size="12" name="right" />
        </view>
      </view>
      <view class="flex justify-between py-2">
        <text>订单备注</text>
        <view>
          <text>选填，建议先和商家沟通确认</text>
          <nut-icon size="12" name="right" />
        </view>
      </view>
    </view>
    <view class="submit-btn px-3 bg-white safe-area-bottom items-end flex justify-between">
      <nut-price class="pb-2" :price="4273" :thousands="true" />
      <view class="text-right py-2">
        <view class="mb-1">
          <text class="text-sm mr-2 text-grey">共三件</text>
          <text class="text-sm">小计</text>
          <nut-price :price="4273" size="normal" :thousands="true" />
        </view>
        <nut-button type="primary" @click="onSubmitOrder">提交订单</nut-button>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.goods-list {
  .nut-cell {
    margin-bottom: 0;
    border-radius: 0;
    box-shadow: none;
    padding-left: 0;
  }
  .nut-cell__title {
    margin-left: 10px;
  }
  &__item {
    image {
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
  }
}
.submit-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
