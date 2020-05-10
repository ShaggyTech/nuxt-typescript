import { Ref } from '@vue/composition-api'

export { useValidation } from '@/compositions/input/useValidation/useValidation'
export { getValidationRefs } from '@/compositions/input/useValidation/getValidationRefs'
export { showValidationError } from '@/compositions/input/useValidation/showValidationError'
export { resetErrorRef } from '@/compositions/input/useValidation/resetErrorRef'
export { checkValidity } from '@/compositions/input/useValidation/checkValidity'

export type InputValidationRefs = {
  errorRef: Ref<HTMLElement | null>;
  valid: Ref<boolean>
}
