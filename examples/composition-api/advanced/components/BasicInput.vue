<script lang="ts">
import {
  defineComponent,
  PropType
} from '@vue/composition-api'

import { useInput } from '@/compositions/input/useInput'

export default defineComponent({
  name: 'BasicInput',
  inheritAttrs: false,
  props: {
    id: {
      required: true,
      type: (String || Number) as PropType<string | number>
    }
  },
  setup (_, { emit }) {
    const { inputValue, inputRef } = useInput(emit)

    return { inputValue, inputRef }
  }
})
</script>

<template>
  <div class="input-container">
    <label :for="id">
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
    </label>
  </div>
</template>

<style scoped>
input{
  -webkit-appearance: none;
  appearance: none;
  background-color: #EFEFEF;
  border: 0.3em solid #333333;
  font-size: 90%;
  font-weight: bold;
  margin-top: 0.5em;
  padding: 0.6em;
}

.input-container {
  display: flex;
  flex-direction: column;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 0.8em;
}

.input-container__label {
  color: #fcfcfc;
  padding: 0em 0.5em;
  text-align: left;
}
</style>
