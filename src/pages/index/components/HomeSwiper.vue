<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 12:11:51
 * @LastEditTime: 2022-05-14 15:06:06
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref } from 'vue'

const swiperList = ref([
  {
    img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
    text: '1',
  },
  {
    img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
    text: '2',
  },
  {
    img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
    text: '3',
  },
  {
    img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
    text: '4',
  },
  {
    img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
    text: '5',
  },
  {
    img: 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
    text: '6',
  },
])
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
    <swiper-item style="height: 100%" v-for="(item, index) in swiperList" :key="index + item.text">
      <image style="width:100%; height: 100%;" :src="item.img" mode="aspectFill" />
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
