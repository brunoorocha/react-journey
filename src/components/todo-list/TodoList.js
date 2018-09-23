
import React from 'react'
import { TodoContextProvider, TodoContextConsumer } from './TodoContextProvider'
import BulletList from '../bullet-list/BulletList'
import TodoCreator from './TodoCreator'
import './style.css'

const TodoList = (props) => (            
    <TodoContextProvider>
        <TodoContextConsumer>
            { context => (
                <React.Fragment>
                    <BulletList itens={ context.itens } removeItemHandler={ context.removeItemAtIndex } />
                    <TodoCreator addItemHandler={ context.addItem } />
                </React.Fragment>
            )}         
        </TodoContextConsumer>                                                        
    </TodoContextProvider>         
)        

export default TodoList
