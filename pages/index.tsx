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
  // console.log(pokemones.results)
  return (
    <div>
      <h1>Pokemones</h1>
      <ul>
        {(pokemones as PokemonAPIResponse).results.map(({ name, url }) => (
          <li key={name}>
            <Link href={`/pokemones/${url.split('/')[6]}`}>{name}</Link>
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
