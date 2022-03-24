import { FC } from 'react';
import './styles.scss';
import { ButtonProps } from './interface';

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={() => onClick()}> {children} </button>
  )
}

export default Button;