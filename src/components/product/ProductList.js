import React, { Component } from 'react'
import Product from './Product'
import Button from '../button/Button'
import { CartContextConsumer } from '../../pages/shop-cart/CartContext'

export class ProductList extends Component {

  state = {
    items: [
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
      {
        name: 'Macbook Pro 15\'',
        price: 2399.00
      },
      {
        name: 'iPad',
        price: 329.00        
      }
    ]
  }

  addItemToCart(item) {
    console.log("Add " + item.name + " on cart.");  
  }

  render() {
    return (
      <div className="product-list">        
        <CartContextConsumer>
          { context => (
            this.state.items.map( (item, index) => {          
              let addButton = <Button onClickHandler={ (event) => context.addItem(item) }>Add to Cart</Button>
              return (<Product key={ index } item={ item } actionButton={ addButton } />)
            }))
          }
        </CartContextConsumer>                      
      </div>
    )
  }
}

export default ProductList
