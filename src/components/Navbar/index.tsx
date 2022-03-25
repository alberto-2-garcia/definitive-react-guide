import { FC } from 'react';
import Logo from '../Logo';
import './styles.scss';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <p>Carro</p>
    </nav>
  )
}

export default Navbar;
