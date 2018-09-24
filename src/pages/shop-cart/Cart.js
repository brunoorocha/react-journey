import React from 'react'
import { CartContextProvider } from './CartContext'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import Row from '../../components/grid/Row'
import Col from '../../components/grid/Col'

const Cart = (props) => (
    <CartContextProvider>
        <Row>
            <Col>
                <Title>My React Shopping Cart</Title>
            </Col>            
        </Row>
        <Row>
            <Col>
                <Subtitle>Grid Colunm 1</Subtitle>
            </Col>            
            <Col>
                <Subtitle>Grid Colunm 2</Subtitle>
            </Col>   
            <Col>
                <Subtitle>Grid Colunm 3</Subtitle>
            </Col>            
        </Row>
    </CartContextProvider>
)

export default Cart