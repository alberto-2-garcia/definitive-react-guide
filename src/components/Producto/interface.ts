import { ProductoType } from "../../containers/ShoppingCart";

export interface ProductoProps {
  producto: ProductoType;
  agregarAlCarro(producto: ProductoType): void;
}
