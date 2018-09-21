import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,    
    document.getElementById('root')
)
// ReactDOM.render(<Todo />, document.getElementById('todo-root'))
