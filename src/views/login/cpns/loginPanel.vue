<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="operation flex-center">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './loginAccount.vue'
import LoginPhone from './loginPhone.vue'
import cache from '@/utils/cache'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const acc = cache.get('account') || {}

    const isKeepPassword = ref<boolean>(acc.isKeepPassword ?? true)
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLogin = () => {
      loginAccountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      isKeepPassword,
      loginAccountRef,
      handleLogin
    }
  }
})
</script>

<style scoped>
.login-panel {
  width: 320px;
  text-align: center;
}
.operation {
  justify-content: space-between;
}
.login-btn {
  width: 100%;
}
</style>
