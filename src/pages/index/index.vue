<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:33
 * @LastEditTime: 2022-05-13 17:32:38
 * @Description: Modify here please
-->
<template>
  <view class="home-page">
    <SearchBar />
    <view class="banner-box">
      <HomeSwiper />
    </view>

    <span class="text-red-500">测试文字</span>
  </view>
</template>

<script lang="ts" setup>
import SearchBar from './components/SearchBar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'HomePage',
})
</script>

<style lang="scss">
.banner-box {
  padding: 0 10px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
