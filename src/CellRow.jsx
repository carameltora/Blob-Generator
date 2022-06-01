import * as React from 'react'
import Cell from './Cell.jsx'

const CellRow = (props) => {
  
  let cells = []
  for (let i = 0; i < props.columns; i++) {
    cells.push(
      <Cell
        size={props.size}
        color={props.color}
        borderRadius={props.borderRadius}
      />
    )
  }
  
  return(
    <div style={{
      display: 'flex'
    }}>
      {cells}
    </div>
  )
}

export default CellRow
