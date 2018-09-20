
import React from 'react'
import style from './style.css'

class LinkList extends React.Component {

    constructor(props) {
        super(props)
        
        this.itens = props.itens               
    }

    render() {
        return (
            <ul className="link-list">                
                {   
                    this.itens.map( item => (
                        <li key={ item.id }>
                            <a href={ item.url }>{ item.title }</a>                        
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default LinkList