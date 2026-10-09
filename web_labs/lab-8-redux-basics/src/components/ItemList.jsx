
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../actions/itemActions';

function ItemList() {
  const [newItem, setNewItem] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = (event) => {
    event.preventDefault();

    const trimmedItem = newItem.trim();

    if (!trimmedItem) return;

    dispatch(addItem(trimmedItem));
    setNewItem('');
  };

  return (
    <section className="item-card">
      <h2>Список элементов Redux</h2>

      <form onSubmit={handleAddItem} className="item-form">
        <input
          type="text"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Введите название элемента"
          aria-label="Название нового элемента"
        />
        <button type="submit">Добавить</button>
      </form>

      {items.length === 0 ? (
        <p className="empty-message">Список пока пуст. Добавьте первый элемент!</p>
      ) : (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>
              <span>{item}</span>
              <button
                type="button"
                className="delete-button"
                onClick={() => dispatch(removeItem(index))}
                aria-label={`Удалить ${item}`}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="item-count">Всего элементов: {items.length}</p>
    </section>
  );
}

export default ItemList;

