import type { GetStaticProps, NextPage, InferGetStaticPropsType} from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PokemonType, PokemonsProps, PokemonAPIResponse } from './../types/pokemon';

const Poke: NextPage = () => {
  // const { pokemones } = props;

  const [loading, setLoading] = useState(true);
  const [pokemones, setPokemones] = useState<PokemonType[]>([]);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json() as PokemonAPIResponse;
      return data.results;
    }

    getPokemones().then(results => {
      setPokemones(results);
      setLoading(false);
    })
  }, [])

  if (loading) return <p>Cargando...</p>;
  
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

export default Poke;
