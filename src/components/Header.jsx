function Header({ generation, setGeneration }) {
  const NUM_GEN = 9;

  const handleChangeGen = (e) => {
    setGeneration(e.target.value);
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
        onChange={handleChangeGen}
      >
        <option value=''></option>
        {genOptions.map((option) => option)}
      </select>
    </header>
  );
}

export default Header;
