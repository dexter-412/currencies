import { useForm } from 'vee-validate'
import * as Yup from 'yup'

export interface CurrencyFormFields {
    name: string,
    short: string,
    rate: number,
}

export default function () {
  const validationSchema: ObjectSchema<CurrencyFormFields> = Yup.object({
    name: Yup.string().required('Назва обов\'язкове поле'),
    short: Yup.string().required('Скорочення обов\'язкове поле'),
    rate: Yup.number().positive('Рейт має бути більше 0').typeError('Рейт має бути числом'),
  })

  const initialValues: CandidateForm = {
    name: '',
    short: '',
    rate: 0,
  }

  return useForm({
    validationSchema,
    initialValues,
  })
}