<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:08:37
 * @LastEditTime: 2022-06-06 10:17:09
 * @Description: 全部商品列表
-->
<script lang="ts">
export default {
  name: 'GoodsSearchPage',
}
</script>
<script setup lang="ts">
import GoodsList from '@/components/GoodsList.vue'
import { Menu, MenuItem } from '@nutui/nutui-taro'
import { ref } from 'vue'

const menuOptions = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
]

const sortOptions = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
]

const menuValue = ref(0)
const sortValue = ref('a')
</script>

<template>
  <view class="goods-list-page safe-area-bottom">
    <view class="menu-wrapper">
      <Menu>
        <MenuItem v-model="menuValue" :options="menuOptions" />
        <MenuItem v-model="sortValue" :options="sortOptions" />
      </Menu>
    </view>

    <GoodsList></GoodsList>
  </view>
</template>

<style lang="scss">
.menu-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
