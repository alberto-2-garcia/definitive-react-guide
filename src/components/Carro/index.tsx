import { FC, useState } from 'react';
import BubbleAlert from '../BubbleAlert';
import './styles.scss';

const Carro: FC = () => {
  const [value, setValue] = useState(18)

  return (
    <div>
      {!!value && 
        <span className='bubble'>
          <BubbleAlert value={value} />
        </span>
      }
      <button className='carro'>
        Carro
      </button>
    </div>
  )
}

export default Carro