import React, { Component } from 'react'

const CartContext = React.createContext('cart')

export class CartContextProvider extends Component {

    state = {
        items: [
            {
                name: 'iPhone XS',
                price: 999.00
            },
        ]
    }         

    addItem = (item) => {
        let items = this.state.items.slice()        
        items = items.concat(item)

        this.setState({
            items: items
        })    
        
    }

    removeItemAtIndex = (index) => {
        let items = this.state.items.slice()
        items.splice(index, 1)

        this.setState({
            items: items
        })                        
    }

    render() {
        return (
            <CartContext.Provider value={{
                items: this.state.items,
                addItem: (item) => this.addItem(item),
                removeItemAtIndex: (index) => this.removeItemAtIndex(index)
            }}>
                { this.props.children }
            </CartContext.Provider>
        )
    }
}

export class CartContextConsumer extends Component {
    render() {
        return (
            <CartContext.Consumer>
                { this.props.children }
            </CartContext.Consumer>
        )
    }
}