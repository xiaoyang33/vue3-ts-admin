<template>
  <el-form :model="account" :rules="rules">
    <el-form-item size="small" label="手机号:" prop="name">
      <el-input type="text" v-model="account.name" />
    </el-form-item>
    <el-form-item size="small" label="验证码:" prop="password">
      <div class="flex">
        <el-input type="password" v-model="account.password" />
        <el-button type="primary" class="send-btn">发送</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const rules = {
      name: [{ required: true, message: '请输入手机号' }],
      password: [{ required: true, message: '请输入验证码' }]
    }
    return {
      account,
      rules
    }
  }
})
</script>

<style scoped>
.send-btn {
  margin-left: 10px;
}
</style>
