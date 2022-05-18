<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 14:47:31
 * @LastEditTime: 2022-05-18 10:06:39
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref } from 'vue'

const rateValue = ref(5)
</script>

<template>
  <view class="comment-card">
    <nut-cell-group>
      <nut-cell title="商品评价(47)" is-link value="98.8% 好评" />
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
