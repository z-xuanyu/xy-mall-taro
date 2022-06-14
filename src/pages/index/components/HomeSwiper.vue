<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 12:11:51
 * @LastEditTime: 2022-06-14 11:13:13
 * @Description: Modify here please
-->
<script setup lang="ts">
import type { PropType } from 'vue';

interface BannerItem {
  _id: string
  name: string
  type: number
  url: string
  image: string
  product: any
}

// eslint-disable-next-line no-undef
defineProps({
  list: {
    type: Array as PropType<BannerItem[]>,
    default: () => [],
  },
})
</script>

<template>
  <swiper
    class="swper-box"
    indicator-color="#999"
    indicator-active-color="#fff"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item style="height: 100%" v-for="item in list" :key="item._id">
      <image style="width:100%; height: 100%;" :src="item.image" mode="aspectFill" />
    </swiper-item>
  </swiper>
</template>

<style lang="scss">
.swper-box {
  height: 150px;
  /*  #ifdef h5 */
  height: 160px;
  /*  #endif  */
}
</style>
