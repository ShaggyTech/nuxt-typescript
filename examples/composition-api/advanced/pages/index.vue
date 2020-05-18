<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
/* Components */
import FormWithValidation from '@/components/form/FormWithValidation.vue'
import { fieldsetLogin, fieldsetRegister } from '@/components/form/presets/fieldsets'
import { ReactiveForm } from '@/compositions/form'

const LOGIN_TEXT = 'No Account? Click here to register.'
const REGISTER_TEXT = 'Already a member? Click here to login.'

export default defineComponent({
  layout: 'default',
  components: {
    FormWithValidation
  },
  setup () {
    const submitLoginForm = (form: ReactiveForm) => {
      console.log('Login Form Submitted', { ...form })
    }
    const submitRegisterForm = (form: ReactiveForm) => {
      console.log('Register Form Submitted', { ...form })
    }

    const cardRef = ref<HTMLElement>(null)
    const isFlipped = ref<boolean>(false)

    const toggleBtnRef = ref<HTMLButtonElement>(null)
    const toggleBtnText = ref<string>(LOGIN_TEXT)

    const toggleFlipped = () => {
      isFlipped.value = !isFlipped.value

      if (cardRef.value && toggleBtnRef.value) {
        if (isFlipped.value) {
          toggleBtnText.value = REGISTER_TEXT
          cardRef.value.classList.add('is-flipped')
        } else {
          toggleBtnText.value = LOGIN_TEXT
          cardRef.value.classList.remove('is-flipped')
        }

        toggleBtnRef.value.classList.add('changed')
        setTimeout(() => toggleBtnRef.value!.classList.remove('changed'), 1000)
      }
    }

    return {
      cardRef,
      fieldsetLogin,
      fieldsetRegister,
      isFlipped,
      submitLoginForm,
      submitRegisterForm,
      toggleBtnRef,
      toggleBtnText,
      toggleFlipped
    }
  }
})
</script>

<template scoped>
  <div class="home-container">
    <button
      ref="toggleBtnRef"
      class="toggle-button"
      @click="toggleFlipped"
    >
      {{ toggleBtnText }}
    </button>
    <div class="scene">
      <div ref="cardRef" class="card">
        <form-with-validation
          id="LoginForm"
          class="card__face card__face--front"
          title="Login"
          :fieldset="fieldsetLogin"
          @submit="submitLoginForm"
        />
        <form-with-validation
          id="RegisterForm"
          class="card__face card__face--back"
          title="Register"
          :fieldset="fieldsetRegister"
          @submit="submitRegisterForm"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#LoginForm {
  height: 400px;
}

#RegisterForm {
  height: 460px;
}

.home-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.scene {
  height: 460px;
  perspective: 200vw;
  width: clamp(50%, 500px, 100%);
}

.card {
  transition: transform 1s;
  transform-origin: center right;
  transform-style: preserve-3d;
}

.card.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}

.card__face {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
}

.card__face--back {
  transform: rotateY( 180deg );
}

.toggle-button {
  background-color: #005950;
  border: 5px inset #05fb6182;
  color: #f0f0f0;
  cursor: pointer;
  font-size: 1.1em;
  outline: none;
  padding: 0.5em;
  margin: 1em auto;
  transform-origin: top center;
  transform-style: preserve-3d;
  width: clamp(50%, 500px, 100%);
}

.toggle-button.changed {
  animation: fadeSpin 1s forwards;
}

@keyframes fadeSpin {
0% {
  background-color: #000000;
  opacity: 0;
  transform: scale(0) rotateY( 180deg ) translateY(100%);
}

100% {
  opacity: 1;
  transform: scale(1) rotateY( 0deg ) translateY(0%);
}
}
</style>
