<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 14:02:03
 * @LastEditTime: 2022-05-13 18:26:16
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import UserCenterCard from './components/UserCenterCard.vue'
import OrderGroup from './components/OrderGroup.vue'
defineComponent({
  name: 'UserPage',
})

const currAuthStep = ref(1)

const orderTagInfos = ref([
  {
    title: '待付款',
    iconName: 'comment',
    orderNum: 5,
    tabType: 5,
    status: 1,
  },
  {
    title: '待发货',
    iconName: 'comment',
    orderNum: 1,
    tabType: 10,
    status: 1,
  },
  {
    title: '待收货',
    iconName: 'comment',
    orderNum: 1,
    tabType: 40,
    status: 1,
  },
  {
    title: '待评价',
    iconName: 'comment',
    orderNum: 0,
    tabType: 60,
    status: 1,
  },
  {
    title: '退款/售后',
    iconName: 'comment',
    orderNum: 0,
    tabType: 0,
    status: 1,
  },
])
</script>

<template>
  <view class="user-page">
    <UserCenterCard :currAuthStep="currAuthStep" />
    <view class="content-wrapper">
      <view class="order-group-wrapper">
        <OrderGroup :orderTagInfos="orderTagInfos" />
      </view>
    </view>

    用户中心
  </view>
</template>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.content-wrapper {
  margin-top: 170px;
  position: relative;
  padding: 0 15px;
}
.order-group-wrapper {
  margin-bottom: 8px;
}
</style>
