import { FC } from 'react';
import './styles.scss';
import { ProductoProps } from './interface';

const Producto: FC<ProductoProps> = ({ producto }) => {
  const { nombre, precio, img } = producto;
  return (
    <div className='producto-card'>
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  )
}

export default Producto