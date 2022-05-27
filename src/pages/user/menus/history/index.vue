<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:07:07
 * @LastEditTime: 2022-05-27 12:18:17
 * @Description: 用户浏览历史页面
-->

<script lang="ts">
export default {
  name: 'UserHistoryPage',
}
</script>
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref } from 'vue'
const scrollTop = ref(0)
const refresherTriggered = ref(false)

// 下拉刷新
function onRefresherRefresh() {
  refresherTriggered.value = true
  setTimeout(() => {
    refresherTriggered.value = false
    scrollTop.value = 0
  }, 1000)
}

function jumpDetai() {
  Taro.navigateTo({
    url: '/pages/goods/detail/index',
  })
}
</script>

<template>
  <view class="history-page">
    <scroll-view
      :scroll-y="true"
      style="height: 100vh;"
      :scroll-top="scrollTop"
      :refresherEnabled="true"
      :refresherTriggered="refresherTriggered"
      @refresherrefresh="onRefresherRefresh"
      :refresherThreshold="60"
    >
      <view class="goods-list p-2">
        <view
          class="goods-list__item w-full flex bg-white p-2 mb-3"
          v-for="item in 10"
          :key="item"
          @click="jumpDetai"
        >
          <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png" />
          <view class="flex-1 w-full ml-2">
            <view class="text-overflow-2">
              雅迪 双重减震 电动车雅迪 双重减震 电动车雅迪 双重减震 电动车动车雅迪 双重减震
              电动车雅迪 双重减震 电
            </view>
            <view class="mt-6 flex justify-between items-center">
              <nut-price :price="228" size="normal"></nut-price>
              <view class="text-xs text-grey flex items-center mr-4">
                <text class="mr-2">浏览 112</text>
                <nut-icon name="del2" size="15"></nut-icon>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
.history-page {
  .goods-list {
    &__item {
      image {
        width: 90px;
        height: 90px;
        border-radius: 3px;
      }
    }
  }
}
</style>
