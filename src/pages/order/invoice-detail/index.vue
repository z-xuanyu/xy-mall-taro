<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-19 15:40:03
 * @LastEditTime: 2022-05-19 16:17:32
 * @Description: 订单发票详情
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'OrderInvoiceDetailPage',
})

interface InvoiceItemType {
  invoiceType: string
  buyerName: string
  buyerTaxNo: string
  ontentType: string
  money: string
  email: string
  buyerPhone: string
  isInvoice: boolean
}

const invoice = ref<InvoiceItemType>({
  invoiceType: '',
  buyerName: '',
  buyerTaxNo: '',
  ontentType: '',
  money: '',
  email: '',
  buyerPhone: '',
  isInvoice: false,
})
</script>

<template>
  <view class="invoice-detail">
    <view class="invoice-detail-box">
      <view class="invoice-detail-title">发票详情</view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">发票类型</view>
        <view class="invoice-detail-box-value">{{ invoice.invoiceType }}</view>
      </view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">发票抬头</view>
        <view class="invoice-detail-box-value">{{ invoice.buyerName }}</view>
      </view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">纳税人识别号</view>
        <view class="invoice-detail-box-value">{{ invoice.buyerTaxNo }}</view>
      </view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">发票内容</view>
        <view class="invoice-detail-box-value">{{ invoice.ontentType }}</view>
      </view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">发票金额</view>
        <view class="invoice-detail-box-value">{{ invoice.money }}</view>
      </view>
    </view>
    <view class="invoice-detail-box">
      <view class="invoice-detail-title">收票人信息</view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">邮箱</view>
        <view class="invoice-detail-box-value">{{ invoice.email }}</view>
      </view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">手机号</view>
        <view class="invoice-detail-box-value">{{ invoice.buyerPhone }}</view>
      </view>
      <view class="invoice-detail-box-row">
        <view class="invoice-detail-box-title">开票状态</view>
        <view class="invoice-detail-box-value">{{ invoice.isInvoice ? '已开票' : '未开票' }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.invoice-detail .invoice-detail-box {
  background-color: #fff;
  padding: 12px 16px;
  margin-top: 12px;
}

.invoice-detail-title {
  font-size: 14px;
  font-weight: 600;
}

.invoice-detail-box-row {
  display: flex;
  margin-top: 22px;
}

.invoice-detail-box-title {
  font-size: 13px;
  color: #666666;
  width: 78px;
  margin-right: 16px;
}

.invoice-detail-box-value {
  font-size: 13px;
  color: #333333;
}
</style>
