import React from 'react'

import Title from '../../components/title/Title'
import TodoList from '../../components/todo-list/TodoList'

const Todo = () => {
    return (
        <div className="todo-list">
            <Title>My React TODO List</Title>            
            <TodoList />
        </div>            
    )
}

export default Todo