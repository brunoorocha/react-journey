import React, { Component } from 'react'
import Row from './components/grid/Row'
import Col from './components/grid/Col'
import NavigationBar from './components/navigation-bar/NavigationBar'
import PokedexDisplay from './components/pokedex-display/PokedexDisplay'
import PokemonInfo from './components/pokemon-info/PokemonInfo'

export default class Pokedex extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            pokemonSelected: undefined
        }

        this.selectPokemon = this.selectPokemon.bind(this)
    }

    selectPokemon(pokemon) {     
        
        fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemon +"/")
            .then( result => {
                return result.json()
            })
            .then( pokemon => {
                this.setState({
                    pokemonSelected: pokemon
                })

                console.log(this.state.pokemonSelected.name)
            })                                       
    }    

    render() {
        return (
            <div>
                <Row>
                    <NavigationBar title="Pokedex" />
                </Row>                
                
                <Row>
                    <Col grow="3">
                        <PokedexDisplay onSelectPokemonHandler={ this.selectPokemon } />
                    </Col>                  
                    
                    <Col>
                        { this.state.pokemonSelected !== undefined && <PokemonInfo pokemon={ this.state.pokemonSelected } /> }
                    </Col>
                </Row>
            </div>
        )
    }
}

