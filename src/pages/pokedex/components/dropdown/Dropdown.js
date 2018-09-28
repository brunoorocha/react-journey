import React from 'react'

const Dropdown = (props) => {
  return (
    <div>
        <label className="dropdown_label">{ props.label }</label>
        <select className="dropdown" onChange={ (event) => props.onChangeHandler(event.target.value) } >
            <option value=""></option>
        {
            props.options.map((item, index) => {
                return (<option key={ index } value={ item.url } >{ item.name }</option>)
            })
        }
        </select>
    </div>
  )
}

export default Dropdown