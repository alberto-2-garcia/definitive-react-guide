export interface ProductoType {
  nombre: string;
  precio: number;
  img: string;
}

export type CarroItem = ProductoType & {
  cantidad: number;
}
