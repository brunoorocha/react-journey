
import React from 'react'

import style from './style.css'

export default class BulletList extends React.Component {

    render() {
        return (
            <ul className="bullet-list">
                {
                    this.props.itens.map( (item, index) => (
                        <li key={ index }>
                            { item }
                        </li>
                    ))
                }                
            </ul>
        )
    }
}