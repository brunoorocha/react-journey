import React, { Component } from 'react'
import Row from '../grid/Row'
import Col from '../grid/Col'
import Dropdown from '../dropdown/Dropdown'
import SearchField from '../search-field/SearchField'
import PokemonList from '../pokemon-list/PokemonList'
import './style.css'

export default class PokedexDisplay extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         regions: [],
         pokemonEntries: [],
         pokemonEntriesFiltered: []
      }

      this.onDropdownChangeHandler = this.onDropdownChangeHandler.bind(this)
      this.onSearchFieldChangeHandler = this.onSearchFieldChangeHandler.bind(this)
    }
    

    componentDidMount() {        
        fetch("https://pokeapi.co/api/v2/region/")
            .then(result => {
                return result.json()
            }).then(data => {
                
                let regions = data.results.map((item) => {
                    return item
                })

                this.setState({
                    regions: regions
                })                                                      
            })                
    }

    onDropdownChangeHandler(selected) {        

        this.setState({
            pokemonEntries: [],
            pokemonEntriesFiltered: []
        })

        if (selected !== "") {

            fetch(selected)
                .then(regionResult => {
                    return regionResult.json()
                })
                .then(regionData => {
                    if (regionData.pokedexes[0] !== undefined) {
                        fetch(regionData.pokedexes[0].url)
                            .then(pokedexResult => {
                                return pokedexResult.json()
                            })
                            .then(pokedexData => {
                                this.setState({
                                    pokemonEntries: pokedexData.pokemon_entries
                                })
                            })
                    }
                })        
        }          
    }    

    onSearchFieldChangeHandler(query) {
        
        query = query.toLowerCase()

        let pokemonsFiltered = this.state.pokemonEntries.filter( (pokemonEntry) => {
            return pokemonEntry.pokemon_species.name.includes(query) && pokemonEntry
        })

        this.setState({
            pokemonEntriesFiltered: pokemonsFiltered
        })
    
    }

    render() {
        return (                
            <div className="pokedex-display">                                
                <Row>                            
                    <SearchField placeholder="Search by a pokemon name:" onChangeHandler={ this.onSearchFieldChangeHandler } />                            
                </Row>  
                <Row>
                    <Col justifyContent="end" grow="2">                              
                        <Dropdown label="Select a region:" options={ this.state.regions } onChangeHandler={ this.onDropdownChangeHandler } />
                    </Col>
                </Row>   
                <Row>
                    <Col>                                
                        <PokemonList pokemons={ this.state.pokemonEntriesFiltered.length === 0 ? this.state.pokemonEntries : this.state.pokemonEntriesFiltered } onSelectPokemonHandler={ this.props.onSelectPokemonHandler } />    
                    </Col>
                </Row>                                         
            </div>
        )
    }
}
