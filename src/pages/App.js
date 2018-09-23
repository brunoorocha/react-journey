import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Todo from './todo-page/Todo'
import Cart from './shop-cart/Cart'
import './style.css'

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todo' component={Todo} />
            <Route path='/cart' component={Cart} />
        </Switch>
    </React.Fragment>
)

export default App