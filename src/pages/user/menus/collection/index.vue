<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:00:19
 * @LastEditTime: 2022-05-30 18:32:08
 * @Description: 用户收藏页面
-->
<script lang="ts">
export default {
  name: 'UserCollectionPage',
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
  <view class="collection-page">
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
          <view class="goods-img">
            <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png" />
          </view>
          <view class="flex-1 w-full ml-2">
            <view class="text-overflow-2 text-base">
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
.collection-page {
  .goods-list {
    &__item {
      .goods-img {
        width: 90px;
        height: 90px;
        image {
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
