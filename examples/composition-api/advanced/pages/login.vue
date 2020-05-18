<script lang="ts">
import { defineComponent } from '@vue/composition-api'
/* Components */
import FormWithValidation from '@/components/form/FormWithValidation.vue'
import { fieldsetLogin as fieldset } from '@/components/form/presets/fieldsets'

export default defineComponent({
  name: 'LoginPage',
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
    id="LoginForm"
    title="Login to your Account"
    :fieldset="fieldset"
  />
</template>

<style scoped>
#LoginForm {
  width: 500px;
}
</style>
