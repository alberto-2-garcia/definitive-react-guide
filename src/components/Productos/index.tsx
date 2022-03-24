import { FC } from 'react';
import './styles.scss';
import Producto from './../Producto';
import { ProductosProps } from './interface';

const Productos: FC<ProductosProps> = ({ productos, agregarAlCarro }) => {
  return (
    <div>
      <h1>Productos</h1>
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
