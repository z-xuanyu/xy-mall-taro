<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 15:40:07
 * @LastEditTime: 2022-05-20 16:18:03
 * @Description: 订单售后类型选择
-->
<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'OrderApplyServicePage',
})
</script>

<template>
  <view class="order-apply-service">
    <!-- 商品卡片 -->
    <view class="goods-card flex p-4 bg-white">
      <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png" />
      <view class="flex-1 ml-2">
        <view class="text-overflow-2">
          白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙
        </view>
        <view class="text-xs my-1 text-grey">
          <text>颜色：橙色，2XL</text>
        </view>
        <view class="flex justify-between">
          <view>
            <text class="text-xs">￥</text>
            <text>269.00</text>
          </view>
          <text class="text-xs text-grey">x1</text>
        </view>
      </view>
    </view>
    <!-- 选择售后类型  -->
    <view class="order-apply-service__type">
      <nut-cell-group>
        <nut-cell>
          <view class="flex justify-between items-center w-full">
            <view class="flex">
              <nut-icon name="order" color="red"></nut-icon>
              <view class="ml-2">
                <view class="font-bold">
                  申请退款（无需退货）
                </view>
                <view class="text-xs text-grey">
                  没有收到货，或与商家协商同意不用退货只退款
                </view>
              </view>
            </view>
            <nut-icon name="right"></nut-icon>
          </view>
        </nut-cell>
        <nut-cell>
          <view class="flex justify-between items-center w-full">
            <view class="flex">
              <nut-icon name="order" color="red"></nut-icon>
              <view class="ml-2">
                <view class="font-bold">
                  退货退款
                </view>
                <view class="text-xs text-grey">
                  已收到货，需要退还收到的商品
                </view>
              </view>
            </view>
            <nut-icon name="right"></nut-icon>
          </view>
        </nut-cell>
      </nut-cell-group>
    </view>
  </view>
</template>

<style lang="scss">
.order-apply-service {
  .goods-card {
    image {
      width: 80px;
      height: 80px;
      border-radius: 3px;
    }
  }
}
</style>
