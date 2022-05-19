<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-17 10:52:54
 * @LastEditTime: 2022-05-19 17:25:21
 * @Description: 用户个人信息页面
-->
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'UserPersonInfoPage',
})

const showSex = ref<boolean>(false)

const sexColumns = ref([
  { text: '男', value: '1' },
  { text: '女', value: '2' },
])

const defualtSex = ref(['1'])
function changeSex() {}

function confirmSex({ selectedValue, selectedOptions }) {
  console.log(selectedValue, selectedOptions)
}
</script>

<template>
  <view class="user-info-detail">
    <nut-cell-group>
      <nut-cell title="头像" class="items-center pb-0">
        <template #link>
          <view class="flex items-center">
            <nut-avatar
              class="p-0"
              icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            ></nut-avatar>
            <nut-icon name="right"></nut-icon>
          </view>
        </template>
      </nut-cell>
      <nut-cell title="昵称" class="items-center" desc="阿宇_Coder" is-link />
      <nut-cell @click="showSex = true" title="性别" class="items-center" is-link desc="男" />
      <nut-cell title="手机号" class="items-center" is-link desc="134****9999" />
    </nut-cell-group>

    <!-- 性别修改 -->
    <nut-picker
      v-model:visible="showSex"
      v-model:value="defualtSex"
      :columns="sexColumns"
      title="选择性别"
      @change="changeSex"
      @confirm="confirmSex"
    >
    </nut-picker>
    <!-- 退出登录 -->
    <view class="logout-btn px-4 safe-area-bottom">
      <nut-button class="mb-3" block type="default">切换账号登录</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.user-info-detail {
  .logout-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
