<script lang="ts">
import {
  defineComponent,
  PropType
} from '@vue/composition-api'

import { setupInput } from '@/compositions/useInput'

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
    const { inputValue, inputRef } = setupInput(emit)

    return { inputValue, inputRef }
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
  </div>
</template>

<style scoped>
input{
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

.input-container {
  width: 200px;
  margin: 0 auto;
  display: block;
}
</style>
