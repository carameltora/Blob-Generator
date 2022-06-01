import * as React from 'react';
import './App.css';
import CellRow from './CellRow.jsx'
import ConnectorRow from './ConnectorRow.jsx'
import { saveAs } from 'file-saver'
import domtoimage from 'dom-to-image';
import { isMobile } from 'react-device-detect';

function App() {
  const [columns, setColumns] = React.useState(5)
  const [rows, setRows] = React.useState(5)
  const [size, setSize] = React.useState(85)
  const [borderRadius, setBorderRadius] = React.useState(50)
  const [color, setColor] = React.useState('#6CD97E')
  const [backgroundColor, setBackgroundColor] = React.useState('#0F1726')
  const [connectionProbability, setConnectionProbability] = React.useState(20)
  const [slantInfluence, setSlantInfluence] = React.useState(0)
  const [gridScale, setGridScale] = React.useState(1)
  const [update, setUpdate] = React.useState(true)
  
  // set initial hash back to 
	React.useEffect(() => {
		// parse the hash
		if(location.hash) {
			const params = location.hash.slice(1).split('-')
			setColumns(params[0])
			setRows(params[1])
			setSize(params[2])
			setBorderRadius(params[3])
			setColor(params[4])
			setBackgroundColor(params[5])
			setConnectionProbability(params[6])
			setSlantInfluence(params[7])
			setGridScale(params[8])
		}
	}, [])

	function generateHashData(params) {
		return params.join('-')
	}

  const downloadImage = () => {
    setIsButtonLoading(true)
    domtoimage.toBlob(document.getElementById('main-content'))
    .then(function (blob) {
      saveAs(blob, 'blobs.png')
    }).then(function () {
      setIsButtonLoading(false)
    })
  }

	// Set the hash after each state var changes
	React.useEffect(() => {
		location.hash = generateHashData([columns,rows, size,borderRadius, color, backgroundColor, connectionProbability, slantInfluence, gridScale]);
	}, [columns,rows, size,borderRadius, color, backgroundColor, connectionProbability, slantInfluence, gridScale])

  const controlStyle = {
    position: 'fixed',
    top: '16px',
    right: '16px',
    background: '#1C2333DD',
    backdropFilter: 'blur(8px)',
    border: '1px solid #3C445C',
    padding: '8px 12px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    zIndex: '100',
    boxSizing: 'border-box',
    width: isMobile ? "calc(100% - 32px)" : 320,
    alignItems: "stretch",
    display: 'flex',
    flexDirection: 'column'
  }

  const inputGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'max-content 1fr max-content',
    columnGap: 8,
    rowGap: isMobile ? 12 : 8,
    marginTop: 4
  }

  const showButtonStyle = {
    width: 'auto',
    background: '#1C2333DD',
    border: '1px solid #3C445C',
    padding: '12px',
    borderRadius: '12px 0 0 12px',
    position: 'relative'
  }

 const genButtonStyle = {
    width: 'auto',
    background: '#1C2333DD',
    border: '1px solid #3C445C',
    padding: '12px',
    borderRadius: '12px',
    position: 'relative'
  }

  const hiddenWrapperStyle = {
    top: '12px',
    right: '-4px',
    zIndex: '100',
    position: 'fixed',
    display: 'flex',
    gap: '4px'
  }

  const outputStyle = {
    textAlign: 'right',
    color: 'silver'
  }

  const slantInfluenceFixed = (100 + Number(slantInfluence)) / 200

  function handleColumns() {
    setColumns(document.getElementById('columns').value)
  }

  function handleRows() {
    setRows(document.getElementById('rows').value)
  }

  function handleSize() {
    setSize(document.getElementById('size').value)
  }

  function handleBorderRadius() {
    setBorderRadius(document.getElementById('borderRadius').value)
  }

  function handleColor() {
    setColor(document.getElementById('color').value)
  }

  function handleBackgroundColor() {
    setBackgroundColor(document.getElementById('background').value)
  }

  function handleConnectionProbability() {
    setConnectionProbability(document.getElementById('connectionProbability').value)
  }

  function handleSlantInfluence() {
    setSlantInfluence(document.getElementById('slantInfluence').value)
  }

  function handleGridScale() {
    setGridScale(document.getElementById('gridScale').value)
  }

  const [isButtonLoading, setIsButtonLoading] = React.useState(false);

  const [isShowing, setIsShowing] = React.useState(!isMobile);
  
  const controls = isShowing ?
    <span style={controlStyle}>

      
      
      {!isMobile &&
        <button onClick={downloadImage}>
          {isButtonLoading ? 'Downloading...' : 'Take a screenshot'}
        </button>
      }

      <button onClick={() => setUpdate(!update)} className={isMobile && "mobileButton"}>
        Generate new pattern
      </button>
      
      <button onClick={() => setIsShowing(false)} className={isMobile && "mobileButton"}>
        Hide menu
      </button>

      <div style={inputGridStyle}>

        <label htmlFor='columns'>
          Columns
        </label>
        <input type='range' id='columns' defaultValue={columns} min={2} max={50} onChange={handleColumns} />
        <span style={outputStyle}>{columns}</span>

        <label htmlFor='rows'>
          Rows
        </label>
        <input type='range' id='rows' defaultValue={rows} min={2} max={30} onChange={handleRows} />
        <span style={outputStyle}>{rows}</span>

        <label htmlFor='size'>
        Size %
        </label>
        <input type='range' id='size' defaultValue={size} min={65} max={100} onChange={handleSize} />
        <span style={outputStyle}>{size}</span>

        <label htmlFor='borderRadius'>
        Border radius %
        </label>
        <input type='range' id='borderRadius' defaultValue={borderRadius} min={0} max={50} onChange={handleBorderRadius} />
        <span style={outputStyle}>{borderRadius}</span>

        <label htmlFor='color'>
        Color
        </label>
        <input type='color' id='color' defaultValue={color} onChange={handleColor}/>
        <span></span>

        <label htmlFor='background'>
        Background
        </label>
        <input type='color' id='background' defaultValue={backgroundColor} onChange={handleBackgroundColor}/>
        <span></span>

        <label htmlFor='connectionProbability'>
        Link probability
        </label>
        <input type='range' id='connectionProbability' defaultValue={connectionProbability} min={0} max={100} onChange={handleConnectionProbability} />
        <span style={outputStyle}>{connectionProbability}</span>

        <label htmlFor='slantInfluence'>
        Slant influence
        </label>
        <input type='range' id='slantInfluence' defaultValue={slantInfluence} min={-100} max={100} onChange={handleSlantInfluence} />
        <span style={outputStyle}>{slantInfluence}</span>

        <label htmlFor='gridScale'>
        Grid scale
        </label>
        <input type='range' id='gridScale' defaultValue={gridScale} min={1} max={10} onChange={handleGridScale} />
        <span style={outputStyle}>{gridScale}</span>

      </div>
      
      {isMobile &&
        <p
          style={{color: '#BBB', width: '100%', textAlign: 'center'}}
        >
          View on desktop to download a screenshot!
        </p>
      }
    </span>
    :
    <div style={hiddenWrapperStyle}>
      <button onClick={() => setUpdate(!update)} style={genButtonStyle} >
        Generate
      </button>
     <button style={showButtonStyle} onClick={() => setIsShowing(true)} >
       ←
    </button>
    </div>
  
  let cellRows = []
  for (let i = 0; i < rows; i++) {
    cellRows.push(
      <CellRow
        columns={columns}
        size={size}
        color={color}
        borderRadius={borderRadius}
      />
    )
  }

  const connectorRows = React.useMemo(() => {
    return addConnectorRows(rows, columns, size, color, backgroundColor, borderRadius, connectionProbability, slantInfluenceFixed)
  }, [columns, rows, size, color, backgroundColor, borderRadius, connectionProbability, slantInfluence, update])

  function addConnectorRows(rows, columns, size, color, backgroundColor, borderRadius, connectionProbability, slantInfluenceFixed) {
    let rowArray = []
    for (let x = 0; x < (rows - 1); x++) {
      rowArray.push(
        <ConnectorRow
          columns={columns - 1}
          size={size}
          color={color}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          connectionProbability={connectionProbability}
          slantInfluence={slantInfluenceFixed}
        />
      )
    }
    return rowArray
  }
  
  return (
    <div>
      {controls}
      <div
        id="main-content"
        style={{
          transform: 'scale(' + gridScale + ')'
        }}
      >
        <div className='connectorsWrapper'>
          {connectorRows}
        </div>
        <main style={{backgroundColor: backgroundColor}}>
          {cellRows}
        </main>
      </div>
    </div>
  );
}

export default App;
