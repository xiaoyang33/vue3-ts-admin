// export function
import { ref } from 'vue'

export function useSearch(queryObj: any, getDataFn: (queryInfo?: any) => void) {
  const query = ref(queryObj)
  /**
   * 搜索
   */
  const handleSearch = () => {
    getDataFn(query.value)
  }
  /**
   * 重置
   */
  const handleReset = () => {
    query.value = queryObj
    getDataFn()
  }

  return [query, handleSearch, handleReset]
}
