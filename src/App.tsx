import { FC } from 'react'
import Layout from './components/Layout';
import Title from './components/Title';
import ShoppingCart from './containers/ShoppingCart';

const App: FC = () => {
  return (
    <div>
      <Layout>
        <Title> Tienda </Title>
        <ShoppingCart />
      </Layout>
    </div>
  )
}

export default App;

