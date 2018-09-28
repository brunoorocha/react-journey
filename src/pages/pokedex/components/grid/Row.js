import React from 'react'
import './style.css'

const Row = (props) => (
    <div className="row">
        { props.children }
    </div>
)

export default Row