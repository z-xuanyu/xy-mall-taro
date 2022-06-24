<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-14 10:36:21
 * @LastEditTime: 2022-06-24 18:05:15
 * @Description: 首页导航卡片
-->
<script setup lang="ts">
import type { PropType } from 'vue';
interface NavItem {
  _id: string;
  name: string;
  pic: string;
  type: number;
  pagePath: string;

}
// eslint-disable-next-line no-undef
defineProps({
  list: {
    type: Array as PropType<NavItem[]>,
    default: () => [],
  },
})
</script>

<template>
  <view class="nav-card mx-2 rounded-xxs pt-2 bg-white mt-2">
    <view v-for="item in list" :key="item._id" class="nav-card__item">
      <view class="flex justify-center">
        <image class="nav-card__item-img" :src="item.pic" />
      </view>

      <view class="text-xs text-center">
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.nav-card {
  column-count: 5;
  column-gap: 10px;
  &__item {
    margin-bottom: 10px;
    &-img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
