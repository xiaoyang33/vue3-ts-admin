<template>
  <div class="y-form">
    <div class="header">
      <slot name="header">
        <h2>标题</h2>
      </slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :style="itemStyle" :label="item.label">
              <template v-if="item.iptType === 'datepicker'">
                <el-date-picker
                  type="daterange"
                  style="width: 100%"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :size="size"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                </el-date-picker>
              </template>
              <template v-else-if="item.iptType === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.selectOptions"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                <el-input
                  :size="size"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :show-password="item.iptType === 'password'"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, watch } from 'vue'
import { IFormItems } from './types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItems[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '90px'
    },
    size: {
      type: String,
      default: 'medium'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '0 20px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    showResetBtn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 1.双向绑定式
    // const formData = reactive({ ...props.modelValue })
    // watch(formData, (newVal) => emit('update:modelValue', newVal), {
    //   deep: true
    // })
    /**
     * 重置搜索数据
     */
    // const handleReset = () => {
    //   Object.keys(formData).forEach((key: any) => {
    //     formData[key] = ''
    //   })
    // }
    // 2. 数据绑定式
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      // formData,
      // handleReset,
      handleValueChange
    }
  }
})
</script>

<style scoped lang="scss">
.y-form {
  padding-top: 20px;
}
.header {
  padding: 0 20px;
  margin: 0;
  margin-bottom: 20px;
}
.footer {
  text-align: right;
  padding: 0 20px 20px 0;
}
</style>
