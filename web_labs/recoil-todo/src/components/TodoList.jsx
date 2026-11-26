
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../atoms';
import { incompleteCount } from '../selectors';

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const left = useRecoilValue(incompleteCount);

  const toggle = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <div className="todo-list">
      <p className="counter">Невиконаних завдань: {left}</p>

      {todos.length === 0 ? (
        <p>Поки що завдань немає. Додайте перше!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggle(todo.id)}
                />
                <span className={todo.done ? 'completed' : ''}>
                  {todo.text}
                </span>
              </label>
              <button onClick={() => remove(todo.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={clearCompleted}>
        Очистити виконані
      </button>
    </div>
  );
}
