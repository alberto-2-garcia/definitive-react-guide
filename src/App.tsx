import { FC } from 'react'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';
import ShoppingCart from './containers/ShoppingCart';

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <Title> Tienda </Title>
        <ShoppingCart />
      </Layout>
    </div>
  )
}

export default App;

