/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Pokemon({ pokemon }) {
  return (
    <div className='pokemon'>
      <img
        className='pokemon-img'
        src={pokemon.img}
        alt={`${pokemon.name} sprite img from pokeAPI`}
        loading='lazy'
      />
      <h5>
        #
        {pokemon.number < 10
          ? `00${pokemon.number}`
          : pokemon.number < 100
          ? `0${pokemon.number}`
          : pokemon.number}
      </h5>

      <h4 className='pokemon-name'>{pokemon.name}</h4>
    </div>
  );
}

export default Pokemon;
