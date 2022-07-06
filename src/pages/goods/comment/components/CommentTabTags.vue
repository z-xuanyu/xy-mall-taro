<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 14:41:32
 * @LastEditTime: 2022-07-06 14:38:24
 * @Description: 商品评价tab标签
-->
<script setup lang="ts">
import { ref } from 'vue'

// eslint-disable-next-line no-undef
defineProps({
  tabs: {
    type: Object,
    default: () => ({}),
  },
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['change'])

const tabTags = ['全部', '带图', '好评', '中评', '差评']
const activeId = ref(0)

function onTabTag(index: number) {
  activeId.value = index
  emit('change', index)
}
</script>

<template>
  <view class="flex flex-wrap">
    <view
      class="comment-tab-tag text-xs px-2 py-1 mr-4 mb-2"
      :class="activeId === index ? 'comment-tab-tag--active' : ''"
      v-for="(item, index) in tabTags"
      :key="index"
      @click="onTabTag(index)"
    >
      {{ item }}({{
        [tabs.allCount, tabs.hasImgCount, tabs.goodCount, tabs.normalCount, tabs.badCount][index]
      }})
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
