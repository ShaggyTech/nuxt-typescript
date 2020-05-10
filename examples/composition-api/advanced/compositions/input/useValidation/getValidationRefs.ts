import { ref } from '@vue/composition-api'
import { InputValidationRefs } from '~/compositions/input/useValidation'

/** Returns composition refs for use in the InputWithValidation component */
export const getValidationRefs = (): InputValidationRefs => ({
  /** Template ref to use on HTML Element displaying error messages */
  errorRef: ref(null),
  /** Updated via sibling HTMLInput.checkValidity() */
  valid: ref(false)
})
