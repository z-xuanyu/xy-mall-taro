<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-12 15:06:16
 * @LastEditTime: 2022-05-13 10:49:29
 * @Description: 分类
-->
<script setup lang="ts">
import { Category, CategoryPane } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import { ref, onMounted } from 'vue'

const categoryInfo = ref<any>({})
const category = ref([])
const categoryChild = ref([])

onMounted(() => {
  getData()
})

function getData() {
  Taro.request({
    url: 'https://storage.360buyimg.com/nutui/3x/categoryData.js',
    success: (res) => {
      categoryInfo.value = res.data.categoryInfo
      category.value = res.data.categoryInfo.category
      categoryChild.value = res.data.categoryChild
    },
  })
}

function change(index: any) {
  categoryChild.value = [].concat(categoryInfo.value?.category[index + 1].children)
}

function onChange() {
  console.log('当前分类数据')
}
</script>

<template>
  <view>
    <Category :category="category" @change="change">
      <CategoryPane :categoryChild="categoryChild" @onChange="onChange"> </CategoryPane>
    </Category>
  </view>
</template>

<style scoped></style>
