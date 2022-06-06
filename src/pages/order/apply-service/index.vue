<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 15:40:07
 * @LastEditTime: 2022-05-31 09:56:45
 * @Description: 订单售后类型选择
-->
<script lang="ts">
import { Uploader } from '@nutui/nutui-taro'
import { defineComponent, ref } from 'vue'
import ApplyServiceTypeCell from './components/ApplyServiceTypeCell.vue'
import PopupCellRadio from './components/PopupCellRadio.vue'

export default defineComponent({
  name: 'OrderApplyServicePage',
  components: {
    ApplyServiceTypeCell,
    [Uploader.name]: Uploader,
    PopupCellRadio,
  },
  setup() {
    const goodsNum = ref<number>(1)
    const content = ref<string>('')
    const uploadUrl = ref<string>('')
    const type = ref<number>(0)

    const statusColunms = [
      {
        value: '1',
        label: '未收到货',
      },
      {
        value: '2',
        label: '已收到货',
      },
    ]

    const reasonColunms = [
      {
        value: '1',
        label: '商品破损',
      },
      {
        value: '2',
        label: '商品错发',
      },
      {
        value: '3',
        label: '商品与描述不符',
      },
      {
        value: '4',
        label: '商品质量问题',
      },
      {
        value: '5',
        label: '其他',
      },
    ]

    function onTypeChange(value: number): void {
      type.value = value
    }

    const visibleEidtPrice = ref(false)
    function onEidtPriceOk() {}
    return {
      goodsNum,
      content,
      uploadUrl,
      type,
      onTypeChange,
      statusColunms,
      reasonColunms,
      visibleEidtPrice,
      onEidtPriceOk,
    }
  },
})
</script>

<template>
  <view class="order-apply-service">
    <!-- 商品卡片 -->
    <view class="goods-card flex p-4 bg-white">
      <image class="goods-img" src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png" />
      <view class="flex-1 ml-2">
        <view class="text-overflow-2 text-xs">
          白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙
        </view>
        <view class="text-grey text-xs">
          颜色：橙色，2XL
        </view>
        <view class="flex justify-between items-center">
          <view class="flex items-end">
            <view class="text-xs">￥</view>
            <view class="text-base">269.00</view>
          </view>
          <view class="text-xs text-grey">x1</view>
        </view>
      </view>
    </view>
    <!-- 选择售后类型  -->
    <template v-if="type === 0">
      <ApplyServiceTypeCell @change="onTypeChange" />
    </template>
    <!-- 售后表单 -->
    <template v-if="type !== 0">
      <view class="my-1 mt-3">
        <PopupCellRadio title="商品收获状态" popupTitle="请选择收货状态" :colunms="statusColunms" />
        <PopupCellRadio title="退款原因" popupTitle="请选择退款原因" :colunms="reasonColunms" />
      </view>
      <view class="my-1">
        <nut-cell-group>
          <nut-cell title="退款商品数量">
            <template #link>
              <nut-inputnumber v-model="goodsNum" />
            </template>
          </nut-cell>
          <nut-cell>
            <view class="flex justify-between w-full">
              <view class="mb-1">
                <view>退款金额</view>
                <view class="text-xs text-grey">最多可申请退款￥269.00，含发货运费￥0.00</view>
              </view>
              <view>
                <nut-price :price="269" size="normal" :thousands="true" />
                <view
                  class="flex items-center justify-end text-xs text-grey"
                  @click="visibleEidtPrice = true"
                >
                  <text>修改</text>
                  <nut-icon size="10" name="right"></nut-icon>
                </view>
              </view>
            </view>
          </nut-cell>
        </nut-cell-group>
      </view>
      <!-- 退款说明 -->
      <view class="my-1 mb-10">
        <nut-cell-group>
          <nut-cell title="退款说明"> </nut-cell>
          <nut-cell>
            <nut-textarea
              class="rounded-xxs text-white"
              v-model="content"
              max-length="200"
              limit-show
              placeholder="退款说明(选填)..."
            />
          </nut-cell>
          <nut-cell
            ><!-- 图片上传 -->
            <view class="upload-img"> <nut-uploader :url="uploadUrl"></nut-uploader> </view
          ></nut-cell>
        </nut-cell-group>
      </view>
    </template>
    <!-- 修改退款金额 -->
    <nut-dialog
      title="退款金额"
      content="这是基础弹框。"
      v-model:visible="visibleEidtPrice"
      @ok="onEidtPriceOk"
    >
      <view class="text-left">
        <view class="flex price-input items-center text-xl pb-2">
          <text>￥</text>
          <input type="text" />
        </view>
        <view class="text-xs pt-2 text-grey">
          最多可申请退款￥269.00，含发货运费0.00
        </view>
      </view>
    </nut-dialog>
    <!-- 提交按钮 -->
    <view class="submit-btn pt-2 bg-white px-4 safe-area-bottom">
      <nut-button class="mb-3" block type="primary">提交</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.order-apply-service {
  padding-bottom: 50px;
  .goods-card {
    .goods-img {
      width: 80px;
      height: 80px;
      border-radius: 3px;
    }
  }
  .nut-textarea {
    background-color: #f5f5f5;
  }
  .nut-dialog__header {
    text-align: left;
  }
  .price-input {
    border-bottom: 1px solid #f5f5f5;
  }
  .submit-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
