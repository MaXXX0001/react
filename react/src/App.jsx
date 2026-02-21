import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from './Counter.jsx';
import { List } from './List.jsx';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <List />
      </div>
      <h1>Vite + React 222</h1>
      <Counter />
    </>
  );
}

export default App;
