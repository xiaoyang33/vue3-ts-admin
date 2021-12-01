<template>
  <div>
    <y-table
      :prop-list="state.propsList"
      :children-props="{ rowKey:'id',treeProps:{children:'children'} }"
      :table-data="state.menuList"
    >
      <template #createAt="{ row }">
        {{ $filters.formatTime1(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filters.formatTime1(row.updateAt) }}
      </template>
    </y-table>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// 组件
import YTable from '@/base-ui/table'
// api
import { getSysteMenuListApi } from '@/api/system'
import { propsList } from './config'

const state = reactive({
  menuList: [],
  propsList
})

const getMenuList = async () => {
  let res = await getSysteMenuListApi()
  state.menuList = res.data.list
}
getMenuList()
</script>

<style scoped></style>
