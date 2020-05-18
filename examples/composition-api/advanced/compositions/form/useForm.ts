import { ref, reactive, watch } from '@vue/composition-api'
import { FormFieldset, ReactiveForm, ReactiveFormFieldset } from '@/compositions/form'

const mapFormFields = (fieldGroup: FormFieldset): ReactiveFormFieldset => {
  const tempFields: ReactiveFormFieldset = Object.assign({})

  Object.keys(fieldGroup).forEach((key: string) => {
    Object.assign(
      tempFields,
      { [key]: fieldGroup[key]?.input || null }
    )
  })

  return reactive(tempFields)
}

export const useForm = (
  fieldGroup: FormFieldset
): { form: ReactiveForm } => {
  const formFields: ReactiveFormFieldset = mapFormFields(fieldGroup)
  const valid = ref<boolean>(false)

  watch(() => fieldGroup, () => {
    let failsValidation = false
    // keep form in sync with fieldItems
    Object.keys(fieldGroup).forEach((key: any) => {
      formFields[key] = fieldGroup[key].input
      // set failsvalidtion to true if any form input has false `valid` value
      if (fieldGroup[key]?.valid === false) {
        failsValidation = true
      }
    })
    // sync form.valid with overall form validitity
    valid.value = !failsValidation
  },
  {
    deep: true,
    lazy: false
  })

  const form: ReactiveForm = reactive({
    fields: formFields,
    valid
  })

  return { form }
}
