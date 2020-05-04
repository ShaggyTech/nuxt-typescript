import { ref, watch, Ref } from '@vue/composition-api'

export const setupInput = (emit: (event: string, ...args: any[]) => void) => {
  const inputValue = ref<any>(null)
  // Template ref to use on HTMLInput Element
  const inputRef = ref<HTMLInputElement>(null)

  // Watch new input values and emit 'input' event to the parent
  watch(inputValue, (newInputValue: Ref<any>): void => {
    emit('input', newInputValue)
  })

  return { inputValue, inputRef }
}
