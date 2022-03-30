import type { GetStaticProps, NextPage, InferGetStaticPropsType} from 'next';
import Link from 'next/link';

interface PokemonType {
  name: string;
  url: string;
}
interface PokemonAPIResponse {
  results: PokemonType[];
  count: number;
  next: string | null;
  previous: string | null;
}

const Pokemones: NextPage = ({ pokemones }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log(pokemones)
  return (
    <div>
      <h1>Pokemones</h1>
      <Link href='/'>Inicio</Link>
      <ul>
        {(pokemones as PokemonAPIResponse).results.map(({ name, url }) => (
          <li key={name}>
            <Link href={`/pokemones/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json() as PokemonAPIResponse;

  return {
    props: {
      pokemones: data
    }
  }
}

export default Pokemones;
