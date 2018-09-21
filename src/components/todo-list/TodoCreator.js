
import React from 'react'

export default class TodoCreator extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: ""
        }

        this.addToListHander = props.addToListHander
        console.log(props.addToListHander)
        
        this.formSubmittedHandler = this.formSubmittedHandler.bind(this)        
        this.inputChangedHandler = this.inputChangedHandler.bind(this)
    }

    formSubmittedHandler(event) {
        event.preventDefault()
        
        if(this.inputValue != "") {
            this.addToListHander(this.inputValue)
        }
    }

    inputChangedHandler(event) {        
        this.setState({
            inputValue: event.target.value
        })      
    }

    render() {
        return (
            <form onSubmit={ this.formSubmittedHandler }>
                <input type="text" onChange={ this.inputChangedHandler } />
                <input type="submit" value="Add TODO"/>
            </form>
        )
    }
}