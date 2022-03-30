import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Octoexpansion from '../public/octoexpansion.jpg';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Pagina de Next JS</h1>
      <Link href='/about'>About</Link>
      <Link href='/proyectos'>Proyectos</Link>
      <Link href='/pokemones'>Pokemones</Link>
      <Image src='/octoexpansion.jpg' width={200} height={100} />
      {/* <Image src='/octoexpansion.jpg' width={200} height={100} /> */}
      <Image src={Octoexpansion} width={200} height={100} />
      {/* <Image src={Octoexpansion} width={200} height={100} /> */}
    </div>
  )
}

export default Home
