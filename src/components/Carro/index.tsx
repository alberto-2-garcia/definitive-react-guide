import { FC, useEffect, useState } from 'react';
import BubbleAlert from '../BubbleAlert';
import DetallesCarro from '../DetallesCarro';
import { CarroProps } from './interface';
import './styles.scss';

const Carro: FC<CarroProps> = ({ carro }) => {
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <div>
      {!!cantidad && 
        <span className='bubble'>
          <BubbleAlert value={cantidad} />
        </span>
      }
      <button className='carro'>
        Carro
      </button>
      <DetallesCarro carro={carro} />
    </div>
  )
}

export default Carro