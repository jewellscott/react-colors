import './App.css';
import { useState } from 'react';
function App() {

  const [color, setColor ] = useState("#FFFFFF");

  let changeColor = ({ value }) => {
    setColor(value);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <h1>React Colors</h1>
        <p>Enter a hex code in the input form below to color the box!</p>
        <main>
          <form>
              <input type="text" value={color} onChange={changeColor} placeholder="#FFFFFF" minlength="3" maxlength="7" />
          </form>
          <p>{color}</p>
        <div className="colored" style={{ backgroundColor: color }}></div>
        </main>
      </header>
      </div>
    </div>
  );
}

export default App;
