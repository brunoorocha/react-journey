import React from 'react'

const PokemonList = (props) => {
  return (
    <ul className="pokemon-list">
      {
          props.pokemons.map( (pokemon, index) => {
              return <li key={ index } >{ pokemon.pokemon_species.name }</li>
          })
      }
    </ul>
  )
}

export default PokemonList
