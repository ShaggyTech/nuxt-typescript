import { USERNAME, EMAIL, PASSWORD } from '@/components/form/presets/fields'

export const fieldsetLogin = [EMAIL, PASSWORD]

export const fieldsetRegister = [
  EMAIL,
  { ...PASSWORD, rules: { ...PASSWORD.rules, minLength: 6 } },
  USERNAME
]
