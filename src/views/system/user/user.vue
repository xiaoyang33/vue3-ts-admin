<template>
  <div class="user">
    <y-form v-bind="fromConfig" v-model="formData">
      <template v-slot:header>
        <h3>我是检索标题</h3>
      </template>
      <template #footer>
        <el-button
          type="primary"
          icon="el-icon-refresh"
          size="mini"
          plain
          @click="handleReset"
          >重置</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          plain
          @click="handleSearch"
          >搜索</el-button
        >
      </template>
    </y-form>
    <y-table
      :table-data="userList"
      :prop-list="propList"
      :is-loading="isLoading"
      showIndexColumn
      title="用户列表"
    >
      <template #headerHandler>
        <el-button type="primary" size="mini">新增用户</el-button>
      </template>
      <template #enable="{ row }">
        {{ row.enable === 1 ? '启用' : '禁用' }}
      </template>
      <template #createAt="{ row }">
        {{ $filters.formatTime1(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filters.formatTime1(row.updateAt) }}
      </template>
      <template #handler="{ row }">
        <el-button
          size="mini"
          :type="row.enable === 1 ? 'warning' : 'primary'"
          plain
          >{{ row.enable === 1 ? '禁用' : '启用' }}</el-button
        >
      </template>
      <template #footer>
        <y-pagination v-model:page="page" :total="page.total" />
      </template>
    </y-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import YForm from '@/base-ui/form'
import YTable from '@/base-ui/table'
import YPagination from '@/components/common/pagination'
import { getSystemUserListApi } from '@/api/system'
import fromConfig, { propList } from './config'
import { useSearch, usePages } from '@/hooks'

export default defineComponent({
  components: {
    YForm,
    YTable,
    YPagination
  },
  setup() {
    // 顶部搜索框数据
    const formDataObj = {
      name: '',
      realname: '',
      enable: ''
    }
    const state = reactive({
      isLoading: false,
      userList: []
    })
    // 分页处理
    const [page, pageQuery, updateList] = usePages()

    /**
     * 获取用户列表
     */
    const getSystemUserList = async (queryInfo?: any) => {
      state.isLoading = true
      let res = await getSystemUserListApi({
        ...pageQuery.value,
        ...queryInfo
      })
      state.userList = res.data.list
      page.value.total = res.data.totalCount
      setTimeout(() => {
        state.isLoading = false
      }, 200)
      console.log(res)
    }
    // 获取数据
    updateList(getSystemUserList)

    // 搜索处理
    const [formData, handleSearch, handleReset] = useSearch(
      formDataObj,
      getSystemUserList
    )
    return {
      // 配置文件
      fromConfig,
      formData,
      propList,
      // 操作
      handleSearch,
      handleReset,
      // 数据
      page,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss"></style>
