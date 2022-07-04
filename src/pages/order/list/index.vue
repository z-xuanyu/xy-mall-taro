<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:02:04
 * @LastEditTime: 2022-07-04 11:02:19
 * @Description: 用户订单页面
-->
<script lang="ts">
export default {
  name: 'UserOrderPage',
}
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Tabs, TabPane, Card, Navbar, Empty } from '@nutui/nutui-taro'
import { showToast, navigateTo, navigateBack, showModal } from '@tarojs/taro'
import { isWeb } from '@/utils/env'
import { cancelOrder, getOrderList } from '@/api/order'

const tabActive = ref(0)
// 订单列表
const list = ref<any>([])
const scrollTop = ref(0)
const refresherTriggered = ref(false)

onMounted(() => {
  getOrderListData()
})

// 获取订单列表
async function getOrderListData() {
  const res = await getOrderList({
    status: tabActive.value,
    pageNumber: 1,
    pageSize: 10,
  })
  list.value = res
}

// tab change
function tabChange(op) {
  tabActive.value = op.paneKey
  getOrderListData()
}

function onRefresherRefresh() {
  refresherTriggered.value = true
  setTimeout(() => {
    refresherTriggered.value = false
    scrollTop.value = 0
    showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000,
    })
  }, 1000)
}

// 跳转订单详细
function jumpOrderDetail(id: string) {
  navigateTo({
    url: '/pages/order/detail/index?id=' + id,
  })
}

// 取消订单
function onCancelOrder(item) {
  showModal({
    title: '提示',
    content: '确定取消订单吗？',
    success: async (res) => {
      if (res.confirm) {
        await cancelOrder(item._id)
        getOrderListData()
        showToast({
          title: '取消成功',
          icon: 'success',
          duration: 2000,
        })
      }
    },
  })
}
// 点击支付
function onOrderBtn(item): void {
  switch (item.status) {
    case 1:
      showToast({
        title: '支付',
        icon: 'none',
      })
      break
    case 2:
      // 待发货-再次购买
      navigateTo({
        url: `/pages/goods/detail/index?goods_id=${item.products[0].productId}`,
      })
      break
    case 3:
      // 待收货-确认收货
      showModal({
        title: '提示',
        content: '确定已收到商品吗？',
        success: async (res) => {
          if (res.confirm) {
            await cancelOrder(item._id)
            getOrderListData()
            showToast({
              title: '收货成功',
              icon: 'success',
              duration: 2000,
            })
          }
        },
      })
      break
    case 4:
      // 跳转评价
      navigateTo({
        url: '/pages/order/comment/index',
      })
      break
    default:
      break
  }
}

// 订单状态文本
function getOrderStatusText(status: number): string {
  switch (status) {
    case 1:
      return '待付款'
    case 2:
      return '待发货'
    case 3:
      return '待收货'
    case 4:
      return '待评价'
    default:
      return '已取消'
  }
}
// 订单售后
function onApplyOrderAfterSales() {
  navigateTo({
    url: '/pages/order/apply-service/index',
  })
}

function onBack() {
  navigateBack()
}
</script>
<template>
  <view class="order-page">
    <Navbar v-if="isWeb" @on-click-back="onBack" title="我的订单"></Navbar>
    <view class="order-page__tabs">
      <Tabs v-model="tabActive" type="smile" @change="tabChange">
        <TabPane title="全部"> </TabPane>
        <TabPane title="待付款"> </TabPane>
        <TabPane title="待发货"> </TabPane>
        <TabPane title="待收货"> </TabPane>
        <TabPane title="待评价"> </TabPane>
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
      <view class="order-page__list" v-if="list.length">
        <view
          class="order-page__list-item bg-white rounded-xxs m-3 p-3"
          v-for="orderItem in list"
          :key="orderItem._id"
          @click="jumpOrderDetail(orderItem._id)"
        >
          <view class="flex items-center justify-between">
            <text class="text-base">订单号:wx147878787</text>
            <text class="text-red mr-4 text-base">{{ getOrderStatusText(orderItem.status) }}</text>
          </view>
          <view class="rder-page__list-item__goods pt-2">
            <Card
              v-for="item in orderItem.products"
              :key="item._id"
              class="mb-3"
              :img-url="item.productPic"
              :title="item.productName"
              :price="String(item.price)"
              vipPrice="188"
              shopDesc="自运营"
              delivery="包邮"
              :shopName="`规格：${item.skuName} x ${item.num}`"
            >
            </Card>
          </view>
          <view class="text-right px-3">
            <text class="text-grey text-xs mr-2">总价￥{{ orderItem.totalPrice }}，运费￥0.00</text>
            <text class="text-gray text-sm">实际</text>
            <nut-price :price="orderItem.payment" size="normal" :thousands="true" />
          </view>
          <view class="text-right mt-2">
            <nut-button
              type="default"
              v-if="[1, 2].includes(orderItem.status)"
              class="mx-2"
              @click.stop="onCancelOrder(orderItem)"
              size="small"
              >取消订单</nut-button
            >
            <nut-button
              type="default"
              v-if="orderItem.status === 4"
              class="mx-2"
              @click.stop="onApplyOrderAfterSales"
              size="small"
              >申请售后</nut-button
            >
            <nut-button
              type="primary"
              v-if="[1, 5].includes(orderItem.status)"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >付款</nut-button
            >
            <nut-button
              type="primary"
              v-if="orderItem.status === 2"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >再次购买</nut-button
            >
            <nut-button
              type="primary"
              v-if="orderItem.status === 3"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >确认收货</nut-button
            >
            <nut-button
              type="primary"
              v-if="orderItem.status === 4"
              class="px-6"
              @click.stop="onOrderBtn(orderItem)"
              size="small"
              >评价</nut-button
            >
          </view>
        </view>
      </view>
      <!-- 空数据 -->
      <template v-if="!list.length">
        <Empty description="暂无订单数据"></Empty>
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
.order-page {
  .nut-navbar {
    margin-bottom: 0;
    box-shadow: none;
    border-bottom: 1px solid #f0f0f0;
  }
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
