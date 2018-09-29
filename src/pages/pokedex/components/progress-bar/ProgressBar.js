import React from 'react'

export default (props) => {
  return (    
    <progress className="pokemon-info_progress-bar" value={ props.value } max="100"></progress>    
  )
}
