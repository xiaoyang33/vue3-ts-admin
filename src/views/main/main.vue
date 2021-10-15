<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '63px' : '210px'">
        <Aside :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <nav-header @collapseChange="collapseChange" :collapse="isCollapse" />
        </el-header>
        <el-main>
          <div class="page-content">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Aside from '@/components/layout/Aside.vue'
import NavHeader from '@/components/layout/NavHeader.vue'

export default defineComponent({
  components: { Aside, NavHeader },
  setup() {
    let isCollapse = ref(false)

    // 折叠状态改变
    const collapseChange = () => {
      isCollapse.value = !isCollapse.value
    }
    return {
      isCollapse,
      collapseChange
    }
  }
})
</script>

<style scoped lang="scss">
.main {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
}
.el-aside {
  background: #011423;
  transition: width 0.3s ease-out;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
.page-content {
  background: #fff;
}
.el-header {
  display: flex;
  align-items: center;
}
.el-container {
  height: 100%;
}
.el-main {
  background: #eef0f4;
}
</style>
