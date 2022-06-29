<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:59:04
 * @LastEditTime: 2022-06-29 15:11:01
 * @Description: 用户地址
-->
<script lang="ts">
export default {
  name: 'UserAddressPage',
}
</script>
<script setup lang="ts">
import { navigateTo, showToast, useDidShow } from '@tarojs/taro'
import { ref } from 'vue'
import { getUserAddress, deleteUserAddress } from '@/api/user'

interface AddressItem {
  // 地址ID
  id: string
  // 地址收货人
  addressName: string
  // 地址电话
  phone: string
  // 地址
  fullAddress: string
  // 是否默认地址
  defaultAddress: boolean
}
const isLoading = ref(true)

useDidShow(() => {
  fetchData()
})

// 获取用户收货地址
async function fetchData() {
  const res = await getUserAddress()
  data.value = res.map((item: any) => ({
    id: item._id,
    addressName: item.name,
    defaultAddress: item.isDefault,
    phone: item.phone,
    fullAddress: item.address,
  }))
  isLoading.value = false
}

// 用户地址列表
const data = ref<AddressItem[]>([])
// 删除地址ID
const deleteId = ref<string>('')
const dataMapOptions = ref({
  id: 'id',
  addressDetail: 'addressDetail',
  addressName: 'addressName',
})

// 删除
function delClick(_: Event, item: AddressItem) {
  visibleDel.value = !visibleDel.value
  deleteId.value = item.id
}

// 编辑
function editClick(_: Event, item: AddressItem) {
  navigateTo({
    url: `/pages/user/menus/address/edit/index?id=${item.id}`,
  })
}

function itemClick() {}

// 添加地址
function addAddress() {
  navigateTo({
    url: '/pages/user/menus/address/edit/index',
  })
}

const visibleDel = ref(false)

function onCancel() {}
// 确认删除
async function onOk() {
  await deleteUserAddress(deleteId.value)
  await fetchData()
  showToast({
    title: '删除成功',
    icon: 'success',
  })
}
</script>

<template>
  <view class="user-address-page">
    <template v-if="data.length">
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
    </template>
    <view class="no-data flex justify-center" v-if="!data.length && !isLoading">
      <view>
        <image src="../../../../assets/images/empty/list.png"></image>
        <view class="text-grey text-center text-xs mb-10">暂无地址</view>
        <nut-button type="primary" block @click="addAddress">添加地址</nut-button>
      </view>
    </view>
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
