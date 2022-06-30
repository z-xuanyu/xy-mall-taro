<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:58:12
 * @LastEditTime: 2022-06-29 15:41:25
 * @Description: 用户地址编辑
-->
<script lang="ts">
export default {
  name: 'UserAddressEditPage',
}
</script>
<script setup lang="ts">
import {
  chooseAddress,
  chooseLocation,
  showToast,
  navigateBack,
  useRouter,
  setNavigationBarTitle,
} from '@tarojs/taro'
import { ref, onMounted } from 'vue'
import { getPermission } from '@/utils/getPermission'
import { addUserAddress, findUserAddress, updateUserAddress } from '@/api/user'

const router = useRouter()
const addressId = router.params.id
if (addressId) {
  setNavigationBarTitle({
    title: '编辑地址',
  })
}

onMounted(async () => {
  if (addressId) {
    const info = await findUserAddress(addressId)
    addresInfo.value = info
  }
})
const showPopup = ref<boolean>(false)

const province = ref([
  { id: 1, name: '北京' },
  { id: 2, name: '广西' },
  { id: 3, name: '江西' },
  { id: 4, name: '四川' },
])

const city = ref([
  { id: 7, name: '朝阳区' },
  { id: 8, name: '崇文区' },
  { id: 9, name: '昌平区' },
  { id: 6, name: '石景山区' },
])

const country = ref([
  { id: 3, name: '八里庄街道' },
  { id: 9, name: '北苑' },
  { id: 4, name: '常营乡' },
])

const town = ref([])

function onChange() {}

function close() {}

const addresInfo = ref({
  name: '',
  phone: '',
  address: '',
  detail: '',
  isDefault: false,
})

// 获取用户收货地址
async function getUserAddress() {
  await getPermission({ code: 'scope.address', name: '通讯地址' })
  chooseAddress({
    success: function(res) {
      console.log(res, 78888)
      const { userName, telNumber, provinceName, cityName, countyName, detailInfo } = res
      addresInfo.value.name = userName
      addresInfo.value.phone = telNumber
      addresInfo.value.address = provinceName + cityName + countyName
      addresInfo.value.detail = detailInfo
      console.log(addresInfo.value, 'addresInfo.value')
    },
  })
}
// 获取本地地址
async function clickRightIcon() {
  await getPermission({ code: 'scope.userLocation', name: '地址位置' })
  chooseLocation({
    success: function(res) {
      console.log(res, 7788)
      addresInfo.value.address = res.address
    },
  })
}

// 提交
async function onSubmit() {
  if (!addresInfo.value.name) {
    showToast({
      title: '请输入姓名',
      icon: 'none',
    })
    return
  }
  if (!addresInfo.value.phone) {
    showToast({
      title: '请输入手机号',
      icon: 'none',
    })
    return
  }
  if (!addresInfo.value.address) {
    showToast({
      title: '请输入地址',
      icon: 'none',
    })
    return
  }
  if (addressId) {
    await updateUserAddress(addressId, addresInfo.value)
  } else {
    await addUserAddress(addresInfo.value)
  }
  navigateBack()
}
</script>

<template>
  <view class="address-edit-page">
    <view class="address-edit-page__weixin-address">
      <nut-cell-group>
        <nut-cell title="获取微信收货地址" is-link @click="getUserAddress">
          <template #icon>
            <nut-icon
              font-class-name="myicon"
              class-prefix="myicon"
              color="green"
              name="weixin"
              size="28"
              class="mr-2"
            ></nut-icon>
          </template>
        </nut-cell>
      </nut-cell-group>
    </view>
    <view class="address-edit-page__form">
      <nut-input label="收货人" v-model="addresInfo.name" placeholder="您的姓名" />
      <nut-input label="手机号" v-model="addresInfo.phone" placeholder="联系您的手机号" />
      <view class="flex items-center justify-between">
        <nut-input
          label="地址"
          v-model="addresInfo.address"
          readonly
          placeholder="请选择地址"
          @click-input="showPopup = true"
        />
        <view class="bg-white locationg-icon">
          <nut-icon @click="clickRightIcon" name="locationg3"></nut-icon>
        </view>
      </view>
      <nut-input
        label="留言"
        type="textarea"
        show-word-limit
        rows="1"
        v-model="addresInfo.detail"
        maxLength="20"
        placeholder="门牌号等（例如：10栋1001号）"
      />
    </view>
    <view class="address-edit-page__default">
      <nut-cell-group>
        <nut-cell title="设置默认收货地址">
          <template #link>
            <nut-checkbox v-model="addresInfo.isDefault" />
          </template>
        </nut-cell>
      </nut-cell-group>
    </view>
    <view class="address-edit-page__submit px-2 mt-6">
      <nut-button type="primary" block @click="onSubmit">保存</nut-button>
    </view>
    <!-- 选择地址 -->
    <nut-address
      v-model:visible="showPopup"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @change="onChange"
      @close="close"
      custom-address-title="请选择所在地区"
    ></nut-address>
  </view>
</template>

<style lang="scss">
.address-edit-page {
  &__weixin-address {
    .nut-cell {
      align-items: center;
    }
  }
  &__form {
    .nut-textarea {
      height: 50px;
    }
  }
  .locationg-icon {
    padding: 10px 15px;
    border-bottom: 1px solid #eaf0fb;
  }
}
</style>
