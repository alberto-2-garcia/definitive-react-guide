import { ErrorMessage, Field } from 'formik'
import { FC } from 'react'
import { InterestInputProps } from './interface'

const InterestInput: FC<InterestInputProps> = ({ label, ...rest }) => {
  return (
    <div>
      <label> {label} </label>
      <Field {...rest} />
      <ErrorMessage name={rest.name} />
    </div>
  )
}

export default InterestInput