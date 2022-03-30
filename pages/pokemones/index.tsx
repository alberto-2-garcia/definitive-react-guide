import type { NextPage } from 'next';
import Link from 'next/link';

const Pokemones: NextPage = () => {
  return (
    <div>
      <h1>Pokemones</h1>
      <Link href='/'>Inicio</Link>
      <Link href='/pokemones/pikachu'>Pikachu</Link>
    </div>
  );
}

export default Pokemones;
