import Poke from '../pages/poke';
import { render, waitFor } from '@testing-library/react';
import { PokemonType, PokemonsProps } from '../types/pokemon';

const pokemon: PokemonType = {
  name: 'pikachu',
  url: '1'
}

const pokemones: PokemonsProps = {
  pokemones: [pokemon]
}

describe('Poke', () => {
  it('se renderiza', async () => {
    global.fetch = jest.fn()
        .mockImplementation(url => {
          expect(url).toEqual('https://pokeapi.co/api/v2/pokemon?limit=151');
          return new Promise(resolve => resolve({
            json: () => Promise.resolve({
              results: [pokemon]
            })
          }))
        });
    const { getByText } = render(<Poke />);

    const loading = getByText('Cargando...');
    expect(loading).toBeInTheDocument();

    await waitFor(() => getByText('Pokemones'));

    const title = getByText('Pokemones');
    expect(title).toBeInTheDocument();

    const pikachu = getByText(pokemon.name);
    const url = pikachu.getAttribute('href')
    expect(pikachu).toBeInTheDocument();
    expect(url).toEqual('/pokemones/1')
  });
});