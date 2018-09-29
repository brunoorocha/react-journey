import React, { Component } from 'react'
import Row from '../grid/Row'
import Col from '../grid/Col'
import PokemonStats from '../pokemon-stats/PokemonStats'
import './style.css'

export default class PokemonInfo extends Component {
  render() {
    return (
      <div className="pokemon-info">
        <Row>
            <Col justifyContent="center">                
                <img className="pokemon-info_image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
            </Col>
        </Row>
        
        <Row>
            <Col justifyContent="center">                                
                <strong className="pokemon-info_name">Pokemon Name</strong>                
            </Col>
        </Row>        

        <Row>
            <div className="pokemon-info_stats-area">                
                <PokemonStats name="HP" value="35" />                
                <PokemonStats name="Special Attack" value="50" />
                <PokemonStats name="Attack" value="55" />
                <PokemonStats name="Special Defense" value="50" />
                <PokemonStats name="Defense" value="40" />
                <PokemonStats name="Speed" value="90" />
            </div>
        </Row>
      </div>
    )
  }
}
