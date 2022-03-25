import React, { useState } from 'react'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Productos from '../components/Productos'
import Title from '../components/Title';

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
      <Navbar />
      <Layout>
        <Title> Tienda </Title>
        <Productos 
          agregarAlCarro={() => console.log('wiii')}
          productos={productos}
        />
      </Layout>
    </div>
  )
}

export default ShoppingCart