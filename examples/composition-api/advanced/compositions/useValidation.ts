import { ref, watch, Ref } from '@vue/composition-api'
import { ExtractPropTypes } from '@vue/composition-api/dist/component/componentProps'

export const getInputValidationRefs = () => ({
  // Template ref to use on HTML Element displaying error messages
  errorRef: ref<HTMLElement>(null),
  // Updated via checkValidity HTMLInput method
  valid: ref<boolean>(false)
})

/**
 * Shows an error message in the errorRef if the input field fails HTML validation spec.
 *
 * @param {string} fieldName Name of field to show in error messages
 * @param {Ref<HTMLInputElement>} inputRef
 *   Composition Ref containing the input element that failed validation
 * @param {Ref<HTMLElement>} errorRef
 *   Composition Ref containing the error element in which to show messages
 * @returns void
 */
export const showValidationError = (
  fieldName: string,
  inputRef: Ref<HTMLInputElement | null>,
  errorRef: Ref<HTMLElement | null>
): void => {
  const inputElement: HTMLInputElement | null = inputRef.value
  const errorElement: HTMLElement | null = errorRef.value
  const validity: ValidityState | undefined = inputElement?.validity

  if (errorElement && validity) {
    if (validity.valueMissing) {
      // If the field value is empty display the following error message.
      errorElement.textContent = `${fieldName} is required.`
    } else if (validity.typeMismatch) {
      // If the field value does not pass input "type" validations (e-mail, etc)
      errorElement.textContent = `That is not a valid ${fieldName}.`
    } else if (validity.tooShort) {
      // If the field value is too short
      errorElement.textContent = `
        ${name} must be at least ${inputElement?.minLength} characters,
        you entered ${inputElement?.value.length}.
      `
    } else if (validity.tooLong) {
      // If the field value is too long
      errorElement.textContent = `
        ${fieldName} must be less than ${inputElement?.maxLength} characters,
        you entered ${inputElement?.value.length}.
      `
    }

    // Set the styling appropriately
    errorElement.className = 'error active'
  }
}

/**
 * Component setup function to validate input values and show error messages
 * based on validation state. Watches inputValue and handles validation errors.
 * Returns an object containing composition refs: `{ errorRef, valid }`
 */
export const setupValidation = (
  input: {
    inputValue: Ref<any>,
    inputRef: Ref<HTMLInputElement | null>,
    props: ExtractPropTypes<any, true>,
    emit: (event: string, ...args: any[]) => void
  }
) => {
  const { errorRef, valid } = getInputValidationRefs()

  // Watch for input changes and update error messages if validation fails
  watch(input.inputValue, (): void => {
    if (input.inputRef.value) {
      // reset errorRef content and styling
      if (errorRef.value) {
        errorRef.value.textContent = ''
        errorRef.value.className = 'error'
      }
      // Does input pass all validations?
      const isValid = (input.inputRef.value as HTMLInputElement).checkValidity() || false
      // Update valid ref value
      valid.value = isValid
      // Show any validation errors
      if (!isValid) {
        showValidationError(
          input.props.name,
          input.inputRef,
          errorRef
        )
      }
      // emit valid so the parent can .sync with it
      input.emit('update:valid', valid.value)
    }
  })

  return { errorRef, valid }
}
