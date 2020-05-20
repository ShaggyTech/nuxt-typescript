import { Ref } from '@vue/composition-api'

/**
 * Runs HTMLInputElement.checkValidity() on `inputRef` and returns the results
 * Always returns false if inputRef is null or undefined.
 *
 * @param inputRef Ref<HTMLInputElement> on which to check validity
 */
export const checkValidity = (inputRef: Ref<HTMLInputElement | null>): boolean => {
  if (inputRef.value) {
    return inputRef.value.checkValidity()
  } else { return false }
}
