import { FC } from 'react';
import './styles.scss';

const Title: FC = ({ children }) => {
  return (
    <h1 className='title'> {children} </h1>
  )
}

export default Title;
