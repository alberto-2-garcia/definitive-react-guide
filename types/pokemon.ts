export interface PokemonType {
  name: string;
  url: string;
}
export interface PokemonAPIResponse {
  results: PokemonType[];
  count: number;
  next: string | null;
  previous: string | null;
}

// export type PokemonsProps = InferGetStaticPropsType<typeof getStaticProps>;
export type PokemonsProps = {
  pokemones: PokemonType[];
};
