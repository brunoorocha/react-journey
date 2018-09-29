import React from 'react'
import ProgressBar from '../progress-bar/ProgressBar'
import Row from '../grid/Row'
import Col from '../grid/Col'

export default (props) => {
  return (
    <div className="pokemon-info_stats">
        <Row>
            <Col>
                <label className="pokemon-info_stats-name">{ props.name }</label>
            </Col>
            <Col>
                <ProgressBar value={ props.value } />
            </Col>
            <Col>
                <label className="pokemon-info_stats-count">{ props.value }</label>
            </Col>
        </Row>
    </div>
  )
}
