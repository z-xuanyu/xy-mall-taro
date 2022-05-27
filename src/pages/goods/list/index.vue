<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:08:37
 * @LastEditTime: 2022-05-27 11:10:33
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent } from 'vue'
import GoodsList from '@/components/GoodsList.vue'

defineComponent({
  name: 'GoodsListPage',
})
</script>

<template>
  <view class="goods-list-page safe-area-bottom">
    <GoodsList></GoodsList>
  </view>
</template>

<style lang="scss"></style>
