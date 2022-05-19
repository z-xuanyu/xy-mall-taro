<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 11:02:41
 * @LastEditTime: 2022-05-19 15:26:34
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { CountDown } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'

defineComponent({
  name: 'OrderDetailPage',
})

const endTime = ref(Date.now() + 60 * 30 * 1000)

// 复制订单编号
function onCopyOrderNo() {
  Taro.setClipboardData({
    data: '123456789',
    success: () => {
      Taro.showToast({
        title: '复制成功',
        icon: 'none',
        duration: 2000,
      })
    },
  })
}

// 跳转订单发票详细
function jumpInvoiceDetail() {}

// 跳转地址列表
function jumpAddresList() {
  Taro.navigateTo({
    url: '/pages/user/menus/address/index',
  })
}
</script>

<template>
  <view class="order-detail-page">
    <!-- top -->
    <view class="bg-white p-4">
      <view class="order-detail-page__header flex justify-center items-center">
        <view class="text-center text-white">
          <view class="text-xl">
            待付款
          </view>
          <view class="text-xs mt-2 flex items-center">
            剩
            <CountDown class="px-2" :endTime="endTime" format="mm 分 ss 秒" />
            支付，过时订单将自动取消
          </view>
        </view>
      </view>
      <view class="order-detail-page__address flex justify-between mt-4">
        <view class="flex">
          <nut-icon name="locationg3"></nut-icon>
          <view class="ml-2">
            <view class="text-sm">
              张三 15800021934
            </view>
            <view class="text-xs text-grey mt-2 flex-1">
              收货地址：广东省深圳市南山区科技南一路
            </view>
          </view>
        </view>
        <view class="text-red" @click="jumpAddresList">修改</view>
      </view>
    </view>
    <!-- goods -->
    <view class="bg-white p-4 mt-3">
      <view class="flex items-center">
        <nut-icon name="shop"></nut-icon>
        <text class="ml-2 text-base">XYMALL旗舰店</text>
      </view>
      <view class="goods-list py-3">
        <view class="flex mb-2 goods-list__item" v-for="item in 3" :key="item">
          <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png" />
          <view class="flex-1 ml-2">
            <text class="text-overflow-2">
              白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙
            </text>
            <view class="my-1">
              <text>
                <text>¥</text>
                <text class="text-lg">999</text>
                x 1</text
              >
            </view>
            <view class="goods-list__item-sku text-xs text-grey">
              <text>颜色：白色</text>
              <text>尺码：XL</text>
            </view>
          </view>
        </view>
      </view>
      <view class="text-xs">
        <view class="flex justify-between py-2">
          <text>商品总额</text>
          <text>￥4284.00</text>
        </view>
        <view class="flex justify-between py-2">
          <text>运费</text>
          <text>免运费</text>
        </view>
        <view class="flex justify-between py-2">
          <text>活动优惠</text>
          <text class="text-red">-￥11.00</text>
        </view>
        <view class="flex justify-between py-2">
          <text>优惠券</text>
          <text>￥0.00</text>
        </view>
        <view class="flex justify-between py-2">
          <text>应付</text>
          <nut-price :price="158" size="normal" :thousands="true" />
        </view>
      </view>
    </view>

    <!-- 订单备注信息 -->
    <view class="bg-white p-4 my-3 order-remark text-xs">
      <view class="flex justify-between py-1">
        <text>订单编号</text>
        <view class="flex items-center"
          ><text class="mr-2">wx545456454564</text
          ><nut-button type="default" size="mini" class="px-2 py-0" @click="onCopyOrderNo"
            >复制</nut-button
          ></view
        >
      </view>
      <view class="flex justify-between py-2">
        <text>下单时间</text>
        <text>2022-05-19 15:30</text>
      </view>
      <view class="flex justify-between py-1">
        <text>发票</text>
        <view class="flex items-center"
          ><text class="mr-2">不开发票</text
          ><nut-button type="default" @click="jumpInvoiceDetail" size="mini" class="px-2 py-0"
            >查看</nut-button
          ></view
        >
      </view>
      <view class="flex justify-between py-2">
        <text>备注</text>
        <text>送电池吗？</text>
      </view>
      <view class="flex justify-center pt-3 mt-2 contact-service">
        <view class="flex items-center">
          <nut-icon name="service"></nut-icon>
          <text class="ml-2">联系客服</text>
        </view>
      </view>
    </view>
    <!-- 支付按钮 -->
    <view class="order-detail-page__submit bg-white safe-area-bottom">
      <view class="p-3 text-right">
        <nut-button type="default" size="small" class="mr-3">取消订单</nut-button>
        <nut-button type="primary" size="small">
          立即支付
        </nut-button>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.order-detail-page {
  &__header {
    height: 100px;
    background-image: url('../../../assets/images/order/order-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .goods-list {
    &__item {
      image {
        width: 90px;
        height: 90px;
        border-radius: 3px;
      }
    }
  }
  .order-remark {
    margin-bottom: calc(80px + env(safe-area-inset-bottom));
  }
  .contact-service {
    border-top: 1px solid #e5e5e5;
  }
  &__submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #e5e5e5;
  }
}
</style>
