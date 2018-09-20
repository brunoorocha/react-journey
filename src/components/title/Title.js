import React from 'react'
import style from './style.css'

class Title extends React.Component {

    constructor(props) {
        super(props)

        this.text = props.children
    }

    render() {
        return (
            <h1 className="title" >{ this.text }</h1>   
        )        
    }
}

export default Title