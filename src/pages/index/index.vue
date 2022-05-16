<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:33
 * @LastEditTime: 2022-05-16 12:04:55
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
    <GoodsList />
  </view>
</template>

<script lang="ts" setup>
import SearchBar from './components/SearchBar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import GoodsList from '@/components/GoodsList.vue'
import { defineComponent, ref } from 'vue'
import { Tabs, TabPane } from '@nutui/nutui-taro'

defineComponent({
  name: 'HomePage',
})

const tabActive = ref(0)
</script>

<style lang="scss">
.home-page {
  .banner-box {
    padding: 0 10px;
    border-radius: 20px;
    overflow: hidden;
  }
  .nut-tabpane {
    padding: 0;
  }
}
</style>
