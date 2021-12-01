import { ref, watch, computed } from 'vue'

export function usePages(size = 3): any[] {
  const pageQuery = {
    size,
    pageNumber: 1,
    total: 0
  }
  const page = ref(pageQuery)

  const pageQueryFn = computed(() => ({
    size: page.value.size,
    offset: page.value.size * (page.value.pageNumber - 1)
  }))

  const updateList = (fn: () => void) => {
    watch(
      page,
      () => {
        fn()
      },
      { immediate: true }
    )
  }

  return [page, pageQueryFn, updateList]
}
