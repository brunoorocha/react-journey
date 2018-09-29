import React, { Component } from 'react'
import Row from './components/grid/Row'
import Col from './components/grid/Col'
import NavigationBar from './components/navigation-bar/NavigationBar'
import PokedexDisplay from './components/pokedex-display/PokedexDisplay'
import PokemonInfo from './components/pokemon-info/PokemonInfo'

export default class Pokedex extends Component {
    render() {
        return (
            <div>
                <Row>
                    <NavigationBar title="Pokedex" />
                </Row>                
                
                <Row>
                    <Col grow="3">
                        <PokedexDisplay />
                    </Col>                  
                    
                    <Col>
                        <PokemonInfo />
                    </Col>
                </Row>
            </div>
        )
    }
}

