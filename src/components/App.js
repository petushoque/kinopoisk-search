import './App.css';
import * as api from '../utils/api';

function App() {

  const test = () => {
    api.searchByName('love').then((res) => console.log(res))
  }

  test()

  return (
    <div className="App">
      <header className="App-header">
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
