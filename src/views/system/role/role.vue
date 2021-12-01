<template>
  <div>
    <y-table
      :is-loading="isLoading"
      :table-data="roleList"
      :prop-list="propsList"
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

<script lang="ts" setup>
import { ref } from 'vue'

import YTable from '@/base-ui/table'

import { propsList } from './config'
import { getSystemRoleListApi } from '@/api/system'

const roleList = ref([])
const isLoading = ref(false)

const getSystemRoleList = async () => {
  isLoading.value = true
  let res = await getSystemRoleListApi()
  roleList.value = res.data.list
  setTimeout(() => {
    isLoading.value = false
  }, 300)

  console.log(res)
}
getSystemRoleList()
</script>

<style scoped></style>
