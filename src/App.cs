:root {
  color: white;
  font-size: 16px;
  overflow: hidden;
}

main {
  height: 100vh;
  max-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.controls button {
  grid-column: span 3;
}

label {
  text-align: right;
}

input {
  cursor: pointer;
  min-width: 0;
}

input[type="color"] {
	-webkit-appearance: none;
	border: none;
	height: 20px;
  margin-left: 2px;
  border-radius: 6px;
  width: calc(100% - 4px);
  min-width: 0;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 1px 0;
}
input[type="color"]::-webkit-color-swatch {
	border: none;
  border-radius: 4px;
}

div.connectorsWrapper {
  position: absolute;
  height: 100vh;
  max-height: -webkit-fill-available;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

button.mobileButton {
  padding: 12px;
}

button {
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  color: white;
  background: #3C445C;
  border: none;
  border-radius: 8px;
  margin-top: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: all 100ms ease;
}

@media (hover) {
  button:hover {
    background: #4E5569;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  button:active {
    background: #3C445C;
  }
}
