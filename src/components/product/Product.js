import React, { Component } from 'react'
import Row from '../grid/Row'
import Col from '../grid/Col'
import './style.css'

export class Product extends Component {

  render() {
    return (
      <div className="product" key={ this.props.index }>
        <Row>
          <Col>
            <p className="product__name">{ this.props.item.name }</p>
            <p className="product__price">${ this.props.item.price }</p>
          </Col>        

          <Col alignItens="center" justifyContent="end"> 
            { this.props.actionButton }
          </Col>        
        </Row>
      </div>        
    )
  }
}

export default Product
