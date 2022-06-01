import * as React from 'react'

const Cell = (props) => {
  const normedSize = props.size * 0.32
  return(
    <svg width='32' height='32'>
      <rect 
        x={16 - normedSize / 2}
        y={16 - normedSize / 2}
        width={normedSize}
        height={normedSize}
        fill={props.color}
        rx={props.borderRadius * normedSize / 100}
      />
    </svg>
  )
}

export default Cell;
