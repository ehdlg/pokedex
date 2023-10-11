/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Pokemon({ pokemon }) {
  return (
    <div className='pokemon pokeball-bkg'>
      <img
        className='pokemon-img'
        src={pokemon.img}
        alt={`${pokemon.name} sprite img from pokeAPI`}
        loading='lazy'
      />
      <div className='pokemon-data'>
        <h6>
          #
          {pokemon.number < 10
            ? `00${pokemon.number}`
            : pokemon.number < 100
            ? `0${pokemon.number}`
            : pokemon.number}
        </h6>

        <div className='types'>
          {pokemon.types.map((type, index) => {
            return (
              <div key={index} className={`type type-${type.type.name}`}>
                <span>{type.type.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
