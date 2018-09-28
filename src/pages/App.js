import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Todo from './todo-page/Todo'
import ShoppingCart from './shop-cart/ShoppingCart'
import Pokedex from './pokedex/Pokedex'
import './style.css'

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todo' component={Todo} />
            <Route path='/cart' component={ShoppingCart} />
            <Route path='/pokedex' component={Pokedex} />
        </Switch>
    </React.Fragment>
)

export default App