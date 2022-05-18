<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-18 16:35:31
 * @LastEditTime: 2022-05-18 17:46:07
 * @Description: Modify here please
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'ReceiptPage',
})

const invoiceJson = ref({
  info: [
    '1.根据当地税务局的要求，开具有效的企业发票需填写税务局登记证号。开具个人发票不需要填写纳税人识别码。 ',
    '2.电子普通发票： 电子普通发票是税局认可的有效首付款凭证，其法律效力、基本用途及使用规定同纸质发票，如需纸质发票可自行下载打印。 ',
    '3.增值税专用发票： 增值税发票暂时不可开，可查看《开局增值税发票》或致电400-633-6868。',
  ],
  codeTitle: [
    '1.什么是纳税人识别号/统一社会信用代码？ 纳税人识别号，一律由15位、17位、18或者20位码（字符型）组成，其中：企业、事业单位等组织机构纳税人，以国家质量监督检验检疫总局编制的9位码（其中区分主码位与校检位之间的“—”符省略不打印）并在其“纳税人识别号”。国家税务总局下达的纳税人代码为15位，其中：1—2位为省、市代码，3—6位为地区代码，7—8位为经济性质代码，9—10位行业代码，11—15位为各地区自设的顺序码。',
    '2.入户获取/知晓纳税人识别号/统一社会信用代码？ 纳税人识别号是税务登记证上的号码，通常简称为“税号”，每个企业的纳税人识别号都是唯一的。这个属于每个人自己且终身不变的数字代码很可能成为我们的第二张“身份证”。  ',
  ],
})

const receiptIndex = ref(0)
const receipts = ref([
  { title: '不开发票', id: 0, name: 'receipt' },
  { title: '电子发票', id: 1, name: 'receipt' },
])
function onReceiptBtn(id: number) {
  receiptIndex.value = id
}

const addressTagsIndex = ref(0)
const addressTags = ref([
  { title: '个人', id: 0, name: 'addressTags', type: 1 },
  { title: '公司', id: 1, name: 'addressTags', type: 2 },
])
function onAddressTagBtn(id: number) {
  addressTagsIndex.value = id
}

const goodsClassesIndex = ref(0)
const goodsClasses = ref([
  { title: '商品明细', id: 0, name: 'goodsClasses' },
  { title: '商品类别', id: 1, name: 'goodsClasses' },
])
function onGoodsClassBtn(id: number) {
  goodsClassesIndex.value = id
}

const showNotice = ref<boolean>(false)
const showIdNo = ref<boolean>(false)
</script>

<template>
  <view class="receipt-page">
    <nut-cell title="发票">
      <template #link>
        <view
          class="receipt-page__btn"
          v-for="item in receipts"
          :class="receiptIndex === item.id ? 'receipt-page__btn--active' : ''"
          :key="item.id"
          @click="onReceiptBtn(item.id)"
        >
          {{ item.title }}
        </view>
      </template>
    </nut-cell>
    <!-- 发票抬头 -->
    <block v-if="receiptIndex === 1">
      <nut-cell title="发票抬头" class="mb-0">
        <template #link>
          <view
            class="receipt-page__btn"
            v-for="item in addressTags"
            :class="addressTagsIndex === item.id ? 'receipt-page__btn--active' : ''"
            :key="item.id"
            @click="onAddressTagBtn(item.id)"
          >
            {{ item.title }}
          </view>
        </template>
      </nut-cell>
      <block v-if="addressTagsIndex === 0">
        <nut-input placeholder="请输入您的姓名" label="姓名" />
        <nut-input placeholder="请输入您的手机号" label="手机号" />
        <nut-input placeholder="请输入邮箱用于接收电子" label="电子邮箱" />
      </block>
      <block v-if="addressTagsIndex === 1">
        <nut-input placeholder="请输入公司名称" label="公司名称" />
        <nut-input
          placeholder="请输入纳税人识别号"
          label="识别号"
          right-icon="ask"
          @click-right-icon="showIdNo = true"
        />
        <nut-input placeholder="请输入邮箱用于接收电子" label="电子邮箱" />
      </block>
    </block>
    <!-- 发票内容 -->
    <block v-if="receiptIndex === 1">
      <nut-cell title="发票内容" class="mb-0">
        <template #link>
          <view
            class="receipt-page__btn"
            v-for="item in goodsClasses"
            :class="goodsClassesIndex === item.id ? 'receipt-page__btn--active' : ''"
            :key="item.id"
            @click="onGoodsClassBtn(item.id)"
          >
            {{ item.title }}
          </view>
        </template>
      </nut-cell>
      <view class="text-grey text-xs px-3 pb-3 bg-white">
        发票内容将显示详细商品名称与价格信息，发票金额为实际支付金额，不包含优惠等扣减金额
      </view>
      <view class="flex px-3 mt-5 items-center text-xs text-grey">
        <text class="mr-1"> 发票须知</text>
        <nut-icon name="ask" @click="showNotice = true" size="10"></nut-icon>
      </view>
    </block>
    <!-- 底部确认按钮 -->、
    <view class="bg-white submit-btn safe-area-bottom">
      <view class="p-2">
        <nut-button block type="primary">确认</nut-button>
      </view>
    </view>
    <!-- dialog -->
    <nut-dialog no-cancel-btn title="发票须知" ok-text="我知道了" v-model:visible="showNotice">
      <view class="py-3 text-left" v-for="(item, index) in invoiceJson.info" :key="index">
        {{ item }}
      </view>
    </nut-dialog>

    <nut-dialog
      no-cancel-btn
      title="纳税人识别号说明"
      ok-text="我知道了"
      v-model:visible="showIdNo"
    >
      <view class="py-3 text-left" v-for="(item, index) in invoiceJson.codeTitle" :key="index">
        {{ item }}
      </view>
    </nut-dialog>
  </view>
</template>

<style lang="scss">
.receipt-page {
  .nut-input {
    padding: 15px 20px;
  }
  &__btn {
    width: 64px;
    background: #f5f5f5;
    font-size: 12px;
    color: #333;
    margin-left: 11px;
    text-align: center;
    border-radius: 4px;
    position: relative;
    border: 1px solid #f5f5f5;
    &--active {
      background-color: transparent;
      border-color: #fa4126;
      color: #fa4126;
    }
  }
  .submit-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
