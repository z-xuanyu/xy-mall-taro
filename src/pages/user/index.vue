<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 14:02:03
 * @LastEditTime: 2022-05-19 16:31:38
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import UserCenterCard from './components/UserCenterCard.vue'
import OrderGroup from './components/OrderGroup.vue'
import Taro from '@tarojs/taro'
defineComponent({
  name: 'UserPage',
})

const currAuthStep = ref<number>(3)

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

const jumpArr = ref([
  {
    title: '浏览历史',
    url: '/pages/user/menus/history/index',
  },
  {
    title: '商品收藏',
    url: '/pages/user/menus/collection/index',
  },

  {
    title: '收货地址',
    url: '/pages/user/menus/address/index',
  },
  {
    title: '优惠卷',
    url: '/pages/user/menus/coupon/index',
    desc: '5',
  },
  {
    title: '积分',
    url: '/pages/user/menus/integral/index',
  },
  {
    title: '帮助中心',
    url: '/pages/user/menus/help/index',
  },
  {
    title: '客服热线',
    url: '/pages/user/menus/service/index',
  },
])

interface jumpItem {
  title: string
  url: string
  desc?: string
}
const jumpPage = (item: jumpItem) => {
  Taro.navigateTo({
    url: item.url,
  })
}
</script>

<template>
  <view class="user-page">
    <UserCenterCard :currAuthStep="currAuthStep" />
    <view class="content-wrapper">
      <view class="order-group-wrapper">
        <OrderGroup :orderTagInfos="orderTagInfos" />
      </view>
      <!-- celL 菜单 -->
      <nut-cell-group>
        <nut-cell
          class="pr-2 items-center menu-cell"
          :title="item.title"
          :desc="item.desc"
          v-for="(item, index) in jumpArr"
          :key="index"
          is-link
          @click="jumpPage(item)"
        ></nut-cell>
      </nut-cell-group>
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
.menu-cell .nut-cell__link {
  font-size: 12px;
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
