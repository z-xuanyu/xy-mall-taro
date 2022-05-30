<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:58:12
 * @LastEditTime: 2022-05-30 18:32:01
 * @Description: 用户地址编辑
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'UserAddressEditPage',
})

const switchChecked = ref<boolean>(false)
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
</script>

<template>
  <view class="address-edit-page">
    <view class="address-edit-page__weixin-address">
      <nut-cell-group>
        <nut-cell title="获取微信收货地址" is-link>
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
      <nut-input label="收货人" placeholder="您的姓名" />
      <nut-input label="手机号" placeholder="联系您的手机号" />
      <nut-input
        label="地址"
        readonly
        placeholder="请选择地址"
        @click="showPopup = true"
        right-icon="locationg3"
      />
      <nut-input
        label="留言"
        type="textarea"
        show-word-limit
        rows="1"
        maxLength="20"
        placeholder="门牌号等（例如：10栋1001号）"
      />
    </view>
    <view class="address-edit-page__default">
      <nut-cell-group>
        <nut-cell title="设置默认收货地址">
          <template #link>
            <nut-switch v-model="switchChecked" />
          </template>
        </nut-cell>
      </nut-cell-group>
    </view>
    <view class="address-edit-page__submit px-2 mt-6">
      <nut-button type="primary" block>保存</nut-button>
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
}
</style>
