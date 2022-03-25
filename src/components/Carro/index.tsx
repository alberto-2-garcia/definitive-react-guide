import { FC } from 'react';
import BubbleAlert from '../BubbleAlert';
import './styles.scss';

const Carro: FC = () => {
  return (
    <div>
      <span className='bubble'>
        <BubbleAlert />
      </span>
      <button className='carro'>
        Carro
      </button>
    </div>
  )
}

export default Carro