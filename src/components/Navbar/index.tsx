import { FC } from 'react';
import Carro from '../Carro';
import Logo from '../Logo';
import './styles.scss';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <Carro />
    </nav>
  )
}

export default Navbar;
