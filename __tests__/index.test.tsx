import { render, screen } from '@testing-library/react';
import Pokemones, { PokemonAPIResponse, PokemonType, PokemonsProps, getStaticProps } from '../pages';

const pokemon: PokemonType = {
  name: 'pikachu',
  url: '1'
}

const props: PokemonsProps = {
  pokemones: [pokemon]
}

describe('Index', () => {
  describe('Component', () => {
    it('se renderiza', () => {
      const { getByText } = render(<Pokemones {...props}/>)

      const title = getByText('Pokemones');
      expect(title).toBeInTheDocument();

      const pikachu = getByText(pokemon.name);
      const url = pikachu.getAttribute('href')
      expect(pikachu).toBeInTheDocument();
      expect(url).toEqual('/pokemones/1')
    })
  })

  describe('getStaticProps', () => {
    it('regresa pokemones', async () => {
      global.fetch = jest.fn()
        .mockImplementation(url => {
          expect(url).toEqual('https://pokeapi.co/api/v2/pokemon?limit=151');
          return new Promise(resolve => resolve({
            json: () => Promise.resolve({
              results: 'lista de pokemones'
            })
          }))
        });
  
      const { props } = await getStaticProps();
  
      expect(props.pokemones).toEqual('lista de pokemones');
    })
  })
});

export {}