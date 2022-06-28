<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 09:44:33
 * @LastEditTime: 2022-06-27 15:04:52
 * @Description: Modify here please
-->
<template>
  <view class="home-page">
    <SearchBar />
    <view class="banner-box">
      <HomeSwiper :list="bannerList" />
    </view>
    <GridNavCard :list="navList"></GridNavCard>
    <Tabs type="smile" v-model="tabActive">
      <TabPane title="推荐"></TabPane>
      <TabPane title="热门"></TabPane>
      <TabPane title="新品"></TabPane>
    </Tabs>
    <GoodsList :list="hotProductList" />
  </view>
</template>

<script lang="ts" setup>
import SearchBar from './components/SearchBar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import GoodsList from '@/components/GoodsList.vue'
import GridNavCard from './components/GridNavCard.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { Tabs, TabPane } from '@nutui/nutui-taro'
import { getHomeData } from '@/api/home'

defineComponent({
  name: 'HomePage',
})

const tabActive = ref(0)

const bannerList = ref([])
const navList = ref([])
const hotProductList = ref([])

onMounted(() => {
  fetchData()
})

async function fetchData() {
  const { banners, navigations, hotProducts } = await getHomeData()
  bannerList.value = banners
  navList.value = navigations
  hotProductList.value = hotProducts
}
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
