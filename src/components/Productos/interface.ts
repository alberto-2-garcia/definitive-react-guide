import { ProductoType } from '../../containers/ShoppingCart';

export interface ProductosProps {
  agregarAlCarro(): void;
  productos: ProductoType[];
}
