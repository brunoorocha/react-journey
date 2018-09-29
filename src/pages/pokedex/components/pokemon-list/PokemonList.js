import React from 'react'

class PokemonList extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         images: []
      }      
    }

    render() {
        return (            
            <ul className="pokemon-list">
            {
                this.props.pokemons.map( (pokemon, index) => {                                            
                    return <li key={ index } >                        
                        <a href="">{ pokemon.pokemon_species.name }</a>
                    </li>
                })
            }
            </ul>            
          )
    }  
}

export default PokemonList
