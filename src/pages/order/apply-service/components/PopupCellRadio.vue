<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-24 14:25:43
 * @LastEditTime: 2022-05-24 15:51:03
 * @Description: PopupCellRadio 组件
-->
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Radio, RadioGroup } from '@nutui/nutui-taro'

// 选项类型
interface colunmType {
  label: string
  value: number | string
}

export default defineComponent({
  name: 'PopupCellRadio',
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  props: {
    title: {
      type: String,
      default: '商品收获状态',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    desc: {
      type: String,
      default: '请选择',
    },
    popupTitle: {
      type: String,
      default: '请选择收货状态',
    },
    colunms: {
      type: Array as PropType<colunmType[]>,
      default: () => [
        {
          value: '1',
          label: '未收到货',
        },
        {
          value: '2',
          label: '已收到货',
        },
      ],
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const visible = ref(false)
    const radioVal = ref(props.value)
    const descText = ref(props.desc)

    function showPopup() {
      visible.value = true
    }

    function onSubmit() {
      visible.value = false
      descText.value =
        (props.colunms.find((item) => item.value === radioVal.value)?.label as string) ?? '请选择'
      emit('update:value', radioVal.value)
    }
    return {
      visible,
      descText,
      showPopup,
      radioVal,
      onSubmit,
    }
  },
})
</script>

<template>
  <view class="popup-cell-radio">
    <nut-cell
      class="my-0 popup-cell-radio__cell"
      :title="title"
      :desc="descText"
      @click="showPopup"
      is-link
    >
    </nut-cell>
    <nut-popup
      :style="{ height: 'auto' }"
      :overlay-style="{ background: 'rgba(0, 0, 0, 0.5)' }"
      v-model:visible="visible"
      :z-index="100"
      position="bottom"
      overlay
      round
    >
      <view class="text-center pt-4">
        {{ popupTitle }}
      </view>
      <view class="px-2 mb-2">
        <nut-radiogroup v-model="radioVal">
          <nut-radio v-for="item in colunms" :key="item.value" :label="item.value">
            {{ item.label }}
          </nut-radio>
        </nut-radiogroup>
      </view>

      <view class="px-4 mb-2 safe-area-bottom">
        <nut-button block type="primary" @click="onSubmit">确认</nut-button>
      </view>
    </nut-popup>
  </view>
</template>

<style lang="scss">
.popup-cell-radio {
  &__cell {
    border-radius: 0;
    box-shadow: none;
  }
  .nut-radiogroup {
    width: 100%;
  }
  .nut-radio {
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}
</style>
