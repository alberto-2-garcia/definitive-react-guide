import { FC } from 'react';
import Carro from '../Carro';
import Logo from '../Logo';
import { NavbarProps } from './interface';
import './styles.scss';

const Navbar: FC<NavbarProps> = ({ carro }) => {
  return (
    <nav className='navbar'>
      <Logo />
      <Carro carro={carro}/>
    </nav>
  )
}

export default Navbar;
