import { ErrorMessage, Field, useField } from 'formik'
import { FC } from 'react'
import { InputProps } from './interface'

const Input: FC<InputProps> = ({ label, ...rest }) => {
  const [field, meta] = useField(rest);

  console.log(field, meta);

  return (
    <div>
      <label>{label}</label>
      <Field {...rest} />
      <ErrorMessage name={rest.name} />
    </div>
  )
}

export default Input