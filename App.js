import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setCount(c => c + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => {
    setCount(0);
    setRunning(false);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1>⏱️ Stopwatch Counter</h1>
        
        <div className="stopwatch-container">
          <img 
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&h=500&fit=crop" 
            alt="Stopwatch" 
            className="stopwatch-image"
          />
          
          <div className="counter-overlay">
            <div className="counter-display">
              <div className="counter-number">{count}</div>
            </div>
          </div>
          
          {running && (
            <div className="running-indicator">
              <div className="pulse-dot"></div>
            </div>
          )}
        </div>

        <div className="button-container">
          {!running ? (
            <button onClick={start} className="btn-start">
              ▶️ Start
            </button>
          ) : (
            <button onClick={pause} className="btn-pause">
              ⏸️ Pause
            </button>
          )}
          
          <button onClick={increment} className="btn-increment">
            ➕ Increment
          </button>
          
          <button onClick={decrement} className="btn-decrement">
            ➖ Decrement
          </button>
          
          <button onClick={reset} className="btn-reset">
            🔄 Reset
          </button>
        </div>

        <p className="info-text">
          {running ? "Auto-incrementing every second..." : "Click Start to auto-increment or use manual controls"}
        </p>
      </div>
    </div>
  );
}

export default App;