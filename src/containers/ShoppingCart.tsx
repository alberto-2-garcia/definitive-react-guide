import React, { useState } from 'react'
import Productos from '../components/Productos'

export type ProductoType = {
  nombre: string;
  precio: number;
  img: string;
}

const ShoppingCart = () => {
  const [productos, setProductos] = useState<ProductoType[]>([
    { nombre: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
    { nombre: 'Arbejas', precio: 1500, img: '/productos/arbejas.jpg' },
    { nombre: 'Lechuga', precio: 1500, img: '/productos/lechuga.jpg' },
  ])

  return (
    <div>
      <Productos 
        agregarAlCarro={() => console.log('wiii')}
        productos={productos}
      />
    </div>
  )
}

export default ShoppingCart