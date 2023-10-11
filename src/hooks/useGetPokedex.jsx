import { useEffect, useState } from 'react';
import pokemonDB from '../db/pokemon.json';

function useGetPokedex(filters) {
  const [pokedex, setPokedex] = useState([]);

  const genPoke = {
    1: '1-151',
    2: '152-251',
    3: '252-386',
    4: '387-493',
    5: '494-649',
    6: '650-721',
    7: '722-809',
    8: '810-905',
    9: '906-1010',
    all: '1-1010',
  };

  const selectedGenRange = genPoke[filters.generation]
    ? genPoke[filters.generation]
    : genPoke[1];

  let [start, end] = selectedGenRange.split('-');

  useEffect(() => {
    let newPokedex = pokemonDB.slice(start - 1, end);
    if (filters.search) {
      console.log('a');
      newPokedex = newPokedex.filter((pokemon) => {
        return (
          pokemon.name.indexOf(filters.search) !== -1 ||
          pokemon.number == filters.search
        );
      });
    }

    setPokedex(newPokedex);
  }, [filters, end, start]);

  return pokedex;
}

export default useGetPokedex;
