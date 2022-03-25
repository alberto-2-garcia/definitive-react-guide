import { ProductoType } from '../../containers/ShoppingCart/interface';

export interface ProductosProps {
  agregarAlCarro(producto: ProductoType): void;
  productos: ProductoType[];
}
