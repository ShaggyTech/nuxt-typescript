import { Ref } from '@vue/composition-api'
import { resetErrorRef } from '@/compositions/input/useValidation'

/**
 * Shows an error message if the input field fails HTML validation spec.
 * Sets `textContent` of `errorRef` to a custom message based on `inputRef` ValidityState
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 *
 * @param fieldName Name of field to show in error messages
 * @param inputRef
 *   Composition Ref containing the input element that failed validation
 * @param errorRef
 *   Composition Ref containing the error element in which to show messages
 * @returns void
 */
export const showValidationError = (
  fieldName: string,
  inputRef: Ref<HTMLInputElement | null>,
  errorRef: Ref<HTMLElement | null>
): void => {
  const inputElement = inputRef?.value
  const errorElement = errorRef?.value
  const validity = inputElement?.validity

  if (errorElement && validity) {
    // Reset errorRef content and styling
    resetErrorRef(errorRef)

    if (validity.valueMissing) {
      // If the field value is empty
      errorElement.textContent = `${fieldName} is required.`
    } else if (validity.typeMismatch) {
      // If the field value does not pass input "type" validations (e-mail, etc)
      errorElement.textContent = `That is not a valid ${fieldName}.`
    } else if (validity.tooShort) {
      // If the field value is too short
      errorElement.textContent = `
        ${fieldName} must be at least ${inputElement?.minLength} characters,
        you entered ${inputElement?.value.length}.
      `
    }
    // Set a class so the component can be styled
    errorElement.classList.add('active')
  }
}
