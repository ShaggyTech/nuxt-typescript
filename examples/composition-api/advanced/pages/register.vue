<script lang="ts">
import { defineComponent } from '@vue/composition-api'
/* Components */
import FormWithValidation from '@/components/form/FormWithValidation.vue'
/* Form fieldset */
import { fieldsetRegister as fieldset } from '@/components/form/presets/fieldsets'
/* Types */
import { ReactiveForm } from '@/compositions/form'

export default defineComponent({
  name: 'RegisterPage',
  layout: 'default',
  components: {
    FormWithValidation
  },
  setup () {
    const submitForm = (form: ReactiveForm) => {
      console.log('Register Form Submitted', { ...form })
    }
    return { fieldset, submitForm }
  }
})
</script>

<template scoped>
  <form-with-validation
    id="RegisterForm"
    title="Register for an Account"
    :fieldset="fieldset"
    @submit="submitForm"
  />
</template>

<style scoped>
#RegisterForm {
  width: 500px;
}
</style>
