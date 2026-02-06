import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  const handleClick = (value) => {
    if (value === 'C') {
      setInput("");
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="simple-calculator">
      <div className="screen">{input || "0"}</div>
      <div className="buttons">
        {buttons.map(btn => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
   

 