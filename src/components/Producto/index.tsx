import { FC } from 'react';
import './styles.scss';
import { ProductoProps } from './interface';
import Button from '../Button';

const Producto: FC<ProductoProps> = ({ producto, agregarAlCarro }) => {
  const { nombre, precio, img } = producto;
  return (
    <div className='producto-card'>
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Button onClick={() => agregarAlCarro(producto)}>
        Agregar al carro
      </Button>
    </div>
  )
}

export default Producto