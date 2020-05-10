import { watch, Ref } from '@vue/composition-api'

import {
  checkValidity,
  getValidationRefs,
  showValidationError,
  resetErrorRef,
  InputValidationRefs
} from '@/compositions/input/useValidation'

/**
 * Component setup function to validate input values and show error messages
 * based on validation state.
 *
 * Watches inputValue and shows validation messages via useValidation.showValidationError().
 * Returns an object containing composition refs.
 * `=> { errorRef, valid }`
 *
 * @param input Object
 * @param input.name Name of the field to show in error messages
 * @param input.inputValue input value you want to watch
 * @return <InputValidationRefs>
 */
export const useValidation = (
  input: {
    name: string,
    inputValue: Ref<any>,
    inputRef: Ref<HTMLInputElement | null>,
    emit: (event: string, ...args: any[]) => void
  }
): InputValidationRefs => {
  const { errorRef, valid } = getValidationRefs()

  // Watch for input changes and update error messages if validation fails
  watch(input.inputValue, (): void => {
    if (input.inputRef.value !== null) {
      // Reset errorRef textContent and className to initial values
      resetErrorRef(errorRef)

      // True if input value passes all validations
      const isValid = checkValidity(input.inputRef)

      // Update valid ref
      valid.value = isValid

      if (!isValid && errorRef.value) {
        // Show the user custom messages about why validation failed
        showValidationError(
          input.name,
          input.inputRef,
          errorRef
        )
      }

      // Emit new `valid` value so it can be used in the parent.
      // example: <input :valid.sync="someParentValue" />
      input.emit('update:valid', valid.value)
    }
  })

  // Return refs for use in components
  return { errorRef, valid }
}
