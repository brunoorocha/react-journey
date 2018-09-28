import React, { Component } from 'react'
import Row from './components/grid/Row'
import NavigationBar from './components/navigation-bar/NavigationBar'
import PokedexDisplay from './components/pokedex-display/PokedexDisplay'

export default class Pokedex extends Component {
    render() {
        return (
            <div>
                <Row>
                    <NavigationBar title="Pokedex" />
                </Row>                
                
                <Row>
                    <PokedexDisplay />
                </Row>
            </div>
        )
    }
}

