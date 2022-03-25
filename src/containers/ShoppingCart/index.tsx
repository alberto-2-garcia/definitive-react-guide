import React, { useState } from 'react'
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Productos from '../../components/Productos'
import Title from '../../components/Title';
import { CarroItem, ProductoType } from './interface';

const ShoppingCart = () => {
  const [productos, setProductos] = useState<ProductoType[]>([
    { nombre: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
    { nombre: 'Arbejas', precio: 1500, img: '/productos/arbejas.jpg' },
    { nombre: 'Lechuga', precio: 1500, img: '/productos/lechuga.jpg' },
  ])

  const [carro, setCarro] = useState<CarroItem[]>([]);

  const agregarAlCarro = (producto: ProductoType) => {
    console.log(producto, carro);
    let enCarro = false;
    let carrito = carro.map(product => {
      if (product.nombre == producto.nombre) {
        product.cantidad += 1;
        enCarro = true;
        console.log('encontrado', product.nombre);
      }
      return product;
    })

    console.log('encarro:', enCarro)

    if (enCarro) {
      setCarro(carrito);
    } else {
      setCarro([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  return (
    <div>
      <Navbar carro={carro} />
      <Layout>
        <Title> Tienda </Title>
        <Productos 
          agregarAlCarro={agregarAlCarro}
          productos={productos}
        />
      </Layout>
    </div>
  )
}

export default ShoppingCart