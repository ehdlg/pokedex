import { useEffect, useState } from 'react';
function useGetPokedex(gen) {
  const [pokedex, setPokedex] = useState([]);
  const [pokedexLoading, setPokedexLoading] = useState(false);
  const [pokedexError, setPokedexError] = useState(null);

  const genPoke = {
    1: '0-151',
    2: '151-100',
    3: '251-135',
    4: '386-107',
    5: '493-156',
    6: '649-72',
    7: '721-88',
    8: '809-97',
    9: '905-111',
    all: '0-1016',
  };

  let [offset, limit] = genPoke[gen].split('-');

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    setPokedexLoading(true);
    setPokedexError(null);

    const fetchPokedex = async () => {
      const response = await fetch(URL);
      if (!response.ok || response.status >= 400) {
        throw new Error('Error tryng to fetch');
      }
      const data = await response.json();
      const newPokedex = [];

      data.results.forEach((pokemon, index) => {
        newPokedex.push({ ...pokemon, number: parseInt(offset) + index + 1 });
      });

      setPokedex(newPokedex);
    };

    fetchPokedex()
      .catch((error) => setPokedexError(error.message))
      .finally(() => setPokedexLoading(false));
  }, [gen, limit, offset]);

  return { pokedex, pokedexError, pokedexLoading };
}

export default useGetPokedex;
