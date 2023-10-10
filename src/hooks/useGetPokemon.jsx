import { useEffect, useState } from 'react';
function useGetPokedex(gen) {
  const [pokedex, setPokedex] = useState([]);

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

    const fetchPokedex = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      setPokedex(data.results);
    };

    fetchPokedex().catch((error) => console.log(error));
  }, [gen, limit, offset]);

  return pokedex;
}

export default useGetPokedex;
