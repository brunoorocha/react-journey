import React from 'react'

import BulletList from '../bullet-list/BulletList'

export default class TodoList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
            itens: ['Warm Up', 'Handles Workout', 'Shooting Training'],
        }

        this.formSubmittedHandler = this.formSubmittedHandler.bind(this)        
        this.inputChangedHandler = this.inputChangedHandler.bind(this)
    }    

    addToTodoList(todo) {
        let itens = this.state.itens.slice().concat(todo)
        
        this.setState({
            inputValue: '',
            itens: itens
        })                     
    }

    formSubmittedHandler(event) {
        event.preventDefault()                
        
        if(this.state.inputValue != "") {            
            this.addToTodoList(this.state.inputValue)
        }
    }

    inputChangedHandler(event) {                        
        this.setState({            
            inputValue: event.target.value,
        })                
    }

    render() {
        return (
            <React.Fragment>                
                <BulletList itens={ this.state.itens } />
                
                <form onSubmit={ this.formSubmittedHandler }>
                    <input type="text" onChange={ this.inputChangedHandler } value={ this.state.inputValue } />
                    <input type="submit" value="Add TODO"/>
                </form>
            </React.Fragment>
        )        
    }
}