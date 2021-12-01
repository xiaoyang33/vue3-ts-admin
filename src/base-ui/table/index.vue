<template>
  <div class="y-table">
    <div class="header">
      <h3>{{ title }}</h3>
      <div class="handler">
        <slot name="headerHandler"> </slot>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      :highlight-current-row="highlightCurrentRow"
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChange"
      style="width: 100%"
      v-loading="isLoading"
      v-bind="childrenProps"
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
        v-if="showSelection"
      >
      </el-table-column>
      <el-table-column
        type="index"
        align="center"
        width="75"
        label="序号"
        v-if="showIndexColumn"
      >
      </el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :min-width="item.minWidth"
          align="center"
          :label="item.label"
          :show-overflow-tooltip="item.showOverflowTooltip"
        >
          <template #default="scope" v-if="item.prop != 'handler'">
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
          <template #default="scope" v-else>
            <el-button size="mini" type="primary" plain @click="editClick(item)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              plain
              @click="deleteClick(item)"
              >删除</el-button
            >
            <slot
              name="handler"
              :row="scope.row"
              :column="scope.column"
              :cellValue="scope.cellValue"
              :index="scope.index"
            ></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
/**
 *  @param {tableData} array - 表格数据
 *  @param {propList}  array - 控制渲染表头属性
 *  @param {isLoading}  Boolean - 是否加载中
 *  @param {title}  string - 表格表头
 *  @param {showIndexColumn}  Boolean - 是否显示索引
 *  @param {highlightCurrentRow}  Boolean - 点击单行高亮
 *  @param {showSelection}  Boolean - 是否显示选中框
 *  @param {childrenProps}  Object  { rowKey:'' , treeProps:{ children:'children' }}- 树型数据配置
 *
 */
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
    },
    title: {
      type: String,
      default: ''
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    showHandler: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['currentRowChange', 'selectionChange', 'editClick', 'deleteClick'],
  setup(props, { emit }) {
    /**
     * 单选数据
     */
    const handleCurrentChange = (currentRow: any) => {
      emit('currentRowChange', currentRow)
    }
    /**
     * 多选数据
     */
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    /**
     *编辑
     */
    const editClick = (value: any) => {
      emit('editClick', value)
    }
    /**
     * 删除
     */
    const deleteClick = (value: any) => {
      emit('deleteClick', value)
    }
    return {
      handleCurrentChange,
      handleSelectionChange,
      editClick,
      deleteClick
    }
  }
})
</script>

<style scoped lang="scss">
.y-table {
  padding: 20px;
  border-top: 20px solid #eef0f4;
}
.header {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
