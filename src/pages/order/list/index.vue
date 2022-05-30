<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:02:04
 * @LastEditTime: 2022-05-30 18:32:31
 * @Description: 用户订单页面
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { Tabs, TabPane, Card } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'

defineComponent({
  name: 'OrderListPage',
})

const tabActive = ref(0)

const scrollTop = ref(0)
const refresherTriggered = ref(false)

function onRefresherRefresh() {
  refresherTriggered.value = true
  setTimeout(() => {
    refresherTriggered.value = false
    scrollTop.value = 0
    Taro.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000,
    })
  }, 1000)
}

// 跳转订单详细
function jumpOrderDetail() {
  Taro.navigateTo({
    url: '/pages/order/detail/index',
  })
}

// 取消订单
function onCancelOrder() {
  Taro.showToast({
    title: '取消订单',
    icon: 'none',
  })
}
// 点击支付
function onOrderBtn(status: number): void {
  console.log(status, 66666)
  switch (status) {
    case 1:
      Taro.showToast({
        title: '支付',
        icon: 'none',
      })
      break
    case 2:
      Taro.navigateTo({
        url: '/pages/order/send/index',
      })
      break
    case 3:
      Taro.navigateTo({
        url: '/pages/order/receive/index',
      })
      break
    case 4:
      // 跳转评价
      Taro.navigateTo({
        url: '/pages/order/comment/index',
      })
      break
    default:
      break
  }
}

// 订单售后
function onApplyOrderAfterSales() {
  Taro.navigateTo({
    url: '/pages/order/apply-service/index',
  })
}
</script>
<template>
  <view class="order-page">
    <view class="order-page__tabs">
      <Tabs v-model="tabActive">
        <TabPane title="全部"> </TabPane>
        <TabPane title="待付款"> </TabPane>
        <TabPane title="待发货"> </TabPane>
        <TabPane title="待收货"> </TabPane>
        <TabPane title="已完成"> </TabPane>
      </Tabs>
    </view>
    <scroll-view
      :scroll-y="true"
      style="height: 100vh;"
      :scroll-top="scrollTop"
      :refresherEnabled="true"
      :refresherTriggered="refresherTriggered"
      @refresherrefresh="onRefresherRefresh"
      :refresherThreshold="60"
    >
      <view class="order-page__list">
        <view
          class="order-page__list-item bg-white my-3 p-3"
          v-for="orderItem in 5"
          :key="orderItem"
          @click="jumpOrderDetail"
        >
          <view class="flex items-center justify-between">
            <text class="text-base">订单号 3545456456</text>
            <text class="text-red mr-4 text-base">待付款</text>
          </view>
          <view class="rder-page__list-item__goods pt-2">
            <Card
              v-for="item in 3"
              :key="item"
              class="mb-3"
              img-url="https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png"
              title="腾讯极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率"
              price="88"
              vipPrice="188"
              shopDesc="自运营"
              delivery="包邮"
              shopName="颜色：紫色 x 1"
            >
            </Card>
          </view>
          <view class="text-right px-3">
            <text class="text-grey text-xs mr-2">总价￥100.1，运费￥0.00</text>
            <text class="text-gray text-sm">实际</text>
            <nut-price :price="88" size="normal" :thousands="true" />
          </view>
          <view class="text-right mt-2">
            <nut-button
              type="default"
              v-if="[1, 2].includes(orderItem)"
              class="mx-2"
              @click.stop="onCancelOrder"
              size="small"
              >取消订单</nut-button
            >
            <nut-button
              type="default"
              v-if="orderItem === 3"
              class="mx-2"
              @click.stop="onApplyOrderAfterSales"
              size="small"
              >申请售后</nut-button
            >
            <nut-button
              type="primary"
              v-if="[1, 5].includes(orderItem)"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >付款</nut-button
            >
            <nut-button
              type="primary"
              v-if="orderItem === 2"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >再次购买</nut-button
            >
            <nut-button
              type="primary"
              v-if="orderItem === 3"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >确认收货</nut-button
            >
            <nut-button
              type="primary"
              v-if="orderItem === 4"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >评价</nut-button
            >
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
.order-page {
  &__tabs {
    position: sticky;
    top: 0;
    z-index: 999;
    .nut-tabpane {
      padding: 0;
    }
    .nut-tabs__titles {
      background-color: #fff;
    }
  }
  &__list {
    &-item {
      .nut-card__left > .h5-img {
        border-radius: 5px;
      }
    }
  }
}
</style>
