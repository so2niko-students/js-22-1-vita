import logo from "./logo.svg";
import "./App.css";

function App() {
  function serverStatus() {
    const currentTime = new Date().toLocaleTimeString();

    fetch("http://localhost:3000/hello")
      .then((x) => x.text())
      .then((y) => {
        if (y === "Hello world") {
          console.log(`[${currentTime}]: server is online`);
        } else {
          console.log(`[${currentTime}]: server is offline'`);
        }
      });
  }

  setInterval(serverStatus, 10000);

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
