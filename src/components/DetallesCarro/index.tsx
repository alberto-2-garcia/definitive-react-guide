import { FC } from 'react';
import { DetallesCarroProps } from './interface';
import './styles.scss';

const DetallesCarro: FC<DetallesCarroProps> = ({ carro }) => {
  return (
    <div className='detalles-carro'>
      <ul className='productos'>
        {carro.map(({ nombre, img, precio, cantidad}) => (
          <li key={nombre} className='producto'>
            <img alt={nombre} src={img} width='50' height='32' />
            <p>{nombre}</p>
            <p>{cantidad}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DetallesCarro