import * as React from 'react'
import Connector from './Connector.jsx'

const ConnectorRow = (props) => {
  
  let connectors = []
  for (let i = 0; i < props.columns; i++) {
    connectors.push(
      <Connector
        size={props.size}
        color={props.color}
        backgroundColor={props.backgroundColor}
        borderRadius={props.borderRadius}
        connectionProbability={props.connectionProbability}
        slantInfluence={props.slantInfluence}
      />
    )
  }
  
  return(
    <div style={{
      display: 'flex'
    }}>
      {connectors}
    </div>
  )
}

export default ConnectorRow
