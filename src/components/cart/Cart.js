import React, { Component } from 'react'
import Row from '../grid/Row'
import Col from '../grid/Col'
import Subtitle from '../subtitle/Subtitle'
import Product from '../product/Product'
import Button from '../button/Button'
import './style.css'

export class Cart extends Component {
  
  constructor(props) {
    super(props)
  
    this.getTotalPrice = this.getTotalPrice.bind(this)    
  }    

  getTotalPrice = () => {
     
    if (this.props.items.length > 0) {
      let prices = this.props.items.map( (item) => item.price )    
      return prices.reduce( (total, price) => ( total + price ))      
    }
      
    return 0
  }      

  render() {
    return (
      <div className="cart">
        <Row>
          <Col>
            <Subtitle>Your Cart</Subtitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              { this.props.items.map( (item, index) => {          
                let removeButton = <Button className="button--red" onClickHandler={ (event) => this.props.removeItemHandler(index) }>Remove</Button>
                return (<Product key={ index } item={ item } actionButton={ removeButton } />)
              })} 

              {
                this.props.items.length === 0 && <Subtitle>Your cart is empty :(</Subtitle>
              }
            </div>
          </Col>          
        </Row>
        <Row>
          <Col>
            <p className="total-price">Total: ${ this.getTotalPrice() }</p>
          </Col>
        </Row>
      </div>      
    )
  }
}

export default Cart
