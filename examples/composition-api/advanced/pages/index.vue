<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
/* Components */
import BasicInput from '@/components/BasicInput.vue'
import InputWithValidation from '@/components/InputWithValidation.vue'

export default defineComponent({
  components: {
    BasicInput,
    InputWithValidation
  },
  setup () {
    // E-mail field, with validation
    const email = ref<string>(null)
    const emailLabel = ref<string>('Email Address')
    const validEmail = ref<boolean>(false)
    // Password field, with validation
    const password = ref<string>(null)
    const passwordLabel = ref<string>('Password')
    const validPassword = ref<boolean>(false)
    // Additional info field, basic input with no validation
    const additionalInfo = ref<string>(null)
    const additionalInfoLabel = ref<string>('Just a basic input with no validation.')

    return {
      email,
      emailLabel,
      validEmail,
      password,
      passwordLabel,
      validPassword,
      additionalInfo,
      additionalInfoLabel
    }
  }
})
</script>

<template>
  <div>
    <input-with-validation
      id="EmailInput"
      v-model="email"
      name="e-mail address"
      :valid.sync="validEmail"
      type="email"
      required
    >
      <span>{{ emailLabel }}</span>
    </input-with-validation>
    <input-with-validation
      id="PasswordInput"
      v-model="password"
      name="password"
      :valid.sync="validPassword"
      type="password"
      required
      minlength="4"
    >
      <span>{{ passwordLabel }}</span>
    </input-with-validation>
    <basic-input
      id="AdditionalInfo"
      v-model="additionalInfo"
    >
      <span>{{ additionalInfoLabel }}</span>
    </basic-input>
    <span>additional: {{ additionalInfo }}</span>
  </div>
</template>
