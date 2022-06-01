import React from 'react'

const Connector = (props) => {

  const show = (Math.random() < props.connectionProbability/100) ? true : false
  if (!show) return (
    <svg width='32' height='32' />
  )

  const cellSize = props.size * 0.32
  const gapSize = 32 - cellSize
  const rectSize = gapSize * 2 + 32
  const rotation = (Math.random() > props.slantInfluence) ? 0 : 90
  
  return (
    <svg width='32' height='32' style={{transform: 'rotate('+rotation+'deg)'}}>
      <rect width='100%' height='100%' fill={props.color}/>
      <rect
        width={rectSize}
        height={rectSize}
        rx={(props.borderRadius * cellSize / 100) + (gapSize / 2)}
        stroke={props.backgroundColor}
        strokeWidth={gapSize}
        fill='none'
        x='16'
        y='16'
      />
      <rect
        width={rectSize}
        height={rectSize}
        rx={(props.borderRadius * cellSize / 100) + (gapSize / 2)}
        stroke={props.backgroundColor}
        strokeWidth={gapSize}
        fill='none'
        x={16-rectSize}
        y={16-rectSize}
      />
      
    </svg>
  )
}

export default Connector
