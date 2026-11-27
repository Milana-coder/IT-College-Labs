
import {
  addProduct,
  removeProduct,
  updateQuantity,
  addUser,
  removeUser,
  updateUser,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
} from './actions.js';

import './style.css';

// Завдання 1. Список покупок
const shoppingActions = [
  addProduct({ id: 1, name: 'Молоко', quantity: 2 }),
  removeProduct(1),
  updateQuantity(1, 5),
];

// Завдання 2. Користувачі
const userActions = [
  addUser({
    id: 1,
    name: 'Олена',
    email: 'olena@example.com',
  }),
  removeUser(1),
  updateUser(1, { email: 'olena.new@example.com' }),
];

// Завдання 3. Todo-список
const todoActions = [
  addTodo({ id: 1, text: 'Вивчити React', completed: false }),
  removeTodo(1),
  toggleTodo(1),
  editTodo(1, 'Вивчити Redux'),
];

// Виведення результатів у консоль
console.log('ЗАВДАННЯ 1. СПИСОК ПОКУПОК');
shoppingActions.forEach(action => console.log(action));

console.log('ЗАВДАННЯ 2. КОРИСТУВАЧІ');
userActions.forEach(action => console.log(action));

console.log('ЗАВДАННЯ 3. TODO-СПИСОК');
todoActions.forEach(action => console.log(action));

// Виведення результатів на сторінку
const root = document.querySelector('#app') || document.querySelector('#root');

if (root) {
  const sections = [
    { title: 'Завдання 1. Список покупок', actions: shoppingActions },
    { title: 'Завдання 2. Управління користувачами', actions: userActions },
    { title: 'Завдання 3. Todo-список', actions: todoActions },
  ];

  root.innerHTML = `
    <main class="container">
      <header class="page-header">
        <span class="subtitle">ЛАБОРАТОРНА РОБОТА</span>
        <h1>Визначення дій (Actions)</h1>
        <p>Генератори дій для управління станом</p>
      </header>

      <div id="results"></div>

      <footer>
        Результати виконання генераторів дій JavaScript
      </footer>
    </main>
  `;

  const results = document.querySelector('#results');

  sections.forEach(section => {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'task-section';

    const heading = document.createElement('h2');
    heading.textContent = section.title;
    sectionElement.appendChild(heading);

    section.actions.forEach((action, index) => {
      const card = document.createElement('article');
      card.className = 'action-card';

      const label = document.createElement('h3');
      label.textContent = `Дія ${index + 1}: ${action.type}`;

      const output = document.createElement('pre');
      output.textContent = JSON.stringify(action, null, 2);

      card.append(label, output);
      sectionElement.appendChild(card);
    });

    results.appendChild(sectionElement);
  });
}
