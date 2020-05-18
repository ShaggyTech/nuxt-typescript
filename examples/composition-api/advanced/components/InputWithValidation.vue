<script lang="ts">
import {
  defineComponent,
  PropType
} from '@vue/composition-api'

import { useInput } from '@/compositions/input/useInput'
import { useValidation } from '@/compositions/input/useValidation'

export default defineComponent({
  name: 'InputWithValidation',
  inheritAttrs: false,
  props: {
    id: {
      required: true,
      type: (String || Number) as PropType<string | number>
    },
    name: {
      required: true,
      type: String as PropType<string>
    }
  },
  setup (props, { emit }) {
    const { inputValue, inputRef } = useInput(emit)

    const { errorRef, valid } = useValidation({
      emit,
      inputRef,
      inputValue,
      name: props.name
    })

    return { inputValue, inputRef, errorRef, valid }
  }
})
</script>

<template>
  <label class="input-container" :for="id">
    <span class="input-container__label">
      <slot />
    </span>
    <input
      :id="id"
      ref="inputRef"
      v-model="inputValue"
      class="input-container__input"
      v-bind="$attrs"
      v-on="$listeners"
    >
    <p ref="errorRef" class="input-container__error" />
  </label>
</template>

<style scoped>
input {
  -webkit-appearance: none;
  appearance: none;
  background-color: #EFEFEF;
  border: 0.3em solid #333333;
  font-size: 90%;
  font-weight: bold;
  margin-top: 0.5em;
  padding: 0.6em;
}

input:valid {
  border-color: #008800;
}

input:valid:focus {
  background-color: #E1FFE5;
}

input:invalid {
  border-color: #8D3530;
}

input:invalid:focus {
  background-color: #FFD6D6;
}

.input-container {
  display: flex;
  flex-direction: column;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 0.8em auto;
  width: clamp(85%, 500px, 95%)
}

.input-container__label {
  color: #fcfcfc;
  padding: 0em 0.5em;
  text-align: left;
}

.input-container__error {
  background-color: #8d3530;
  border-radius: 0em 0em 0.4em 0.4em;
  color: #f5f5f5;
  font-size: 0.8em;
  text-align: left;
}

.input-container__error.active {
  padding: 0.5em 1em;
}
</style>
