<template>
  <div class="aside">
    <div class="logo flex-center">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!collapse">Vue3 + Ts</span>
    </div>
    <el-menu
      :default-active="firstCheckedMenu"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
      router
    >
      <template v-for="item in menus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.url">
                <i v-if="item.icon" :class="item.icon"></i>
                <template #title>{{ subItem.name }}</template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { firstCheckedMenu as firstMenu } from '@/router/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    let menus = computed(() => store.state.login.userMenus)
    const nowPath = route.path
    const firstCheckedMenu = computed(() => {
      if (nowPath.split('/').length >= 3) {
        return nowPath
      }
      return firstMenu
    })

    return {
      menus,
      firstCheckedMenu
    }
  }
})
</script>

<style scoped lang="scss">
.aside {
  width: 100%;
  height: 100%;
}
.logo {
  color: #fff;
  height: 50px;
  img {
    height: 36px;
    margin-right: 8px;
  }
}
.el-menu-vertical {
  height: calc(100vh - 50px);
  background: #001529;
}
.el-menu {
  border-right: none;
}
::v-deep .el-sub-menu__title {
  color: #fff;
  background: #001529;
}
::v-deep .el-menu-item {
  &.is-active {
    background: #0a60bd !important;
    color: #fff !important;
  }
}
</style>
