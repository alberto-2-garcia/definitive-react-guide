import { ErrorMessage, Field } from 'formik'
import { FC } from 'react'
import { InputProps } from './interface'

const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <Field {...rest} />
      <ErrorMessage name={rest.name} />
    </div>
  )
}

export default Input