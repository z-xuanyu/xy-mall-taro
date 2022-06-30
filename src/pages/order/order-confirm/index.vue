<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 14:14:14
 * @LastEditTime: 2022-06-30 14:40:13
 * @Description: 确认订单
-->
<script lang="ts">
export default {
  name: 'OrderConfirmPage',
}
</script>
<script setup lang="ts">
import { navigateTo, useDidShow, useRouter, showToast } from '@tarojs/taro'
import AddressCard from './components/AddressCard.vue'
import { getCache } from '@/utils/storageCache'
import { getUserAddress, findUserAddress } from '@/api/user'
import { createOrder } from '@/api/order'
import { ref } from 'vue'
import { Address } from './type'

const route = useRouter()

// 商品列表
const goodsList = getCache('selectPayGoods') || []
//收货地址
const addressData = ref<Address | undefined>({
  _id: '',
  name: '',
  phone: '',
  address: '',
  detail: '',
  isDefault: false,
})

useDidShow(() => {
  if (route.params.id) {
    findUserAddress(route.params.id).then((res: Address) => {
      addressData.value = res
    })
  } else {
    getUserAddress().then((res: Array<Address>) => {
      addressData.value = res.find((item) => item.isDefault)
    })
  }
})

// 跳转发票页面
function jumpReceipt(): void {
  navigateTo({
    url: '/pages/order/receipt/index',
  })
}

// 提交订单
async function onSubmitOrder() {
  if (!addressData.value?._id) {
    return showToast({
      title: '请选择收货地址',
      icon: 'none',
    })
  }
  try {
    const data = {
      way: 0,
      products: goodsList,
      cartIds: goodsList.map((item) => item._id),
      addressId: addressData.value?._id as string,
      paymentType: 1,
      source: '小程序',
      totalPrice: totalPrice,
      payment: totalPrice,
      remark: '小程序订单测试',
    }
    await createOrder(data)
    navigateTo({
      url: '/pages/order/pay-success/index',
    })
  } catch (error) {
    console.log(error)
    showToast({
      title: '提交订单失败',
      icon: 'none',
    })
  }
}

// 商品总额
const totalPrice = goodsList.reduce((total, item) => {
  return total + item.price * item.num
}, 0)
</script>

<template>
  <view class="order-confirm-page pb-10 mb-10">
    <AddressCard :addressData="addressData" />
    <!-- 商品列表 -->
    <view class="goods-list px-3 mt-2 pb-2 bg-white">
      <nut-cell icon="shop" title="XYMALL旗舰店"></nut-cell>
      <view class="goods-list__item flex mb-3" v-for="item in goodsList" :key="item._id">
        <image class="goods-img" :src="item.productPic" />
        <view class="flex-1 ml-2">
          <text class="goods-list__item-title text-sm text-overflow-2">
            {{ item.productName }}
          </text>
          <view class="goods-list__item-price my-1 text-base">
            <text>
              <text>¥</text>
              <text class="text-sm">{{ item.price }}</text>
              x {{ item.num }}</text
            >
          </view>
          <view class="goods-list__item-sku text-xs text-grey">
            <text>规格:</text>
            <text>{{ item.skuName }}</text>
          </view>
        </view>
      </view>
    </view>
    <!-- cell -->
    <view class="pay-detail px-3 text-sm bg-white pb-2 mt-2">
      <view class="flex justify-between py-2 border-b">
        <text>商品总额</text>
        <text>￥{{ totalPrice }}</text>
      </view>
      <view class="flex justify-between py-2 border-b">
        <text>运费</text>
        <text>免运费</text>
      </view>
      <view class="flex justify-between py-2 border-b">
        <text>活动优惠</text>
        <text class="text-red">-￥11.00</text>
      </view>
      <view class="flex justify-between py-2 border-b">
        <text>优惠券</text>
        <view>
          <text>选择优惠券</text>
          <nut-icon size="12" name="right" />
        </view>
      </view>
      <view class="flex justify-between py-2 border-b">
        <text>发票</text>
        <view @click="jumpReceipt">
          <text>暂不开发票</text>
          <nut-icon size="12" name="right" />
        </view>
      </view>
      <view class="flex justify-between py-2 border-b">
        <text>订单备注</text>
        <view>
          <text>选填，建议先和商家沟通确认</text>
          <nut-icon size="12" name="right" />
        </view>
      </view>
      <view class="text-right py-2 ">
        <text class="text-sm mr-2 text-grey">共{{ goodsList.length }}件</text>
        <text class="text-sm">小计</text>
        <nut-price :price="totalPrice" size="normal" :thousands="true" />
      </view>
    </view>
    <view class="submit-btn px-3 bg-white safe-area-bottom items-end flex justify-between">
      <nut-price class="pb-2" :price="totalPrice" :thousands="true" />
      <view class="text-right py-2">
        <nut-button type="primary" @click="onSubmitOrder">提交订单</nut-button>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.order-confirm-page {
  padding-bottom: 50px;
  .border-b {
    border-bottom: 1px solid #f6f6f6;
  }
  .goods-list {
    .nut-cell {
      margin-bottom: 0;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
    }
    .nut-cell__title {
      margin-left: 10px;
    }
    &__item {
      .goods-img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
      }
    }
  }
  .pay-detail {
    padding-bottom: 60px;
  }
  .submit-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
