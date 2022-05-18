<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:09:25
 * @LastEditTime: 2022-05-18 16:01:59
 * @Description: Modify here please
-->
<script setup lang="ts">
import { SearchBar } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import { ref } from 'vue'

const searchValue = ref('')

function onSearchBar() {
  Taro.navigateTo({
    url: `/pages/goods/search/index?keyword=${searchValue.value}`,
  })
}
</script>

<template>
  <SearchBar v-model="searchValue" placeholder="iphone 13 火热发售中" @click="onSearchBar">
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
  </SearchBar>
</template>

<style scoped></style>
