<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:57:34
 * @LastEditTime: 2022-07-06 14:48:58
 * @Description: 商品评价列表
-->
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Comment, Empty } from '@nutui/nutui-taro'
import { previewMedia, useRouter } from '@tarojs/taro'
import CommentTabTags from './components/CommentTabTags.vue'
import { getGoodsComments } from '@/api/goods'

export default defineComponent({
  name: 'OrderCommentPage',
  components: {
    [Comment.name]: Comment,
    [Empty.name]: Empty,
    CommentTabTags,
  },
  setup() {
    const route = useRouter()

    const tabsObj = ref({})

    onMounted(() => {
      fetchData()
    })

    // 获取数据
    async function fetchData(type?: number) {
      const { goods_id } = route.params
      const { comments, tabs } = await getGoodsComments(goods_id as string, type)
      commentData.value = comments
      tabsObj.value = tabs
    }

    // 评论数据
    const commentData = ref<any>([])
    // 预览图片或者视频
    function clickImages(options) {
      // 预览图片
      if (options.type === 'img') {
        previewMedia({
          sources: [{ url: options.value.imgUrl }],
        })
      }
      // 预览视频
      if (options.type === 'video') {
        previewMedia({
          sources: [
            {
              url: options.value.videoUrl,
              type: 'video',
            },
          ],
        })
      }
    }

    // 切换tab
    function handleTabChange(value) {
      fetchData(value)
    }

    return {
      commentData,
      clickImages,
      tabsObj,
      handleTabChange,
    }
  },
})
</script>

<template>
  <view class="comments">
    <view class="bg-white px-4 pt-3">
      <CommentTabTags :tabs="tabsObj" @change="handleTabChange" />
    </view>

    <view class="comments__list">
      <view
        class="comments__list-item p-4 bg-white mb-3"
        v-for="item in commentData"
        :key="item._id"
      >
        <nut-comment
          imagesRows="multi"
          :images="item.images"
          :videos="item.videos"
          :info="item.info"
          :follow="item.follow"
          @clickImages="clickImages"
        />
        <view class="shop-reply-comment text-xxs text-grey mt-4 pt-2" v-if="item.replyContent">
          <text class="text-red">XYMALL店长：</text>{{ item.replyContent }}
        </view>
      </view>
    </view>
    <view v-if="!commentData.length">
      <nut-empty description="暂无评论数据"></nut-empty>
    </view>
  </view>
</template>

<style lang="scss">
.comments {
  .shop-reply-comment {
    border-top: 1px solid #e5e5e5;
  }
}
</style>
