import { Ref } from '@vue/composition-api'

export { useValidation } from '~/composables/input/useValidation/useValidation'
export { getValidationRefs } from '~/composables/input/useValidation/getValidationRefs'
export { showValidationError } from '~/composables/input/useValidation/showValidationError'
export { resetErrorRef } from '~/composables/input/useValidation/resetErrorRef'
export { checkValidity } from '~/composables/input/useValidation/checkValidity'

export type InputValidationRefs = {
  errorRef: Ref<HTMLElement | null>;
  valid: Ref<boolean>
}
