
import React from 'react'

const TodoContext = React.createContext('itens')

export class TodoContextProvider extends React.Component {

    state = {
        itens: ['Warm Up', 'Handles Workout', 'Shooting Training'],
    }

    addItem = (item) => {    
        let itens = this.state.itens.slice()
        itens = itens.concat(item)

        this.setState({
            itens: itens
        })                               
    }

    removeItemAtIndex = (index) => {    
        const itens = this.state.itens.slice()        
        itens.splice(index, 1)        
        
        this.setState({
            itens: itens
        })                
    }

    render() {
        return (
            <TodoContext.Provider value={{
                itens: this.state.itens,
                addItem: (item) => this.addItem(item),
                removeItemAtIndex: (index) => this.removeItemAtIndex(index)
            }}>
                { this.props.children }                
            </TodoContext.Provider>
        )
    }
}

export class TodoContextConsumer extends React.Component {

    render() {
        return (
            <TodoContext.Consumer>                                
                { this.props.children }
            </TodoContext.Consumer>
        )
    }
}