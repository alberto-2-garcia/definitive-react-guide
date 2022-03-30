import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Pagina de Next JS</h1>
      <Link href='/about'>About</Link>
      <Link href='/proyectos'>Proyectos</Link>
    </div>
  )
}

export default Home
