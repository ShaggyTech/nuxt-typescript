import { reactive } from '@vue/composition-api'
import { FormFieldMeta, FormField, FormFieldset } from '@/compositions/form'

export const fieldsetFactory = (fieldItems: FormFieldMeta[]): FormFieldset => {
  const fields: FormFieldset = Object.assign({})

  fieldItems.forEach((item) => {
    const fieldRef: FormField = {
      input: null,
      labelText: item.labelText || '',
      placeholder: item.placeholder || '',
      rules: item.rules || {},
      type: item.type || 'text',
      valid: false
    }
    Object.assign(fields, { [item.name]: fieldRef })
  })

  return reactive(fields)
}
