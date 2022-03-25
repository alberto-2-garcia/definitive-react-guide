import { FC, useEffect, useState } from 'react';
import BubbleAlert from '../BubbleAlert';
import DetallesCarro from '../DetallesCarro';
import { CarroProps } from './interface';
import './styles.scss';

const Carro: FC<CarroProps> = ({ carro }) => {
  const [mostrarDetallesCarro, setMostrarDetallesCarro] = useState(false)

  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

  const mostrarCarro = () => {
    setMostrarDetallesCarro(valor => !valor);
  }

  return (
    <div>
      {!!cantidad && 
        <span className='bubble'>
          <BubbleAlert value={cantidad} />
        </span>
      }
      <button className='carro' onClick={() => mostrarCarro()}>
        Carro
      </button>
      {mostrarDetallesCarro && <DetallesCarro carro={carro} />}
    </div>
  )
}

export default Carro