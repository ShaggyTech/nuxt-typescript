<script lang="ts">
import { defineComponent } from '@vue/composition-api'
/* Components */
import LoginForm from '@/components/LoginForm.vue'
import { pageTitle } from '@/compositions/page/index.page'

export default defineComponent({
  layout: 'default',
  components: {
    LoginForm
  },
  setup () {
    return { pageTitle }
  }
})
</script>

<template scoped>
  <div class="container">
    <login-form class="login-form" title="LOGIN" />
  </div>
</template>

<style scoped>
.container {
  background-color: #fdf8ec;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
