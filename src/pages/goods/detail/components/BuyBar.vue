<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 17:19:27
 * @LastEditTime: 2022-07-01 11:43:12
 * @Description: 商品sku选择组件
-->
<script setup lang="ts">
import { switchTab, showToast, navigateTo } from '@tarojs/taro'
import { type PropType, ref, onMounted, computed } from 'vue'
import { addCart } from '@/api/cart';
import { useUserStore } from '@/stores/modules/user'
import { useCart, fetchCart } from '@/hooks/useCart'
import { setCache } from '@/utils/storageCache';

const useUser = useUserStore()
const { shopCartNum } = useCart()

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
  // 商品信息
  info: {
    type: Object,
    default: () => ({}),
  },
})

// 是否立即购买
const isBuyNow = ref<boolean>(false)

const isLogin = computed(() => useUser.isLogin)

// sku
const base = ref(false)
const sku = ref<any>([])
const spu = ref([])
const goods = ref<any>({})
// 当前选中sku
const currentSelectSku = ref<any>({})
function selectSku(ss: any) {
  if (ss.sku.disable) return false
  // 选中
  sku.value[ss.parentIndex].list.forEach((item: any) => {
    item.active = item.id === ss.sku.id
  })
  // 设置商品信息
  findCurrentSku()
}

onMounted(() => {
  setTimeout(()=>{
    const { skuAttrs, skuType, skus, costPrice, pic, _id } = props.info
    spu.value = skus
    // 多规格
    if(skuType === 2) {
      sku.value = skuAttrs.map((s) => {
      return {
        id: s._id,
        name: s.name,
        list: s.values.map((v, vIdx) => {
          return {
            id: s._id + vIdx,
            name: v,
            active: !vIdx?true:false,
            disable: false,
          }
          }),
        }
      })
      findCurrentSku()
      return false
    }
    // 单规格
    goods.value = {
      skuId: _id,
      price: costPrice,
      imagePath: pic,
    }
  },500)
})

// 查找当前选择规格价格
function findCurrentSku() {
  const list: Array<string> = []

  sku.value.forEach((item: any)=>{
    item.list.forEach(s=>{
      if(s.active) {
        list.push(s.name)
      }
    })
  })
  // 查询选择spu
  const spuInfo: any = spu.value.find((item:any)=> list.every(v=> item.skuNames.includes(v)))
  currentSelectSku.value = spuInfo
  goods.value = {
    skuId: spuInfo._id,
    price: spuInfo.price,
    imagePath: spuInfo.image,
  }
}
// sku确认
async function clickBtnOperate(op:any) {
  // 是否登录
  if (!isLogin.value) {
    await useUser.handleMiniLogin()
  }

  // 商品数量
  const { value } = op;
  const data = {
    productId: props.info._id,
    productName: props.info.title,
    productPic: goods.value.imagePath,
    num: ~~value,
    skuName: props.info.skuType === 2 ? currentSelectSku.value?.skuNames.join('-') : '默认',
    price: goods.value.price,
    skuId: props.info.skuType === 2 ? currentSelectSku.value._id : null,
  }
  if(isBuyNow.value) {
    const selectPayGoods = [data]
    setCache('selectPayGoods', selectPayGoods)
     navigateTo({
        url: '/pages/order/order-confirm/index?type=buyNow',
     })
    return false
  }
  await addCart(data)
  fetchCart()
  base.value = false
  showToast({title: '加入成功', icon: 'success'})
}
function close() {
  console.log('关闭')
}



// 加入购物车
function toAddCart() {
  if (!props.isStock) return
  base.value = true
  isBuyNow.value = false
}

// 立即购买
function toBuyNow() {
  if (!props.isStock) return
  base.value = true
  isBuyNow.value = true
}

function toNav(item: jumpItem) {
  switchTab({ url: item.url })
}
</script>

<template>
  <view class="buy-bar">
    <view class="flex soldout justify-center items-center" v-if="soldout || !isStock">
      {{ soldout ? '商品已下架' : '商品已售馨' }}
    </view>
    <view class="footer-cont flex justify-between items-center wr-class">
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
      style="height: auto"
    >
      <template #sku-header-extra>
        <span class="nut-sku-header-right-extra">库存剩余：{{ currentSelectSku.inventory }} </span>
      </template>
    </nut-sku>
  </view>
</template>

<style lang="scss">
.nut-sku {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 20000;
}
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
  font-size: 14px;
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
