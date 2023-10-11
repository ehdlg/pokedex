import { useState } from 'react';
import '../stylesheets/App.css';
import useGetPokedex from '../hooks/useGetPokedex';
import Header from './Header.jsx';
import Pokedex from './Pokedex';
function App() {
  const [filters, setFilters] = useState({
    generation: 1,
    search: '',
  });

  const setGeneration = (newGen) => {
    console.log('aa');
    const newFilter = { ...filters, generation: newGen };
    setFilters(newFilter);
  };

  const setSearch = (search) => {
    setFilters({ ...filters, search: search });
  };

  const pokedex = useGetPokedex(filters);

  return (
    <>
      <Header
        generation={filters.generation}
        handleChangeGen={setGeneration}
        handleSearch={setSearch}
      />
      <Pokedex pokedex={pokedex} />
    </>
  );
}

export default App;
