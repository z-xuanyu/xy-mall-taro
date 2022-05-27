<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:07:07
 * @LastEditTime: 2022-05-27 10:19:37
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'UserHistoryPage',
})

const scrollTop = ref(0)
</script>

<template>
  <view>
    <scroll-view :scroll-y="true" style="height: 300rpx;" :scroll-top="scrollTop">
      <view id="demo1" class="scroll-view-item demo-text-1">1</view>
      <view id="demo2" class="scroll-view-item demo-text-2">2</view>
      <view id="demo3" class="scroll-view-item demo-text-3">3</view>
    </scroll-view>
  </view>
</template>

<style scoped></style>
