import React, { Component } from 'react'
import NavigationTitle from './navigation-title/NavigationTitle'
import Row from '../grid/Row'
import Col from '../grid/Col'
import './style.css'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <Row>
            <Col>
                <NavigationTitle>{ this.props.title }</NavigationTitle>        
            </Col>
        </Row>        
      </div>
    )
  }
}
