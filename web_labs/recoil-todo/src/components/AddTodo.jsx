
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms';

export default function AddTodo() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState('');

  const add = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text.trim(),
        done: false,
      },
    ]);

    setText('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Нова задача..."
        onKeyDown={(e) => e.key === 'Enter' && add()}
      />

      <button onClick={add}>Додати</button>
    </div>
  );
}
