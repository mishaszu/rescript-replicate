import logo from './logo.svg';
import './App.css';
import {test} from './Test.bs.js'

const parser = (arr, plus_v1, plus_v2 = 2) => {
  const {v1, v2} = arr[0];
  console.log(`${v1} ${plus_v1}`, v2 + plus_v2);
}

function App() {
  test("Hello", 1, parser);
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
