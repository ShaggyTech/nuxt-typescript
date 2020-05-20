import { Ref } from '@vue/composition-api'

/** Reset errorRef to remove textContent and `active` class */
export const resetErrorRef = (errorRef: Ref<HTMLElement | null>) => {
  if (errorRef.value) {
    errorRef.value.textContent = ''
    errorRef.value.classList.remove('active')
  }
}
