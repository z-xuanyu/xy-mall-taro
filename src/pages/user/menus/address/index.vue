<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:59:04
 * @LastEditTime: 2022-05-30 18:31:55
 * @Description: 用户地址
-->
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'UserAddressPage',
})

const data = ref([
  {
    testid: 3,
    testaddressName: '阿宇_Corder',
    phone: '123****4567',
    defaultAddress: false,
    fullAddress: '广东省广州市天河区龙洞西大街4号',
  },
  {
    testid: 4,
    testaddressName: '胡歌',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '上海市通州区测试测试测试测试测试测试测试测试测试',
  },
])

const dataMapOptions = ref({
  id: 'testid',
  addressDetail: 'testaddressDetail',
  addressName: 'testaddressName',
})

function delClick() {
  visibleDel.value = !visibleDel.value
}

function editClick() {
  Taro.navigateTo({
    url: '/pages/user/menus/address/edit/index',
  })
}

function itemClick() {}

function addAddress() {
  Taro.navigateTo({
    url: '/pages/user/menus/address/edit/index',
  })
}

const visibleDel = ref(false)

function onCancel() {}
function onOk() {}
</script>

<template>
  <view class="user-address-page">
    <nut-addresslist
      :data="data"
      swipe-edition
      show-bottom-button
      @handelItem="itemClick"
      @handelEditIcon="editClick"
      @handelDelIcon="delClick"
      @swipeDelClick="delClick"
      @addAddressClick="addAddress"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
    <nut-dialog
      content="确认要删除该地址吗？"
      v-model:visible="visibleDel"
      @cancel="onCancel"
      @ok="onOk"
    />
  </view>
</template>

<style lang="scss">
.user-address-page {
  .nut-addresslist__bottom {
    background-color: #f5f5f5;
    z-index: 999;
  }
}
</style>
