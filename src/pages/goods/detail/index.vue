<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:56:03
 * @LastEditTime: 2022-07-06 14:42:43
 * @Description: 商品详情
-->
<script lang="ts">
export default {
  name: 'GoodsDetail',
}
</script>
<script setup lang="ts">
import { useRouter, showToast } from '@tarojs/taro'
import { ref, onBeforeMount } from 'vue'
import CommentCard from './components/CommentCard.vue'
import BuyBar from './components/BuyBar.vue'
import { getGoodsById } from '@/api/goods'

const route = useRouter()
// 商品信息
const goodsInfo = ref<any>({})
const skuName = ref<string>('')
const buyBarRef = ref<any>(null)

onBeforeMount(() => {
  fetchData()
})

async function fetchData() {
  const { goods_id } = route.params
  if (!goods_id) return showToast({ title: '商品id不存在', icon: 'none' })
  const res = await getGoodsById(goods_id as string)
  goodsInfo.value = res
}

function currentSelectSku(value) {
  skuName.value = value.skuNames.join(',')
}
//选择
function handleClickSelect() {
  buyBarRef.value?.toAddCart()
}
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
      <swiper-item style="height: 100%" v-for="(item, index) in goodsInfo.bannerImg" :key="index">
        <image :src="item" mode="aspectFit" />
      </swiper-item>
    </swiper>
    <!-- 商品信息 -->
    <view class="goods-detail__info">
      <view class="goods-detail__info-price">
        <view>
          <nut-price :price="goodsInfo.costPrice" :thousands="true" />
          <text class="goods-detail__info-price__up text-xs">
            起
          </text>
          <text class="goods-detail__info-price__del text-xs">￥{{ goodsInfo.price }} </text>
        </view>

        <view class="goods-detail__info-price__sold"> 已售{{ goodsInfo.sales }} </view>
      </view>
      <view class="goods-detail__info-title">
        <text class="text-base">
          {{ goodsInfo.title }}
        </text>
        <nut-icon name="share"></nut-icon>
      </view>
    </view>

    <!-- 规格选择 -->
    <view class="goods-detail__select" @click="handleClickSelect">
      <view class="goods-detail__select-label">
        <text>
          已选
        </text>
        <text>
          {{ skuName }}
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
      <BuyBar :info="goodsInfo" @select-sku="currentSelectSku" ref="buyBarRef" />
    </view>
  </view>
</template>

<style lang="scss">
@import './index.scss';
</style>
