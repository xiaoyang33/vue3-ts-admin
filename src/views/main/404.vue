<template>
  <div class="error">
    <h2>页面不存在~</h2>
    <el-button type="primary" plain @click="backMain">返回首页</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const $router = useRouter()
    const backMain = () => {
      $router.replace('/main')
    }
    return {
      backMain
    }
  }
})
</script>

<style scoped lang="scss">
.error {
  background: rgba(0, 0, 0, 0.3);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>
