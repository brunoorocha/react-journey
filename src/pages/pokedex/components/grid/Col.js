import React, { Component } from 'react'
import './style.css'

class Col extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         options: this.getOptions()
      }

      this.getOptions = this.getOptions.bind(this)
    }
    
    getOptions() {    
        let options = ""
        options += this.props.alignItens !== undefined ? " col__align-items--"+ this.props.alignItens : ""
        options += this.props.justifyContent !== undefined ? " col__justify-content--"+ this.props.justifyContent : ""
        options += this.props.grow !== undefined ? " col__flex-grow--"+ this.props.grow : ""
        
        return options        
    }

    render() {
        return (
            <div className={ "col"+ this.state.options }>
                { this.props.children }
            </div>
        )
    }
} 

export default Col