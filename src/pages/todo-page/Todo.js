import React from 'react'

import Title from '../../components/title/Title'
import TodoList from '../../components/todo-list/TodoList'

const Todo = () => {
    return (
        <React.Fragment>
            <Title>My React TODO List</Title>            
            <TodoList />
        </React.Fragment>            
    )
}

export default Todo