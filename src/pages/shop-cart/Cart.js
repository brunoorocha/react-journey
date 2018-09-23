import React from 'react'
import { CartContextProvider } from './CartContext'
import Title from '../../components/title/Title'

const Cart = (props) => (
    <CartContextProvider>
        <Title>My React Shopping Cart</Title>
    </CartContextProvider>
)

export default Cart