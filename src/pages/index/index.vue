<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:33
 * @LastEditTime: 2022-05-14 19:25:56
 * @Description: Modify here please
-->
<template>
  <view class="home-page">
    <SearchBar />
    <view class="banner-box">
      <HomeSwiper />
    </view>
    <Tabs type="smile" v-model="tabActive">
      <TabPane title="推荐"></TabPane>
      <TabPane title="热门"></TabPane>
      <TabPane title="新品"></TabPane>
    </Tabs>
    <view class="goods-list">
      撒发顺丰
    </view>
  </view>
</template>

<script lang="ts" setup>
import SearchBar from './components/SearchBar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import { defineComponent, ref } from 'vue'
import { Tabs, TabPane } from '@nutui/nutui-taro'

defineComponent({
  name: 'HomePage',
})

const tabActive = ref(0)
</script>

<style lang="scss">
.banner-box {
  padding: 0 10px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
