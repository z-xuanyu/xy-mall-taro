<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 15:23:58
 * @LastEditTime: 2022-07-05 10:23:59
 * @Description: 会员中心卡片
-->
<script setup lang="ts">
import { navigateTo } from '@tarojs/taro'
import { ref, computed, unref } from 'vue'
import { useUserStore } from '@/stores/modules/user'

const useUser = useUserStore()

const defaultAvatarUrl = ref<string>(
  'https://cdn-we-retail.ym.tencent.com/miniapp/usercenter/icon-user-center-avatar@2x.png'
)

const userInfo = computed(() => useUser.getUserInfo)
const isLogin = computed(() => useUser.isLogin)

// 跳转信息编辑
function gotoUserEditPage() {
  navigateTo({
    url: '/pages/user/person-info/index',
  })
}

// 处理登录
async function handleLogin() {
  if (!unref(isLogin)) {
    await useUser.handleMiniLogin()
  }
}
</script>

<template>
  <view class="user-center-card">
    <!-- 未登录的情况 -->
    <block v-if="!isLogin">
      <view class="user-center-card__header" @click="handleLogin">
        <nut-avatar
          size="normal"
          class="user-center-card__header__avatar"
          :icon="userInfo?.avatarUrl || defaultAvatarUrl"
        ></nut-avatar>
        <view class="user-center-card__header__name">{{ '请登录' }}</view>
      </view>
    </block>
    <!-- 已登录 -->
    <block v-else>
      <view class="user-center-card__header" @click="gotoUserEditPage">
        <nut-avatar
          size="normal"
          class="user-center-card__header__avatar"
          :icon="userInfo?.avatarUrl || defaultAvatarUrl"
        ></nut-avatar>
        <view class="user-center-card__header__name">{{ userInfo?.nickName || '微信用户' }}</view>
      </view>
    </block>
  </view>
</template>

<style lang="scss">
.user-center-card {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 240px;
  /*  #ifdef h5 */
  height: 180px;
  /*  #endif  */
  background-image: url('../../../assets/images/user/user-center-bg-v1.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 12px;
  &__header {
    margin-top: 96px;
    /*  #ifdef h5 */
    margin-top: 20px;
    /*  #endif  */
    margin-bottom: 24px;
    height: 48px;
    line-height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #333;
    position: relative;
    &__avatar {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      overflow: hidden;
    }
    &__name {
      font-size: 18px;
      line-height: 24px;
      color: #333;
      font-weight: bold;
      margin-left: 12px;
      margin-right: 8px;
    }
    &__transparent {
      position: absolute;
      left: 0;
      top: 0;
      background-color: transparent;
      height: 100%;
      width: 100%;
    }
  }
  &__icon {
    line-height: 48px;
  }
}
</style>
