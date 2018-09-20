import React from 'react'
import style from './style.css'

class Subtitle extends React.Component {    
    
    constructor(props) {
        super(props)

        this.text = props.children
    }

    render() {
        return (
            <h4 className="subtitle">{ this.text }</h4>
        )
    }
}


export default Subtitle