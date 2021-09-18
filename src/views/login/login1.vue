<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './cpns/loginPanel.vue'

export default defineComponent({
  components: { loginPanel },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: url('../../assets/img/wallhaven-6owpoq.jpg') 0 0 no-repeat;
}
</style>
