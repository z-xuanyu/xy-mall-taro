<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 14:02:03
 * @LastEditTime: 2022-05-14 16:50:08
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { Cell, CellGroup } from '@nutui/nutui-taro'
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
      <!-- celL 菜单 -->
      <CellGroup>
        <Cell title="浏览历史" is-link></Cell>
        <Cell title="商品收藏" is-link></Cell>
        <Cell title="收货地址" is-link></Cell>
        <Cell title="优惠卷" is-link desc="5"></Cell>
        <Cell title="积分" is-link></Cell>
        <Cell title="帮助中心" is-link></Cell>
        <Cell title="客服热线" is-link></Cell>
      </CellGroup>
    </view>
    <!-- 底部版权 -->
    <view class="footer__version">
      当前版本 xy-mall v1.0.0
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.content-wrapper {
  margin-top: 170px;
  /*  #ifdef h5 */
  margin-top: 100px;
  /*  #endif  */
  position: relative;
  padding: 0 15px;
}
.order-group-wrapper {
  margin-bottom: 8px;
}

.footer__version {
  text-align: center;
  margin-top: 25px;
  color: #999;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 16px;
}
</style>
