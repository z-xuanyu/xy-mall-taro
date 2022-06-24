<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:56:03
 * @LastEditTime: 2022-06-24 17:43:53
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import CommentCard from './components/CommentCard.vue'
import BuyBar from './components/BuyBar.vue'

defineComponent({
  name: 'GoodsDetail',
})

const swiperList = ref([
  'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a1.png',
  'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
])
</script>

<template>
  <view class="goods-detail">
    <swiper
      class="goods-detail__banner"
      indicator-color="#999"
      indicator-active-color="#fff"
      :circular="true"
      :indicator-dots="true"
      :autoplay="true"
    >
      <swiper-item style="height: 100%" v-for="(item, index) in swiperList" :key="index">
        <image :src="item" mode="aspectFit" />
      </swiper-item>
    </swiper>
    <!-- 商品信息 -->
    <view class="goods-detail__info">
      <view class="goods-detail__info-price">
        <view>
          <nut-price :price="298" :thousands="true" />
          <text class="goods-detail__info-price__up text-xs">
            起
          </text>
          <text class="goods-detail__info-price__del text-xs">￥498 </text>
        </view>

        <view class="goods-detail__info-price__sold">
          已售1012
        </view>
      </view>
      <view class="goods-detail__info-title">
        <text class="text-base">
          华为 HUAWEI P30 Pro华为 HUAWEI P30 Pro华为 HUAWEI P30 Pro
        </text>
        <nut-icon name="share"></nut-icon>
      </view>
    </view>

    <!-- 规格选择 -->
    <view class="goods-detail__select">
      <view class="goods-detail__select-label">
        <text>
          已选
        </text>
        <text>
          请选择
        </text>
      </view>

      <nut-icon size="14" name="right"></nut-icon>
    </view>

    <view class="goods-detail__comment">
      <CommentCard />
    </view>
    <!-- 商品描述 -->
    <view class="text-center w-full text-base mt-3 bg-white py-2">
      详情介绍
    </view>
    <view class="goods-bottom-operation">
      <BuyBar></BuyBar>
    </view>
  </view>
</template>

<style lang="scss">
@import './index.scss';
</style>
