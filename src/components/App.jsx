import { useState } from 'react';
import '../stylesheets/App.css';
import useGetPokedex from '../hooks/useGetPokemon';
import Header from './Header.jsx';
function App() {
  const [generation, setGeneration] = useState(1);

  const pokedex = useGetPokedex(generation);

  console.log(pokedex);

  return (
    <>
      <Header generation={generation} setGeneration={setGeneration} />
    </>
  );
}

export default App;
