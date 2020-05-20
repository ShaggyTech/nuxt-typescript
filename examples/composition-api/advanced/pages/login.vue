<script lang="ts">
import { defineComponent } from '@vue/composition-api'
/* Components */
import FormWithValidation from '@/components/form/FormWithValidation.vue'
/* Form fieldset */
import { fieldsetLogin as fieldset } from '@/components/form/presets/fieldsets'
/* Types */
import { ReactiveForm } from '@/compositions/form'

export default defineComponent({
  name: 'LoginPage',
  layout: 'default',
  components: {
    FormWithValidation
  },
  setup () {
    const submitForm = (form: ReactiveForm) => {
      console.log('Login Form Submitted', { ...form })
    }
    return { fieldset, submitForm }
  }
})
</script>

<template scoped>
  <form-with-validation
    id="LoginForm"
    title="Login to your Account"
    :fieldset="fieldset"
    @submit="submitForm"
  />
</template>

<style scoped>
#LoginForm {
  width: 500px;
}
</style>
