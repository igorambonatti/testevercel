import * as Yup from 'yup'

export interface FormData {
  name: string
  company: string
  email: string
  phone: string
}

export async function validate(data: FormData): Promise<void> {
  const schema = Yup.object().shape({
    name: Yup.string().nullable().required('Name is required'),
    email: Yup.string().nullable().required('E-mail is required').email('Enter a valid email')
  })

  await schema.validate(data, { abortEarly: false })
}
export async function preRegister(data: any): Promise<void> {
  const schema = Yup.object().shape({
    email: Yup.string().nullable().required('E-mail is required').email('Enter a valid email')
  })

  await schema.validate(data, { abortEarly: false })
}
export async function inflation(data: FormData): Promise<void> {
  const schema = Yup.object().shape({
    value: Yup.number().nullable().required('Value is required').typeError('value must be a number')
  })

  await schema.validate(data, { abortEarly: false })
}
