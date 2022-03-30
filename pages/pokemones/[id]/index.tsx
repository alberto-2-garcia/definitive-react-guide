import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import useIsMounted from "../../../hooks/useIsMounted";

interface Ability {
  name: string;
  url: string;
}

interface AbilityArray {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Sprites {
  back_default: string; 
  back_female: string; 
  back_shiny: string;
  back_shiny_female: string; 
  front_default: string;
  front_female: string; 
  front_shiny: string;
  front_shiny_female: string; 
}

interface Stat {
  name: string;
  url: string;
}
interface StatsArray {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface Type {
  name: string;
  url: string;
}

interface TypeArray {
  type: Type;
  slot: number;
}

interface PokemonRespone {
  name: string;
  id: number;
  abilities: AbilityArray[];
  sprites: Sprites;
  stats: StatsArray[];
  types: TypeArray[];
}

const Pokemon: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  console.log(props.pokemon);

  const { name, id, abilities, sprites, stats, types } = props.pokemon as PokemonRespone;

  console.log('abilities',  abilities);

  return (
    <div>
      <h1>Pokemon: {name} ({id})</h1>
      <Link href='/'>Inicio</Link>
      <div>
        <div>
          <ul>
            {abilities.map(({ability}) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {stats.map(({stat}) => (
              <li key={stat.name}>{stat.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {types.map(({type}) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={sprites.front_default} width={200} height={200}/>
        </div>
      </div>
      {/* <Link href={`/pokemones/${id}/descripcion`}>Descripcion</Link> */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params)
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.id}`);
  const data = await response.json()

  return {
    props: {
      pokemon: data
    }
  }
}

export default Pokemon;
