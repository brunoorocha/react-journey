import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const RemoveButton = (props) => (                
    <button className="remove-button" onClick={ (event) => (props.actionHandler(props.index)) }>remove</button>
)

RemoveButton.propTypes = {
    index: PropTypes.number.isRequired,
    actionHandler: PropTypes.func.isRequired
}

export default RemoveButton