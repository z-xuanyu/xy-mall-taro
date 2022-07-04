<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 11:10:15
 * @LastEditTime: 2022-07-04 17:21:05
 * @Description: 我的积分
-->
<script lang="ts">
export default {
  name: 'UserIntegralPage',
}
</script>
<script setup lang="ts">
import { NoticeBar } from '@nutui/nutui-taro'
</script>

<template>
  <view class="integral">
    <!-- 头部 -->
    <view class="integral-header py-4">
      <view class="text-center text-white text-xs">
        当前积分
      </view>
      <view class="text-center text-white text-4xl">
        109.00
      </view>
      <view class="line"> </view>
      <view class="flex justify-around mt-4 text-white">
        <view class="text-center">
          <view class="text-lg">
            109
          </view>
          <view class="text-xxs">
            累计积分
          </view>
        </view>
        <view class="text-center">
          <view class="text-lg">
            0
          </view>
          <view class="text-xxs">
            累计消费
          </view>
        </view>
        <view class="text-center">
          <view class="text-lg">
            00
          </view>
          <view class="text-xxs">
            冻结积分
          </view>
        </view>
      </view>
      <!-- tab -->
      <view class="integral-header__tab bg-white flex justify-between items-center">
        <view class="text-sm text-center flex-1 integral-header__tab-item">
          分值明细
        </view>
        <view class="flex-1 text-sm text-center integral-header__tab-item active">
          分值提升
        </view>
      </view>
    </view>
    <!-- 列表 -->
    <NoticeBar
      :height="30"
      text="提示：积分数值的高低会直接直接影响您的会员等级"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></NoticeBar>
    <view
      class="flex justify-between items-center p-4 bg-white border-b"
      v-for="item in 5"
      :key="item"
    >
      <view>
        <view class="text-sm">
          下单赠送99积分
        </view>
        <view class="text-xxs text-grey mt-1">
          2022-05-18 11:10:15
        </view>
      </view>
      <view class="text-red">
        +99
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.integral {
  &-header {
    height: 180px;
    width: 100%;
    background-color: #fa2c19;
    position: relative;
    &__tab {
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      height: 50px;
      text-align: center;
      font-size: 20px;
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      &-item {
        line-height: 50px;
      }
      .active {
        background-color: #eee;
      }
    }
  }
  .line {
    height: 2px;
    width: 35px;
    background-color: #fff;
    margin: 5px auto;
    border-radius: 5px;
  }
  .border-b {
    border-bottom: 1px solid #eee;
  }
}
</style>
