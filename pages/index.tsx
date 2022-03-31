import type { NextPage } from 'next';
import Link from 'next/link';
import { PokemonsProps, PokemonAPIResponse } from './../types/pokemon';

const Pokemones: NextPage<PokemonsProps> = (props: PokemonsProps) => {
  const { pokemones } = props;
  
  // console.log(pokemones)
  // console.log(pokemones.results)
  return (
    <div>
      <h1>Pokemones</h1>
      <ul>
        {pokemones.map(({ name, url }) => (
          <li key={name}>
            <Link href={`/pokemones/${url.split('/').filter(x => x).pop()}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json() as PokemonAPIResponse;

  return {
    props: {
      pokemones: data.results
    }
  }
}

export default Pokemones;
