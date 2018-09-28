import React from 'react'

const SearchField = (props) => {
  return (
    <div className="search-field">
      <input type="text" className="search-field_input" placeholder={ props.placeholder } onChange={ (event) => props.onChangeHandler(event.target.value) } />
    </div>
  )
}

export default SearchField
