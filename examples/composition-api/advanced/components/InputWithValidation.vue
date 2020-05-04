<script lang="ts">
import {
  defineComponent,
  PropType
} from '@vue/composition-api'

import { setupInput } from '@/compositions/useInput'
import { setupValidation } from '@/compositions/useValidation'

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
    const { inputValue, inputRef } = setupInput(emit)

    const { errorRef, valid } = setupValidation({
      inputValue,
      inputRef,
      props,
      emit
    })

    return { inputValue, inputRef, errorRef, valid }
  }
})
</script>

<template>
  <div class="input-container">
    <label :for="id">
      <slot />
      <input
        :id="id"
        ref="inputRef"
        v-model="inputValue"
        v-bind="$attrs"
        v-on="$listeners"
      >
    </label>
    <p ref="errorRef" class="error" />
  </div>
</template>

<style scoped>
p * {
  display: block;
}

input{
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border: 2px solid #333;
  background-color: #EFEFEF;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

input:valid{
  border-color: #080;
  background-color: #E1FFE5;
}

input:focus:invalid {
  outline: none;
}

input:invalid{
  border-color: #900;
  background-color: #FFAFAF;
}

input:focus:invalid {
  outline: none;
}

.input-container {
  width: 200px;
  margin: 0 auto;
  display: block;
}

.error {
  width: 100%;
  margin-top: 0;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
</style>
