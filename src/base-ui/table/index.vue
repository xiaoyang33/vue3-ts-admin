<template>
  <div class="y-table">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      v-loading="isLoading"
    >
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :min-width="item.minWidth"
          align="center"
          :label="item.label"
        >
          <template #default="scope">
            <slot
              :name="item.prop"
              :row="scope.row"
              :column="scope.column"
              :cellValue="scope.cellValue"
              :index="scope.index"
            >
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    tableData: {
      type: Array as PropType<any[]>,
      required: true
    },
    propList: {
      type: Array as PropType<any[]>,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.y-table {
  padding: 20px;
  border-top: 20px solid #eef0f4;
}
</style>
