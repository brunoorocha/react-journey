import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Todo from './todo-page/Todo'

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todo' component={Todo} />
        </Switch>
    </React.Fragment>
)

export default App