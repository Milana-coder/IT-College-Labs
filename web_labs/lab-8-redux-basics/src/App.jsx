
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">Лабораторна робота №8</p>
        <h1>Основи Redux</h1>
        <p className="subtitle">
          Store, Action, Reducer — керування станом у React
        </p>
      </header>

      <ItemList />

      <footer className="app-footer">
        React · Redux · React-Redux
      </footer>
    </main>
  );
}

export default App;

