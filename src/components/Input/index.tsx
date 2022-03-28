import { FC } from 'react'
import { InputProps } from './interface'

const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  )
}

export default Input