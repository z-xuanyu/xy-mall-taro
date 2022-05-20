<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 14:41:32
 * @LastEditTime: 2022-05-20 14:59:13
 * @Description: 商品评价tab标签
-->
<script setup lang="ts">
import { ref } from 'vue'

// eslint-disable-next-line no-undef
const emits = defineEmits(['change'])

const tabTags = ref([
  {
    text: '全部',
    num: 10,
    id: 1,
  },
  {
    text: '带图',
    num: 10,
    id: 2,
  },
  {
    text: '好评',
    num: 10,
    id: 3,
  },
  {
    text: '中评',
    num: 10,
    id: 4,
  },
  {
    text: '差评',
    num: 10,
    id: 5,
  },
])
const activeId = ref(1)

function onTabTag(id: number) {
  activeId.value = id
  emits('change', id)
}
</script>

<template>
  <view class="flex flex-wrap">
    <view
      class="comment-tab-tag text-xs px-2 py-1 mr-4 mb-2"
      :class="activeId === item.id ? 'comment-tab-tag--active' : ''"
      v-for="(item, index) in tabTags"
      :key="index"
      @click="onTabTag(item.id)"
    >
      {{ item.text }}({{ item.num }})
    </view>
  </view>
</template>

<style lang="scss">
.comment-tab-tag {
  background-color: #f5f5f5;
  border-radius: 4px;
  box-sizing: border-box;
  &--active {
    background-color: transparent;
    border: 1px solid #fa4126;
    color: #fa4126;
  }
}
</style>
