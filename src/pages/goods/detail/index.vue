<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:56:03
 * @LastEditTime: 2022-05-20 12:11:43
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
  <view class="goods-detail">
    <swiper
      class="goods-detail__banner"
      indicator-color="#999"
      indicator-active-color="#fff"
      :circular="true"
      :indicator-dots="true"
      :autoplay="true"
    >
      <swiper-item
        style="height: 100%"
        v-for="(item, index) in swiperList"
        :key="index + item.text"
      >
        <image :src="item.img" mode="center" />
      </swiper-item>
    </swiper>
    <!-- 商品信息 -->
    <view class="goods-detail__info">
      <view class="goods-detail__info-price">
        <view>
          <nut-price :price="298" :thousands="true" />
          <text class="goods-detail__info-price__up">
            起
          </text>
          <text class="goods-detail__info-price__del">￥498 </text>
        </view>

        <view class="goods-detail__info-price__sold">
          已售1012
        </view>
      </view>

      <view class="goods-detail__info-tags">
        <view>
          <nut-tag type="danger" plain>满减</nut-tag>
          <nut-tag type="danger" plain>满减</nut-tag>
          <nut-tag type="danger" plain>满减</nut-tag>
          <nut-tag type="danger" plain>满减</nut-tag>
        </view>
        <view class="goods-detail__info-tags__coupon">
          <text>
            领劵
          </text>
          <nut-icon size="12" name="right"></nut-icon>
        </view>
      </view>

      <view class="goods-detail__info-title">
        <text>
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
    <view class="flex items-center justify-between"> </view>
    <view class="goods-bottom-operation">
      <BuyBar></BuyBar>
    </view>
  </view>
</template>

<style lang="scss">
.goods-detail {
  padding-bottom: 100px;
  &__banner {
    height: 350px;
    image {
      width: 100%;
      height: 100%;
    }
  }
  &__info {
    padding: 20px 10px;
    background-color: #fff;
    &-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__up {
        color: #ff4d4f;
      }
      &__del {
        color: #999;
        text-decoration: line-through;
      }
      &__sold {
        font-size: 14px;
        color: #999;
      }
    }
    &-tags {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nut-tag {
        margin-right: 5px;
      }
      &__coupon {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #ff4d4f;
      }
    }
    &-title {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nut-icon {
        color: #999;
        margin-left: 20px;
      }
    }
  }
  &__select {
    margin-top: 10px;
    padding: 12px 15px;
    background-color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    &-label {
      text {
        margin-right: 10px;
      }
    }
  }
}

.goods-bottom-operation {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
