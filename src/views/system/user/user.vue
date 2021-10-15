<template>
  <div class="user">
    <y-form v-bind="fromConfig" v-model="formData">
      <template v-slot:header>
        <h3>我是检索标题</h3>
      </template>
      <template #footer>
        <el-button type="primary" icon="el-icon-refresh" plain>重置</el-button>
        <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
      </template>
    </y-form>
    <y-table
      :table-data="userList"
      :prop-list="propList"
      :is-loading="isLoading"
    >
      <template #enable="{ row }">
        {{ row.enable === 1 ? '启用' : '禁用' }}
      </template>
      <template #createAt="{ row }">
        {{ formatDate(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ formatDate(row.updateAt) }}
      </template>
      <template #oper>
        <el-button size="mini" type="primary" plain>编辑</el-button>
        <el-button size="mini" type="danger" plain>删除</el-button>
      </template>
    </y-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

import YForm from '@/base-ui/form'
import YTable from '@/base-ui/table'
import { getSystemUserListApi } from '@/api/system'
import { formatDateToStyle, DateFormat } from '@/utils/format'
import fromConfig, { propList } from './config'

export default defineComponent({
  components: {
    YForm,
    YTable
  },
  setup() {
    // 顶部输出框数据
    const formData = ref({
      username: '',
      password: '',
      sport: '',
      createDate: ''
    })
    const state = reactive({
      isLoading: false,
      userList: []
    })

    /** listData propList
     * 获取用户列表
     */
    const getSystemUserList = async () => {
      state.isLoading = true
      let res = await getSystemUserListApi({
        offset: 1,
        size: 10
      })
      state.userList = res.data.list
      setTimeout(() => {
        state.isLoading = false
      }, 1000)
      console.log(res)
    }
    getSystemUserList()
    /**
     * 格式化时间
     */
    const formatDate = (date: string) => {
      return formatDateToStyle(date, DateFormat.format1)
    }
    return {
      fromConfig,
      formData,
      propList,
      formatDate,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="scss"></style>
