<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 11:02:51
 * @LastEditTime: 2022-07-04 11:53:45
 * @Description: Modify here please
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Radio, RadioGroup, Uploader } from '@nutui/nutui-taro'

export default defineComponent({
  name: 'OrderCommentPage',
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Uploader.name]: Uploader,
  },
  setup() {
    const rateValaue = ref<number>(5)
    const rateContent = ref<string>('')
    const uploadUrl = ref<string>('https://xy-mall-web-api.zhouxuanyu.com/upload')
    const radioVal = ref<number>(0)

    const defaultFileList = ref([
      {
        name: '文件1.png',
        url:
          'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
      },
    ])

    // 上传失败
    function onUploadError(file, error) {
      console.log('onUploadError', file, error)
    }
    return {
      rateValaue,
      rateContent,
      uploadUrl,
      radioVal,
      defaultFileList,
      onUploadError,
    }
  },
})
</script>

<template>
  <view class="order-goods-comment">
    <!-- 商品卡片 -->
    <view class="goods-card flex p-4 bg-white">
      <image src="https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png" />
      <view class="flex-1 ml-2">
        <view class="text-overflow-2">
          白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙
        </view>
        <view class="text-xs mt-1 text-grey">
          <text>颜色：橙色，2XL</text>
        </view>
      </view>
    </view>
    <!-- 评分 -->
    <div class="rate-wrapper px-4 bg-white">
      <view class="flex">
        <text class="mr-2">商品评价</text>
        <nut-rate allow-half active-color="#FFC800" v-model="rateValaue"></nut-rate>
      </view>
      <nut-textarea
        class="rounded-xxs p-0 mt-3 text-white"
        v-model="rateContent"
        max-length="200"
        limit-show
        placeholder="请填写您的商品评价内容..."
      />
    </div>
    <!-- 图片上传 -->
    <view class="rate-upload-img bg-white p-4">
      <nut-uploader
        :url="uploadUrl"
        v-model:file-list="defaultFileList"
        maximum="9"
        multiple
        list-type="picture"
        @failure="onUploadError"
      ></nut-uploader>
      <nut-radiogroup v-model="radioVal">
        <nut-radio :label="1">匿名评价</nut-radio>
      </nut-radiogroup>
    </view>

    <!-- 物流评价 -->
    <view class="logistics-rate mt-3 p-4 bg-white">
      <view class="text-lg">
        物流服务评价
      </view>
      <view class="flex my-3">
        <text class="mr-2">物流评价</text>
        <nut-rate allow-half active-color="#FFC800" v-model="rateValaue"></nut-rate>
      </view>
      <view class="flex">
        <text class="mr-2">服务评价</text>
        <nut-rate allow-half active-color="#FFC800" v-model="rateValaue"></nut-rate>
      </view>
    </view>
    <!-- 提交评价 -->
    <view class="submit-btn px-4 safe-area-bottom">
      <nut-button class="mb-3" block type="primary">提交</nut-button>
    </view>
  </view>
</template>

<style lang="scss">
.goods-card {
  image {
    width: 60px;
    height: 60px;
    border-radius: 3px;
  }
}
.nut-textarea {
  background-color: #f5f5f5;
  padding: 10px;
}
.submit-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
