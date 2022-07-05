<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-20 11:02:51
 * @LastEditTime: 2022-07-05 10:37:07
 * @Description: 商品评价
-->
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Radio, RadioGroup, Uploader } from '@nutui/nutui-taro'
import { useRouter } from '@tarojs/taro'
import { getOrderDetail } from '@/api/order'

interface FormType {
  orderId: string
  content: string
  rate: number
  images: string[]
  logisticsRate: number
  serviceRate: number
  anonymous: boolean
}

interface ProdoctType {
  _id: string
  prodctId: string
  productName: string
  productPic: string
  price: number
  skuName: string
}

export default defineComponent({
  name: 'OrderCommentPage',
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Uploader.name]: Uploader,
  },
  setup() {
    const route = useRouter()
    const orderId = ref(route.params.orderId)
    const uploadUrl = ref<string>('https://xy-mall-web-api.zhouxuanyu.com/upload')
    const images = ref<string[]>([])
    const products = ref<ProdoctType[]>([])

    const form = ref<FormType>({
      orderId: orderId.value as string,
      rate: 0,
      content: '',
      images: images.value,
      logisticsRate: 0,
      serviceRate: 0,
      anonymous: false,
    })

    onMounted(async () => {
      const res = await getOrderDetail(orderId.value as string)
      console.log(res)
      products.value = res.products
    })

    // 上传成功
    function onUploadSuccess(file) {
      console.log(file, 'success')
      const data = JSON.parse(file.responseText.data)
      images.value.push(data.result)
    }

    // 移除上传文件
    function onUploadDelete(options) {
      images.value.splice(options.index, 1)
    }

    // 提交
    function handleSubmit() {
      console.log(form.value)
    }
    return {
      uploadUrl,
      form,
      products,
      onUploadSuccess,
      onUploadDelete,
      handleSubmit,
    }
  },
})
</script>

<template>
  <view class="order-goods-comment">
    <!-- 商品卡片 -->
    <view class="goods-card flex p-4 bg-white" v-for="item in products" :key="item._id">
      <image :src="item.productPic" />
      <view class="flex-1 ml-2">
        <view class="text-overflow-2 text-xs">
          {{ item.productName }}
        </view>
        <view class="text-xs mt-1 text-grey">
          <text>规格：{{ item.skuName }}</text>
        </view>
      </view>
    </view>
    <!-- 评分 -->
    <div class="rate-wrapper px-4 bg-white">
      <view class="flex">
        <text class="mr-2">商品评价</text>
        <nut-rate allow-half active-color="#FFC800" v-model="form.rate"></nut-rate>
      </view>
      <nut-textarea
        class="rounded-xxs p-0 mt-3 text-white"
        v-model="form.content"
        max-length="200"
        limit-show
        placeholder="请填写您的商品评价内容..."
      />
    </div>
    <!-- 图片上传 -->
    <view class="rate-upload-img bg-white p-4">
      <nut-uploader
        :url="uploadUrl"
        maximum="9"
        multiple
        list-type="picture"
        :xhr-state="201"
        @success="onUploadSuccess"
        @delete="onUploadDelete"
      ></nut-uploader>
      <nut-radiogroup v-model="form.anonymous">
        <nut-radio label="true">匿名评价</nut-radio>
      </nut-radiogroup>
    </view>

    <!-- 物流评价 -->
    <view class="logistics-rate mt-3 p-4 bg-white">
      <view class="text-lg">
        物流服务评价
      </view>
      <view class="flex my-3">
        <text class="mr-2">物流评价</text>
        <nut-rate allow-half active-color="#FFC800" v-model="form.logisticsRate"></nut-rate>
      </view>
      <view class="flex">
        <text class="mr-2">服务评价</text>
        <nut-rate allow-half active-color="#FFC800" v-model="form.serviceRate"></nut-rate>
      </view>
    </view>
    <!-- 提交评价 -->
    <view class="submit-btn px-4 safe-area-bottom">
      <nut-button class="mb-3" block type="primary" @click="handleSubmit">提交</nut-button>
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
