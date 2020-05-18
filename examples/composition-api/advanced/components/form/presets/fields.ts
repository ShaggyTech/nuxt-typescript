import { FormFieldMeta } from '@/compositions/form'

export const USERNAME: FormFieldMeta = {
  name: 'UserName',
  labelText: 'User Name',
  placeholder: 'A unique user name',
  rules: { required: true, minLength: 3 },
  type: 'text'
}
export const EMAIL: FormFieldMeta = {
  name: 'Email',
  labelText: 'Email Address',
  placeholder: 'Account Email',
  rules: { required: true },
  type: 'email'
}
export const PASSWORD: FormFieldMeta = {
  name: 'Password',
  labelText: 'Password',
  placeholder: 'Account Password',
  rules: { required: true },
  type: 'password'
}
