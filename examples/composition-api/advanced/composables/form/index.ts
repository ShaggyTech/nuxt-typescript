export { fieldsetFactory } from '~/composables/form/fieldsetFactory'
export { useForm } from '~/composables/form/useForm'

export type FormFieldMeta = {
  name: string;
  labelText?: string;
  placeholder?: string;
  rules?: Record<string, boolean | string | number>;
  type?: string;
}

export type FormField = {
  input: string | null;
  labelText: string | '';
  placeholder: string | '';
  rules: Record<string, boolean | string | number>;
  type: string | 'text';
  valid: boolean;
}

export type FormFieldset = Record<string, FormField>;

export type ReactiveFormFieldset = Record<string, any>

export interface ReactiveForm {
  fields: ReactiveFormFieldset,
  valid: boolean
}
