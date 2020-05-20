import { ref, watch, Ref } from '@vue/composition-api'

/**
 * Composition setup for use in all of our custom input components
 *
 * @example
 * // component setup():
 * setup (_, { emit }) {
 *   const { inputValue, inputRef } = setupInput(emit)
 *   return { inputValue, inputRef }
 * }
 *
 * @example
 * // <template>:
 * <input ref="inputRef" v-model="inputValue" />
 * <span>{{ inputValue }}</span>
 */
export const useInput = (emit: (event: string, ...args: any[]) => void) => {
  const inputValue = ref<any>(null)
  const inputRef = ref<HTMLInputElement>(null)

  // Watch and emit new input values so that v-model can be used in the parent
  watch(inputValue, (newInputValue: Ref<any>): void => {
    emit('input', newInputValue)
  })

  return { inputValue, inputRef }
}
