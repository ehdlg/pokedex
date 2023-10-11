/* eslint-disable react/prop-types */
import Pokemon from './Pokemon';
import '../stylesheets/Pokedex.css';

function Pokedex({ pokedex }) {
  return (
    <main>
      <div className='pokedex'>
        {pokedex.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.number} />;
        })}
      </div>
    </main>
  );
}

export default Pokedex;
