
import React from 'react'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import LinkList from '../../components/link-list/LinkList'
import Row from '../../components/grid/Row'
import Col from '../../components/grid/Col'
import './style.css'

const links = [
    {
        id: 1,
        title: "Todo List",
        url: "/todo"
    },
    {
        id: 2,
        title: "Shopping Cart",
        url: "/cart"
    },
    {
        id: 3,
        title: "Pokedex",
        url: "/pokedex"
    }
]    

const Home = (props) => (    
    <div className="home">
        <Row>
            <Col>
                <Title>Hello React</Title>
                <Subtitle>This application is a set of little apps made by me in my React Learning Journey.</Subtitle>
                <LinkList itens={ links } />
            </Col>
        </Row>
    </div>            
)

export default Home