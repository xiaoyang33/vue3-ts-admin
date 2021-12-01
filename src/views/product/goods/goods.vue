<template>
  <div>
    <h2>商品信息</h2>
    <y-table :prop-list="propList" :tableData="state.goodsList" showIndexColumn>
      <template #handler="{ row }">
        <el-button
          size="mini"
          :type="row.status === 1 ? 'warning' : 'primary'"
          plain
          >{{ row.status === 1 ? '禁用' : '启用' }}</el-button
        >
      </template>
      <template #imgUrl="{ row }">
        <el-image
          lazy
          style="width: 100px; height: 100px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
        >
        </el-image>
      </template>
      <template #footer>
        <pagination :total="state.total" v-model:page="page" />
      </template>
    </y-table>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { getGoodsListApi } from '@/api/goods'
import { usePages } from '@/hooks'
import YTable from '@/base-ui/table'
import Pagination from '@/components/common/pagination'
import { propList } from './config'

const state = reactive({
  goodsList: [],
  total: 0
})
// 分页处理
const [page, pageQuery, updateList] = usePages(5)

const getGoodsList = async () => {
  let res = await getGoodsListApi({
    ...pageQuery.value
  })
  state.goodsList = res.data.list
  state.total = res.data.totalCount
  console.log(res)
}
updateList(getGoodsList)
</script>

<style lang="scss" scoped></style>
