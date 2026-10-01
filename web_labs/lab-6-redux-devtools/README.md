Лабораторна робота №6 — Redux та Redux DevTools

Тема

Розробка React-застосунку з використанням Redux Toolkit та Redux DevTools.

Мета роботи

Навчитися:

створювати глобальний стан застосунку за допомогою Redux Toolkit;

створювати Redux slice та actions;

підключати Redux Store до React-застосунку;

використовувати useSelector та useDispatch;

працювати з Redux DevTools для перегляду дій та стану застосунку.

Використані технології

React

Vite

JavaScript

Redux Toolkit

React Redux

Redux DevTools

Git та GitHub

Структура проєкту

lab-6-redux-devtools/
├── src/
│ ├── components/
│ │ └── Counter.jsx
│ ├── store/
│ │ ├── counterSlice.js
│ │ └── store.js
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md

Реалізація Redux

Для роботи зі станом створено counterSlice.js.

У ньому визначено початковий стан:

const initialState = {
count: 0,
};

Також створено три дії:

increment — збільшує значення лічильника на 1;

decrement — зменшує значення лічильника на 1;

reset — повертає значення до 0.

Redux Store

У файлі store.js створено Redux Store за допомогою configureStore.

Store містить reducer:

const store = configureStore({
reducer: {
counter: counterReducer,
},
});

Redux Store підключено до React-застосунку через компонент Provider.

Компонент Counter

Компонент Counter.jsx отримує значення з Redux Store за допомогою:

const count = useSelector((state) => state.counter.count);

Для виконання дій використовується:

const dispatch = useDispatch();

Кнопки виконують такі операції:

− зменшення значення

-        збільшення значення
  Скинути повернення до 0

Redux DevTools

Для перевірки роботи Redux було використано розширення Redux DevTools.

Після виконання дій у застосунку в DevTools відображаються відповідні Redux actions:

@@INIT
counter/increment
counter/decrement
counter/reset

Також Redux DevTools дозволяє переглядати поточний стан Store та зміни стану після виконання кожної дії.

Результат роботи

У результаті створено React-застосунок із глобальним Redux-станом.

Реалізовано:

лічильник;

збільшення значення;

зменшення значення;

скидання значення;

підключення Redux Toolkit;

підключення Redux DevTools;

перегляд Redux actions та змін стану.

Запуск проєкту

Відкрити термінал у папці лабораторної роботи та виконати:

npm install
npm run dev

Після запуску відкрити адресу, яку покаже Vite, наприклад:

http://localhost:5173/

Висновок

Під час виконання лабораторної роботи було створено React-застосунок із використанням Redux Toolkit. Було реалізовано глобальний стан лічильника, Redux actions та reducer. Також було підключено Redux DevTools для перегляду дій та змін стану застосунку.
