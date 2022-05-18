<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 17:43:18
 * @LastEditTime: 2022-05-18 10:09:56
 * @Description: Modify here please
-->
<script setup lang="ts">
import { PropType } from 'vue'
import { Badge } from '@nutui/nutui-taro'

interface OrderTagInfoItem {
  orderNum: number
  title: string
  iconName: string
}
// eslint-disable-next-line no-undef
defineProps({
  orderTagInfos: {
    type: Array as PropType<OrderTagInfoItem[]>,
    default: () => [],
  },

  title: {
    type: String,
    default: '我的订单',
  },

  desc: {
    type: String,
    default: '全部订单',
  },

  isTop: {
    type: Boolean,
    default: true,
  },

  classPrefix: {
    type: String,
    default: 'wr',
  },
})

// eslint-disable-next-line no-undef
const emits = defineEmits(['onClickTop', 'onClickItem'])

function onClickItem(item) {
  emits('onClickItem', item)
}

function onClickTop() {
  emits('onClickTop')
}
</script>

<template>
  <view class="order-group">
    <nut-cell-group v-if="isTop">
      <nut-cell title="我的订单" desc="全部订单" @click="onClickTop" is-link />
    </nut-cell-group>
    <view class="order-group__content">
      <view
        class="order-group__item"
        v-for="(item, index) in orderTagInfos"
        :key="index"
        @click="onClickItem(item)"
      >
        <view class="order-group__item__icon icon-class">
          <Badge :value="item.orderNum" :max="99" color="#FF4646" top="5" right="5">
            <nut-icon :name="item.iconName" size="25px" />
          </Badge>
        </view>
        <view class="order-group__item__title title-class">{{ item.title }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.order-group {
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  .nut-cell {
    padding: 15px 8px 10px 15px;
    &__title {
      font-weight: bold;
    }
  }
  &__top {
    padding: 12px 9px 12px 16px;
    border-radius: 8px 8px 0 0;
    &__titile {
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
    }
    &__note {
      font-size: 14px;
    }
  }
  &__content {
    overflow: hidden;
    width: 100%;
    height: 75px;
    display: flex;
    background-color: #fff;
    border-radius: 0 0 8px 8px;
  }
  &__item {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-top: -10px;
    &:first-child {
      border-radius: 0 0 0 8px;
    }
    &:last-child {
      border-radius: 0 0 8px 0;
    }
    &__title {
      font-size: 12px;
      color: #666;
      line-height: 16px;
    }
    &__icon {
      margin-bottom: 5px;
      width: 28px;
      height: 28px;
      position: relative;
    }
  }
  &__left {
    margin-right: 0;
  }
}
</style>
