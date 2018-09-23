
import React from 'react'
import { TodoContextProvider, TodoContextConsumer } from './TodoContextProvider'
import BulletList from '../bullet-list/BulletList'
import TodoCreator from './TodoCreator'
import './style.css'

export default class TodoList extends React.Component {    

    render() {
        return (            
            <TodoContextProvider>
                <TodoContextConsumer>
                    { value => (
                        <React.Fragment>
                            <BulletList itens={ value.itens } removeItemHandler={ value.removeItemAtIndex } />
                            <TodoCreator addItemHandler={ value.addItem } />
                        </React.Fragment>
                    )}         
                </TodoContextConsumer>                                                        
            </TodoContextProvider>         
        )        
    }
}