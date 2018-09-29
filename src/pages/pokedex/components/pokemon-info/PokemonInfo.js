import React, { Component } from 'react'
import Row from '../grid/Row'
import Col from '../grid/Col'
import PokemonStats from '../pokemon-stats/PokemonStats'
import './style.css'

export default class PokemonInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {         
        name: this.props.pokemon.name,
        sprite: this.props.pokemon.sprites.front_default,
        stats: {
            speed: this.props.pokemon.stats[0].base_stat,
            special_defense: this.props.pokemon.stats[1].base_stat,
            special_attack: this.props.pokemon.stats[2].base_stat, 
            defense: this.props.pokemon.stats[3].base_stat,
            attack: this.props.pokemon.stats[4].base_stat,            
            hp: this.props.pokemon.stats[5].base_stat,            
        }
      }      
    }
    
    
    componentWillMount = () => {
        
    }    

    render() {
        return (
            <div className="pokemon-info">        
            <Row>
                <Col justifyContent="center">                
                    <img className="pokemon-info_image" src={ this.state.sprite } />
                </Col>
            </Row>
            
            <Row>
                <Col justifyContent="center">                                
                    <strong className="pokemon-info_name">{ this.state.name }</strong>                
                </Col>
            </Row>        

            <Row>
                <div className="pokemon-info_stats-area">                
                    <PokemonStats name="HP" value={ this.state.stats.hp } />                
                    <PokemonStats name="Special Attack" value={ this.state.stats.special_attack } />
                    <PokemonStats name="Attack" value={ this.state.stats.attack } />
                    <PokemonStats name="Special Defense" value={ this.state.stats.special_defense } />
                    <PokemonStats name="Defense" value={ this.state.stats.defense } />
                    <PokemonStats name="Speed" value={ this.state.stats.speed } />
                </div>
            </Row>
            </div>
        )
    }
}
