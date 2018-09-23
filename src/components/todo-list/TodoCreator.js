
import React from 'react'

export default class TodoCreator extends React.Component {

    state = {
        inputValue: "",            
    }

    constructor(props) {
        super(props)

        this.formSubmittedHandler = this.formSubmittedHandler.bind(this)        
        this.inputChangedHandler = this.inputChangedHandler.bind(this)
    }  
    
    formSubmittedHandler(event, addItemHandler) {
        event.preventDefault()

        if (this.state.inputValue !== "") {
            const inputValue = this.state.inputValue.slice()                                            
            this.setState({
                inputValue: ''
            })
            
            addItemHandler(inputValue)
        }        
    }   

    inputChangedHandler(event) {                        
        this.setState({            
            inputValue: event.target.value,
        })                
    }    

    render() {
        return (
            <form onSubmit={ (event) => {                                                              
                this.formSubmittedHandler(event, this.props.addItemHandler)                                    
            }}>
                <input type="text" className="text-field" onChange={ this.inputChangedHandler } value={ this.state.inputValue } />
                <input type="submit" className="action-button" value="Add TODO" />
            </form>
        )
    }
}