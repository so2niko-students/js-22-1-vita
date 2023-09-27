import React, { useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";


function App() {
  function serverStatus() {
    fetch("http://localhost:3000/hello")
      .then((x) => x.text())
      .then((y) => {
        const currentTime = new Date().toLocaleTimeString();
        if (y === "Hello World!") {
          console.log(`[${currentTime}]: server is online`);
        } else {
          console.log(`[${currentTime}]: server is offline`);
        }
      });
  }

  useEffect(() => {
    const intervalId = setInterval(serverStatus, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
