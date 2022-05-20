<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 14:47:31
 * @LastEditTime: 2022-05-20 14:02:25
 * @Description: 商品评论卡片
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref } from 'vue'

const rateValue = ref<number>(5)

function jumpGoodsComments(): void {
  Taro.navigateTo({
    url: '/pages/goods/comment/index',
  })
}
</script>

<template>
  <view class="comment-card">
    <nut-cell-group>
      <nut-cell title="商品评价(47)" is-link value="98.8% 好评" @click="jumpGoodsComments" />
    </nut-cell-group>
    <view class="comment-card__content">
      <view class="comment-card__content-top">
        <nut-avatar
          size="normal"
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        ></nut-avatar>
        <view class="comment-card__content-top__user">
          <view class="name">
            阿宇_Corder
          </view>
          <nut-rate icon-size="12" spacing="5" active-color="#FFC800" v-model="rateValue" />
        </view>
      </view>
      <view class="comment-card__content-text">
        收到货了，第一时间试了一下，很漂亮很喜欢，质量也很好，给个好评，谢谢！
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.comment-card {
  background-color: #fff;
  padding-bottom: 10px;
  .nut-cell {
    padding: 10px;
  }
  &__content {
    padding: 0 10px;
    margin-top: -10px;
    &-top {
      display: flex;
      align-items: center;
      &__user {
        margin-left: 15px;
        .name {
          font-size: 14px;
          color: #333;
        }
      }
    }
    &-text {
      padding: 10px 0;
      font-size: 14px;
    }
  }
}
</style>
