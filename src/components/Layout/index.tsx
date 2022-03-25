import { FC } from 'react';
import './styles.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className='layout'>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Layout;
