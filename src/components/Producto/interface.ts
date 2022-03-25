import { ProductoType } from "../../containers/ShoppingCart/interface";

export interface ProductoProps {
  producto: ProductoType;
  agregarAlCarro(producto: ProductoType): void;
}
