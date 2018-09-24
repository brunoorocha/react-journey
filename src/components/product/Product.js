import React, { Component } from 'react'
import Row from '../grid/Row'
import Col from '../grid/Col'
import './style.css'

export class Product extends Component {

  state = {
    itens: [
      {
        name: 'iPhone XS',
        price: 999.00
      },
      {
        name: 'iPhone XS MAX',
        price: 1099.00
      },
      {
        name: 'Apple Watch Series 4',
        price: 399.00
      },
    ]
  }

  render() {
    return (
      <div>
        { this.state.itens.map( (item, index) => (
            <div className="product" key={ index }>
              <Row>
                <Col>
                  <p className="product__name">{ item.name }</p>
                  <p className="product__price">U$ { item.price }</p>
                </Col>        
      
                <Col alignItens="center" justifyContent="end"> 
                  <button className="product__add-to-cart-button">Add To Cart</button>          
                </Col>        
              </Row>
            </div>
        ))}    
      </div>      
    )
  }
}

export default Product
