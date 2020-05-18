<script lang="ts">
import { defineComponent } from '@vue/composition-api'
/* Components */
import FormWithValidation from '@/components/form/FormWithValidation.vue'
import { fieldsetRegister as fieldset } from '@/components/form/presets/fieldsets'

export default defineComponent({
  name: 'RegisterPage',
  layout: 'default',
  components: {
    FormWithValidation
  },
  setup () {
    return { fieldset }
  }
})
</script>

<template scoped>
  <form-with-validation
    id="RegisterForm"
    title="Register for an Account"
    :fieldset="fieldset"
  />
</template>

<style scoped>
#RegisterForm {
  width: 500px;
}
</style>
