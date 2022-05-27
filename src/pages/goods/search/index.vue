<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:07:03
 * @LastEditTime: 2022-05-27 10:49:11
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { SearchBar } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'

defineComponent({
  name: 'GoodsSearchPage',
})

const keyword = ref('')
const historyWords = ref([
  '鸡',
  '电脑',
  'iPhone12',
  '车载手机支架',
  '自然堂',
  '小米10',
  '原浆古井贡酒',
  '欧米伽',
  '华为',
  '针织半身裙',
  '氢跑鞋',
  '三盒处理器',
])
const popularWords = ref([
  '鸡',
  '电脑',
  'iPhone12',
  '车载手机支架',
  '自然堂',
  '小米10',
  '原浆古井贡酒',
  '欧米伽',
  '华为',
  '针织半身裙',
  '氢跑鞋',
  '三盒处理器',
])
function handleClearHistory() {}

function handleHistoryTap() {
  Taro.navigateTo({
    url: '/pages/goods/list/index',
  })
}
</script>

<template>
  <view class="search-page">
    <SearchBar v-model="keyword" placeholder="iphone 13 火热发售中">
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
    </SearchBar>
    <view class="search-wrap mt-5 px-5">
      <view class="history-wrap">
        <view class="search-header">
          <text class="search-title">历史搜索</text>
          <text class="search-clear" @click="handleClearHistory">清除</text>
        </view>
        <view class="search-content">
          <view
            class="search-item"
            hover-class="hover-history-item"
            v-for="(item, index) in historyWords"
            @click="handleHistoryTap"
            :key="index"
          >
            {{ item }}
          </view>
        </view>
      </view>
      <view class="popular-wrap mt-3">
        <view class="search-header">
          <text class="search-title">热门搜索</text>
        </view>
        <view class="search-content">
          <view
            class="search-item"
            v-for="(item, index) in popularWords"
            @click="handleHistoryTap"
            :key="index"
          >
            {{ item }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #ffffff;
}

.search-page .search-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.search-page .search-title {
  font-size: 30rpx;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 42rpx;
}

.search-page .search-clear {
  font-size: 24rpx;
  font-family: PingFang SC;
  line-height: 32rpx;
  color: #999999;
  font-weight: normal;
}

.search-page .search-content {
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 24rpx;
}

.search-page .search-item {
  color: #333333;
  font-size: 24rpx;
  line-height: 32rpx;
  font-weight: normal;
  margin-right: 24rpx;
  margin-bottom: 24rpx;
  background: #f5f5f5;
  border-radius: 38rpx;
  padding: 12rpx 24rpx;
}

.search-page .hover-history-item {
  position: relative;
  top: 3rpx;
  left: 3rpx;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1) inset;
}

.add-notes__confirm {
  color: #fa4126 !important;
}
</style>
