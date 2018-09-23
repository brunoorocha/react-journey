
import React from 'react'

import RemoveButton from '../remove-button/RemoveButton'
import './style.css'

export default class BulletList extends React.Component {      

    componentDidMount = () => {
        this.setState({
            itens: this.props.itens
        })        
    }

    render() {
        return (            
            <ul className="bullet-list">                                
                { 
                    this.props.itens.map( (item, index) => (
                        <li key={ index }>
                            { item }
                            <RemoveButton index={ index } actionHandler={ this.props.removeItemHandler } />
                        </li>
                    ))
                }                                       
            </ul>            
        )
    }
}