<template>
  <el-form :model="account" :rules="rules" ref="formElRef">
    <el-form-item size="small" label="账 号:" prop="name">
      <el-input type="text" v-model="account.name" />
    </el-form-item>
    <el-form-item size="small" label="密 码:" prop="password">
      <el-input show-password v-model="account.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'

import cache from '@/utils/cache'

export default defineComponent({
  setup() {
    let acc = cache.get('account') || {}
    const $store = useStore()
    const formElRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: acc.isKeepPassword ? acc.name : '',
      password: acc.isKeepPassword ? acc.password : ''
    })

    const rules = {
      name: [{ required: true, message: '请输入账号' }],
      password: [{ required: true, message: '请输入密码' }]
    }

    const loginAction = (isKeepPassword: boolean) => {
      formElRef.value?.validate((valid) => {
        if (valid) {
          // 保存密码
          if (isKeepPassword) {
            cache.set('account', { ...account, isKeepPassword })
          } else {
            cache.delete('account')
          }
          $store.dispatch('login/loginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formElRef
    }
  }
})
</script>

<style scoped></style>
