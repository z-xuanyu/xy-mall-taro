<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:57:34
 * @LastEditTime: 2022-05-20 14:51:18
 * @Description: 商品评价列表
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Comment } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import CommentTabTags from './components/CommentTabTags.vue'

defineComponent({
  name: 'GoodsCommentsPage',
})

const cmt = ref({}) as any

onMounted(() => {
  Taro.request({
    url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json',
    success: (res) => {
      cmt.value = res.data.Comment
    },
  })
})

function clickImages() {}
</script>

<template>
  <view class="comments">
    <view class="bg-white px-4 pt-3">
      <CommentTabTags></CommentTabTags>
    </view>

    <view class="comments__list">
      <view class="comments__list-item p-4 bg-white mb-3" v-for="item in 5" :key="item">
        <Comment
          imagesRows="multi"
          :images="cmt.images"
          :videos="cmt.videos"
          :info="cmt.info"
          :follow="cmt.follow"
          @clickImages="clickImages"
        ></Comment>
      </view>
    </view>
  </view>
</template>

<style scoped></style>
