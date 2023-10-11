/* eslint-disable react/prop-types */
function Header({ generation, handleChangeGen, handleSearch }) {
  const NUM_GEN = 9;

  const changeGen = (e) => {
    handleChangeGen(e.target.value);
  };

  const genOptions = [];
  for (let i = 1; i <= NUM_GEN; i++) {
    genOptions.push(<option key={i} value={i}>{`Generation ${i}`}</option>);
  }
  genOptions.push(
    <option key={NUM_GEN + 1} value={'all'}>
      {'All'}
    </option>
  );
  return (
    <header>
      <h1>Pokedex</h1>

      <select
        name='generation'
        id='generation'
        value={generation}
        onChange={changeGen}
      >
        {genOptions.map((option) => option)}
      </select>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search by name or Pokedex entry'
        onChange={(e) => handleSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
