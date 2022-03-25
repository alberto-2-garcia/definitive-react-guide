import { FC } from 'react';
import './styles.scss';
import Producto from './../Producto';
import { ProductosProps } from './interface';
import Title from '../Title';

const Productos: FC<ProductosProps> = ({ productos, agregarAlCarro }) => {
  return (
    <div>
      <Title>Productos</Title>
      <div className='lista-productos'>
        {productos.map((producto) => (
          <Producto
            key={producto.nombre}
            producto={producto}
            agregarAlCarro={agregarAlCarro}
          />
        ))}
      </div>
    </div>
  )
}

export default Productos;
