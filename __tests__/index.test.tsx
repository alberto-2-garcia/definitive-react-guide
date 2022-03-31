import { render, screen } from '@testing-library/react';
import Pokemones, { PokemonAPIResponse, PokemonType, PokemonsProps } from '../pages';

const pokemon: PokemonType = {
  name: 'pikachu',
  url: 'link'
}

const pokemones: PokemonAPIResponse = {
  results: [{...pokemon}],
  count: 1,
  next: null,
  previous: null
}

const props: PokemonsProps = {
  pokemones
}

describe('Index', () => {
  describe('Component', () => {
    it('se renderiza', () => {
      const { getByText } = render(<Pokemones {...props}/>)

      const title = getByText('Pokemones');

      expect(title).toBeInTheDocument();
    })
  })

  describe('getStaticProps', () => {
    it('suma 2 + 2', () => {
      expect(2 + 2).toBe(4);
    })
  })
});

export {}