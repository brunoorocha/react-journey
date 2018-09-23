import React from 'react'

import './style.css'

const RemoveButton = (props) => (                
    <button className="remove-button" onClick={ (event) => (props.actionHandler(props.index)) }>remove</button>
)

export default RemoveButton