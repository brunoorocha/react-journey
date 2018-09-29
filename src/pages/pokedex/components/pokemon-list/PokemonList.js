import React from 'react'

class PokemonList extends React.Component {

    render() {
        return (            
            <ul className="pokemon-list">
            {
                this.props.pokemons.map( (pokemon, index) => {                                            
                    return <li key={ index } >                        
                        <a onClick={ (event) => this.props.onSelectPokemonHandler(pokemon.pokemon_species.name) }>{ pokemon.pokemon_species.name }</a>
                    </li>
                })
            }
            </ul>            
          )
    }  
}

export default PokemonList
