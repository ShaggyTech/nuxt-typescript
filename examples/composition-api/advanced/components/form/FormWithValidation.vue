<script lang="ts">
import {
  defineComponent,
  PropType
} from '@vue/composition-api'

/* Components */
import InputWithValidation from '@/components/InputWithValidation.vue'
import { fieldsetFactory, useForm, FormFieldMeta } from '@/compositions/form'

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
    },
    fieldset: {
      required: true,
      type: Array as PropType<FormFieldMeta[]>
    }
  },
  setup (props, { emit }) {
    const fields = fieldsetFactory([...props.fieldset])
    const { form } = useForm(fields)

    const submit = () => {
      if (form.valid) {
        emit('update:form', form)
        emit('submit', form)
      }
    }

    return {
      form,
      submit,
      fields
    }
  }
})
</script>

<template>
  <form
    @submit.prevent="submit"
  >
    <fieldset>
      <legend v-if="title">
        {{ title }}
      </legend>

      <input-with-validation
        v-for="(field, name) in fields"
        :id="name + 'InputField' + Math.floor((Math.random() * (1 - 1000) + 1))"
        :key="name"
        v-model="fields[name].input"
        :valid.sync="fields[name].valid"
        :name="name"
        :type="fields[name].type"
        :placeholder="fields[name].placeholder"
        v-bind="fields[name].rules"
      >
        {{ fields[name].labelText }}
      </input-with-validation>
    </fieldset>

    <button class="login-form__submit" type="submit" :disabled="!form.valid">
      Submit
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
  height: 0%;
  padding: 1em 0;
}

fieldset {
  background-color: #35495e;
  border: 0.2em solid #375975;
  padding-bottom: 0.8em;
  justify-content: center;
  width: clamp(min(500px, 0.01%), 700px, 90%);
}

legend {
  background-color: #375975;
  border-radius: 0.2em;
  color: #ffeeee;
  font-size: 1.6em;
  margin: 0.5em auto;
  padding: 0.3em 1em;
  width: clamp(66%, 450px, 90%);
}

legend::after {
  border-bottom: 0.2em solid #007acc;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  content: "";
  display: block;
  margin-top: 0.3em;
  width: 100%;
}

button {
  background-color: #008800;
  background-position: center;
  border: 0.1em solid #32632f;
  border-radius: 0.3em;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.1em;
  margin: 0.5em auto;
  padding: 0.4em 0;
  transition: background 0.8s;
  width: clamp(min(500px, 0.01%), 450px, 90%);
}

button:focus {
  outline: #007acc solid 2px;
}

button:active {
  background-color: #00ce00;
  background-size: 100%;
  transition: background 0s;
}

button:not(:disabled):hover {
  box-shadow: inset 0 0 0 1px #292929;
}

button:disabled {
  background-color: #005950;
  border: none;
  box-shadow: none;
  color: #666666;
}
</style>
