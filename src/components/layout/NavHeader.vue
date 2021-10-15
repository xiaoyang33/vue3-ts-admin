<template>
  <div class="nav-header">
    <i
      class="icon"
      :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="collapseClick"
    ></i>
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <el-popover placement="bottom" trigger="hover">
      <div class="content" @click="loginOut">退出</div>
      <template #reference>
        <div class="user-info">
          <el-avatar
            :size="25"
            class="head-img"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          {{ userInfo.name }}
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import cache from '@/utils/cache'
import { mapPathToMenu } from '@/router/map-menus'

export default defineComponent({
  emits: ['collapseChange'],
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    // 用户信息
    const userInfo = computed(() => store.state.login.userInfo)

    const loginOut = () => {
      store.commit('login/changeToken')
      cache.clear()
      router.replace('/login')
    }

    const breadcrumbs = computed<any[]>(() => {
      // console.log(mapPathToMenu(route.path));

      return mapPathToMenu(route.path)
    })

    const collapseClick = () => {
      emit('collapseChange')
    }
    return {
      collapseClick,
      loginOut,
      userInfo,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
}
.icon {
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.user-info {
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  .head-img {
    margin-right: 6px;
  }
}
</style>
