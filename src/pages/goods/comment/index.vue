<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:57:34
 * @LastEditTime: 2022-07-05 11:46:31
 * @Description: 商品评价列表
-->
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Comment } from '@nutui/nutui-taro'
import { previewMedia } from '@tarojs/taro'
import CommentTabTags from './components/CommentTabTags.vue'

export default defineComponent({
  name: 'OrderCommentPage',
  components: {
    [Comment.name]: Comment,
    CommentTabTags,
  },
  setup() {
    const commentData = ref({
      follow: {
        content: '真的很不错',
        days: 28,
        images: [],
      },
      images: [
        {
          bigImgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          smallImgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        },
      ],
      info: {
        avatar: 'https://nutui.jd.com/3x/demo-3.1.18/logo-red.png',
        content: '朋友推荐买的，很好用，超级赞！！',
        nickName: '阿宇_Coder',
        replay: 23,
        score: 5,
        size: '雪域白【碎屏险套装】全网通',
        time: '2022-07-05',
      },
      videos: [
        {
          mainUrl:
            'https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/3a5abb98377496264567160833/imageSampleSnapshot/1604738160_777980391.100_1344.jpg',
          videoUrl:
            'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/3a5abb98377496264567160833/v.f30.mp4?source=1&h265=v.f1022_h265.mp4',
        },
      ],
    })
    // 预览图片或者视频
    function clickImages(options) {
      console.log('clickImages', options)
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

    return {
      commentData,
      clickImages,
    }
  },
})
</script>

<template>
  <view class="comments">
    <view class="bg-white px-4 pt-3">
      <CommentTabTags />
    </view>

    <view class="comments__list">
      <view class="comments__list-item p-4 bg-white mb-3" v-for="item in 5" :key="item">
        <nut-comment
          imagesRows="multi"
          :images="commentData.images"
          :videos="commentData.videos"
          :info="commentData.info"
          :follow="commentData.follow"
          @clickImages="clickImages"
        />
        <view class="shop-reply-comment text-xxs text-grey mt-4 pt-2">
          <text class="text-red">XYMALL店长：</text
          >尊敬的客户您好，非常感谢您的支持，非常感谢您的支持非常感谢您的支持。
        </view>
      </view>
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
