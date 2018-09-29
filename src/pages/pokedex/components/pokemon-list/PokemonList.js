import React from 'react'

class PokemonList extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         images: []
      }

      this.getPokemonImages = this.getPokemonImages.bind(this)
    }

    componentDidMount() {        
        this.props.pokemons.map( (pokemon) => {
            console.log(pokemon.pokemon_species.name)            
            this.getPokemonImages(pokemon.pokemon_species.name)
            return null
        })
    }
    

    getPokemonImages(pokemonName) {        
        fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemonName +"/")
            .then(results => {
                return results.json()
            })
            .then(data => {
                return data.sprites.front_default                
            })
    }

    render() {
        return (
            <ul className="pokemon-list">
              {
                  this.props.pokemons.map( (pokemon, index) => {                                            
                      return <li key={ index } >                        
                        { pokemon.pokemon_species.name }
                      </li>
                  })
              }
            </ul>
          )
    }  
}

export default PokemonList
