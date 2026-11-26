
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <main className="app">
      <h1>Мій список справ</h1>
      <p className="subtitle">
        Плануйте завдання та відстежуйте їх виконання
      </p>

      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
