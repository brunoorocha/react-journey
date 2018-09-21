
import React from 'react'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import LinkList from '../../components/link-list/LinkList'

class Home extends React.Component {
    
    links = [
        {
            id: 1,
            title: "Todo List",
            url: "/todo"
        },
        {
            id: 2,
            title: "Shopping Cart",
            url: "/cart"
        }
    ]    

    render() {
        return (    
            <React.Fragment>
                <Title>Hello React</Title>
                <Subtitle>This application is a set of little apps made by me in my React Learning Journey.</Subtitle>
                <LinkList itens={ this.links } />
            </React.Fragment>            
        )
    }
}

export default Home