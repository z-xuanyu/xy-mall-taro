<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 17:19:27
 * @LastEditTime: 2022-05-17 10:02:20
 * @Description: Modify here please
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { PropType, ref, onMounted } from 'vue'

interface jumpItem {
  showCartNum: boolean
  title: string
  iconName: string
  url: string
}

// eslint-disable-next-line no-undef
const props = defineProps({
  soldout: {
    // 是否下架
    type: Boolean,
    default: false,
  },
  jumpArray: {
    type: Array as PropType<jumpItem[]>,
    default: () => [
      { title: '首页', iconName: 'home', url: '/pages/index/index', showCartNum: false },
      { title: '购物车', iconName: 'cart', url: '/pages/cart/index', showCartNum: true },
    ],
  },
  // 是否有库存
  isStock: {
    type: Boolean,
    default: true,
  },
  // 是否开启按钮插槽
  isSlotButton: {
    type: Boolean,
    default: false,
  },
  // 购物车气泡数量
  shopCartNum: {
    type: Number,
    default: 0,
  },
  buttonType: {
    type: Number,
    default: 1,
  },
  minDiscountPrice: {
    type: String,
    default: '',
  },
  minSalePrice: {
    type: String,
    default: '',
  },
})

function toAddCart() {
  if (!props.isStock) return
  base.value = true
}

function toBuyNow() {
  if (!props.isStock) return
  base.value = true
}

function toNav(item: jumpItem) {
  Taro.switchTab({ url: item.url })
}

// sku
const base = ref(false)
const sku = ref([])
const goods = ref({})
function selectSku(ss: any) {
  const { sku, skuIndex, parentSku, parentIndex } = ss
  console.log(skuIndex, parentSku, 585555)
  if (sku.disable) return false
  sku.value[parentIndex].list.forEach((s) => {
    s.active = s.id === sku.id
  })
  goods.value = {
    skuId: sku.id,
    price: '4599.00',
    imagePath:
      '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg',
  }
}
function clickBtnOperate(op: string) {
  console.log('点击了操作按钮', op)
}
function close() {
  console.log('关闭')
}

onMounted(() => {
  Taro.request({
    url: 'https://storage.360buyimg.com/nutui/3x/data.js',
    success: (res) => {
      const { Sku, Goods, imagePathMap } = res.data
      goods.value = Goods
      sku.value = Sku
      console.log(imagePathMap)
    },
  })
})
</script>

<template>
  <view class="buy-bar">
    <view class="flex soldout justify-center items-center" v-if="soldout || !isStock">
      {{ soldout ? '商品已下架' : '商品已售馨' }}
    </view>
    <view class="footer-cont flex justify-between wr-class">
      <view class="flex justify-between bottom-operate-left" v-if="jumpArray.length">
        <view
          v-for="(item, index) in jumpArray"
          :key="index"
          class="icon-warp operate-wrap"
          @click="toNav(item)"
        >
          <view>
            <text v-if="shopCartNum > 0 && item.showCartNum" class="tag-cart-num">
              {{ shopCartNum > 99 ? '99+' : shopCartNum }}
            </text>
            <nut-icon :name="item.iconName" size="20" />
            <view class="operate-text">{{ item.title }}</view>
          </view>
        </view>
      </view>
      <block v-if="buttonType === 1">
        <view class="flex buy-buttons">
          <view
            class="bar-separately"
            :class="soldout || !isStock ? 'bar-addCart-disabled' : ''"
            @click="toAddCart"
          >
            加入购物车
          </view>
          <view
            class="bar-buy"
            :class="soldout || !isStock ? 'bar-buyNow-disabled' : ''"
            @click="toBuyNow"
          >
            立即购买
          </view>
        </view>
      </block>
      <block v-if="isSlotButton">
        <slot name="buyButton" />
      </block>
    </view>
    <!-- sku -->
    <nut-sku
      v-model:visible="base"
      :sku="sku"
      :goods="goods"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>
  </view>
</template>

<style lang="scss">
.footer-cont {
  background-color: #fff;
  padding: 8px;
}

.icon-warp {
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.operate-wrap {
  position: relative;
}

.bottom-operate-left {
  width: 100%;
}

.bottom-operate-left .icon-warp {
  width: 50%;
}

.tag-cart-num {
  display: inline-block;
  position: absolute;
  left: 25px;
  right: auto;
  top: 3px;
  color: #fff;
  line-height: 12px;
  text-align: center;
  z-index: 99;
  white-space: nowrap;
  min-width: 14px;
  border-radius: 7px;
  background-color: #fa550f !important;
  font-size: 10px;
  font-weight: 400;
  padding: 1px 3px;
}

.operate-text {
  color: #666;
  font-size: 10px;
}

.soldout {
  height: 40px;
  background: rgba(170, 170, 170, 1);
  width: 100%;
  color: #fff;
}

.addCart-disabled,
.bar-addCart-disabled {
  background: rgba(221, 221, 221, 1) !important;
  color: #fff !important;
  font-size: 14px;
}

.buyNow-disabled,
.bar-buyNow-disabled {
  background: rgba(198, 198, 198, 1) !important;
  color: #fff !important;
  font-size: 14px;
}

.bar-separately,
.bar-buy {
  width: 127px;
  height: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bar-separately {
  background: #ffece9;
  color: #fa4126;
  border-radius: 20px 0 0 20px;
}

.bar-buy {
  background-color: #fa4126;
  border-radius: 0px 20px 20px 0px;
}
</style>
