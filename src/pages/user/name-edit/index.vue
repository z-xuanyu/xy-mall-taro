<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:45:53
 * @LastEditTime: 2022-05-30 18:31:45
 * @Description: 昵称编辑
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'UserNameEditPage',
})

const nickName = ref('')
</script>

<template>
  <view class="name-edit-page">
    <nut-input
      class="mt-2"
      v-model="nickName"
      label="昵称"
      placeholder="请输入您的昵称"
      clearable
    ></nut-input>
    <view class="my-2 text-xs text-grey px-4">
      最多可输入10个字符
    </view>
    <view class="save-btn px-4 mt-10">
      <nut-button block type="primary">保存</nut-button>
    </view>
  </view>
</template>

<style scoped></style>
