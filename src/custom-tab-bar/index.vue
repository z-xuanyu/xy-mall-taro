<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 14:18:52
 * @LastEditTime: 2022-05-26 12:03:17
 * @Description: Modify here please
-->
<template>
  <cover-view class="tab-bar">
    <cover-view class="tab-bar-border"></cover-view>
    <cover-view
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
      @tap="switchTab(index, item.pagePath)"
    >
      <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath" />
      <cover-view :style="{ color: selected === index ? selectedColor : color }">{{
        item.text
      }}</cover-view>
    </cover-view>
  </cover-view>
</template>

<script lang="ts">
export default {
  name: 'CustomTabBar',
}
</script>
<script setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'

const selected = ref(0)

const color = '#000000'
const selectedColor = '#DC143C'
const list = [
  {
    pagePath: '/pages/index/index',
    selectedIconPath: '../assets/images/tabbar/home_active.png',
    iconPath: '../assets/images/tabbar/home.png',
    text: '首页',
  },
  {
    pagePath: '/pages/user/index',
    selectedIconPath: '../assets/images/tabbar/user_active.png',
    iconPath: '../assets/images/tabbar/user.png',
    text: '我的',
  },
]

function switchTab(index, url) {
  setSelected(index)
  Taro.switchTab({ url })
}

function setSelected(index) {
  console.log(index)
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background: white;
  display: flex;
  // padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1rpx;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item cover-image {
  width: 54rpx;
  height: 54rpx;
}

.tab-bar-item cover-view {
  font-size: 20rpx;
}
</style>
