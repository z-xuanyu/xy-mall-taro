<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-16 14:47:31
 * @LastEditTime: 2022-07-06 14:21:43
 * @Description: 商品评论卡片
-->
<script setup lang="ts">
import { navigateTo, useRouter } from '@tarojs/taro'
import { ref, onMounted } from 'vue'
import { getGoodsComments } from '@/api/goods'
const route = useRouter()

const commentData = ref<any>([])

// 调整商品评论列表
function jumpGoodsComments(): void {
  navigateTo({
    url: '/pages/goods/comment/index?goods_id=' + route.params.goods_id,
  })
}

onMounted(async () => {
  const { comments } = await getGoodsComments(route.params.goods_id as string)
  commentData.value = comments
})
</script>

<template>
  <view class="comment-card">
    <nut-cell-group>
      <nut-cell
        :title="`商品评价(${commentData.length})`"
        is-link
        value="98.8% 好评"
        @click="jumpGoodsComments"
      />
    </nut-cell-group>
    <view class="comment-card__content mb-4" v-for="item in commentData" :key="item._id">
      <view class="comment-card__content-top">
        <nut-avatar size="normal" :icon="item?.info?.avatar"></nut-avatar>
        <view class="comment-card__content-top__user">
          <view class="name">
            {{ item?.info?.nickName }}
          </view>
          <nut-rate
            icon-size="12"
            spacing="5"
            disabled
            active-color="#FFC800"
            v-model="item.info.score"
          />
        </view>
      </view>
      <view class="comment-card__content-text">
        {{ item?.info?.content }}
      </view>
    </view>
    <!-- 没有评价信息 -->
    <view class="text-center text-sm text-grey" v-if="!commentData.length">
      没有评价信息
    </view>
  </view>
</template>

<style lang="scss">
.comment-card {
  background-color: #fff;
  padding-bottom: 10px;
  .nut-cell {
    padding: 10px;
  }
  &__content {
    padding: 0 10px;
    margin-top: -10px;
    &-top {
      display: flex;
      align-items: center;
      &__user {
        margin-left: 15px;
        .name {
          font-size: 14px;
          color: #333;
        }
      }
    }
    &-text {
      padding: 10px 0;
      font-size: 14px;
    }
  }
}
</style>
