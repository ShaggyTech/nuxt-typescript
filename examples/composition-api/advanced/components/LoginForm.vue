<script lang="ts">
import {
  defineComponent,
  ref,
  PropType
} from '@vue/composition-api'

/* Components */
import InputWithValidation from '@/components/InputWithValidation.vue'

const EMAIL_LABEL = 'Email Address'
const PASSWORD_LABEL = 'Password'

const getFormRefs = () => ({
  // form ref
  formRef: ref<HTMLFormElement>(null),
  // E-mail field, with validation
  email: ref<string>(null),
  emailRef: ref<HTMLInputElement>(null),
  emailLabel: ref<string>(EMAIL_LABEL),
  validEmail: ref<boolean>(false),
  // Password field, with validation
  password: ref<string>(null),
  passwordRef: ref<HTMLInputElement>(null),
  passwordLabel: ref<string>(PASSWORD_LABEL),
  validPassword: ref<boolean>(false)
})

export default defineComponent({
  name: 'LoginForm',
  components: {
    InputWithValidation
  },
  props: {
    title: {
      required: false,
      type: String as PropType<string>,
      default: ''
    }
  },
  setup () {
    const { validEmail, validPassword, ...otherRefs } = getFormRefs()
    const submit = (event: any) => {
      console.log('Valid Email', validEmail.value)
      console.log('Valid Password', validPassword.value)
      console.log('EVENT', event)
    }

    return {
      submit,
      validEmail,
      validPassword,
      ...otherRefs
    }
  }
})
</script>

<template>
  <form
    ref="formRef"
    class="login-form"
    novalidate
    @submit.prevent="submit"
  >
    <fieldset>
      <legend v-if="title">
        {{ title }}
      </legend>
      <input-with-validation
        id="InputEmail"
        ref="emailRef"
        v-model="email"
        :valid.sync="validEmail"
        name="Email Address"
        type="email"
        required
        placeholder="Account Email"
      >
        {{ emailLabel }}
      </input-with-validation>
      <input-with-validation
        id="InputPassword"
        ref="passwordRef"
        v-model="password"
        :valid.sync="validPassword"
        name="Password"
        type="password"
        required
        minlength="4"
        placeholder="Account Password"
      >
        {{ passwordLabel }}
      </input-with-validation>
    </fieldset>

    <button>
      Login
    </button>
  </form>
</template>

<style scoped>
form {
  align-items: center;
  background-color: #085d97;
  border: 0.6em double #007acc;
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  font-family: "Arial Black", Gadget, sans-serif;
  justify-content: center;
  padding: 2em 0;
  width: min(100%, 500px);
}

fieldset {
  background-color: #35495e;
  border: none;
  padding: 0.8em;
  justify-content: center;
  text-align: center;
  width: max(400px, 80%);
}

legend {
  background-color: #375975;
  border-radius: 0.2em;
  color: #ffeeee;
  font-size: 1.7em;
  margin: 0.5em auto;
  padding: 0.5em 1em;
  width: min(300px, 100%);
}

legend::after {
  border-bottom: 0.2em solid #007acc;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  content: "";
  display: block;
  margin-top: 0.2em;
  width: 100%;
}
</style>
