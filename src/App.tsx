import { FC } from 'react'
import Layout from './components/Layout';
import ShoppingCart from './containers/ShoppingCart';

const App: FC = () => {
  return (
    <div>
      <Layout>
        <ShoppingCart />
      </Layout>
    </div>
  )
}

export default App;

