import React from 'react'

import Title from '../../components/title/Title'
import TodoList from '../../components/todo-list/TodoList'

class Todo extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Title>My React TODO List</Title>            
                <TodoList />
            </React.Fragment>            
        )
    }
}

export default Todo