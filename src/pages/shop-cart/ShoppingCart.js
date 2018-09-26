import React from 'react'
import { CartContextProvider, CartContextConsumer } from './CartContext'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import Row from '../../components/grid/Row'
import Col from '../../components/grid/Col'
import Cart from '../../components/cart/Cart'
import ProductList from '../../components/product/ProductList'

const ShoppingCart = (props) => (
    <CartContextProvider>
        <Row>
            <Col>
                <Title>My React Shopping Cart</Title>
            </Col>            
        </Row>
        <Row>
            <Col>
                <Subtitle>Select some itens for your cart</Subtitle>
            </Col>                                  
        </Row>
        <Row>
            <Col>
                <ProductList />
            </Col>          
            <Col>
                <CartContextConsumer>
                    { context => (
                        <Cart items={ context.items } removeItemHandler={ context.removeItemAtIndex } />
                    )}
                </CartContextConsumer>                 
            </Col>  
        </Row>        
    </CartContextProvider>
)

export default ShoppingCart