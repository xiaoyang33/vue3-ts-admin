<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :currentPage="page?.pageNumber"
      :page-sizes="pageSizes"
      :page-size="page?.size"
      :layout="layout"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue'
interface IPages {
  size: number
  pageNumber: number
}

interface Props {
  total: number
  pageSizes?: number[]
  layout?: string
  page?: IPages
}
const props = withDefaults(defineProps<Props>(), {
  pageSizes: () => [10, 20, 30],
  layout: 'total, sizes, prev, pager, next',
  page: () => ({ size: 10, pageNumber: 1 })
})

const emit = defineEmits(['update:page'])
console.log(props)

const handleSizeChange = (size: any) => {
  emit('update:page', { ...props.page, size })
}
const handleCurrentChange = (pageNumber: any) => {
  emit('update:page', { ...props.page, pageNumber })
}
</script>

<style lang="scss" scoped></style>
