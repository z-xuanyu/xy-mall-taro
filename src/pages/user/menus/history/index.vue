<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:07:07
 * @LastEditTime: 2022-07-01 14:16:42
 * @Description: 用户浏览历史页面
-->

<script lang="ts">
export default {
  name: 'UserHistoryPage',
}
</script>
<script setup lang="ts">
import { navigateTo } from '@tarojs/taro'
import { ref, onMounted } from 'vue'
import { getUserViewsHistory } from '@/api/user'

interface GoodsInfo {
  _id: string
  title: string
  price: number
  pic: string
  views: number
  goods_id: string
}

onMounted(async () => {
  const res = await getUserViewsHistory()
  list.value = res
})

const list = ref<Array<GoodsInfo>>([])
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

// 跳转到商品详情页面
function jumpDetail(id: string) {
  navigateTo({
    url: '/pages/goods/detail/index?goods_id=' + id,
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
          v-for="item in list"
          :key="item._id"
          @click="jumpDetail(item.goods_id)"
        >
          <view class="goods-img">
            <image :src="item.pic" />
          </view>
          <view class="flex-1 w-full ml-2">
            <view class="text-overflow-2 text-base">
              {{ item.title }}
            </view>
            <view class="mt-6 flex justify-between items-center">
              <nut-price :price="228" size="normal"></nut-price>
              <view class="text-xs text-grey flex items-center mr-4">
                <text class="mr-2">浏览 {{ item.views }}</text>
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
