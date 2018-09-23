import React, { Component } from 'react'

const CartContext = React.createContext('cart')

export class CartContextProvider extends Component {

    state = {
        itens: []
    }

    constructor(props) {
        super(props)

        this.addItem = this.addItem.bind(this)
    }

    addItem = (item) => {
        let itens = this.state.itens.slice()        

        this.setState({
            itens: itens.concat(item)
        })
    }

    removeItemAtIndex = (index) => {
        let itens = this.state.itens.slice()
        itens.splice(index, 1)

        this.setState({
            itens: itens
        })
    }

    render() {
        return (
            <CartContext.Provider>
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