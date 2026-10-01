# Лабораторна робота №6 — Redux та Redux DevTools

## Тема

Налаштування Redux у React-проєкті та налагодження роботи застосунку за допомогою Redux DevTools.

## Мета роботи

Закріпити практичні навички роботи з Redux у React-проєкті: створення Store, Slice та підключення Redux до React. Навчитися використовувати Redux DevTools для перегляду дій та змін глобального стану застосунку.

## Використані технології

- React
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- Redux DevTools
- Git
- GitHub

## Структура проєкту

```text
lab-6-redux-devtools/
├── public/
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── store/
│   │   ├── counterSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Реалізація Redux

Для керування глобальним станом використано **Redux Toolkit**.

### Redux Slice

Для лічильника створено `counterSlice.js` з початковим станом:

```js
const initialState = {
  count: 0,
};
```

У slice реалізовано три дії:

- `increment` — збільшення лічильника на 1;
- `decrement` — зменшення лічильника на 1;
- `reset` — скидання лічильника до 0.

### Redux Store

У файлі `store.js` створено Redux Store за допомогою `configureStore`:

```js
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: import.meta.env.DEV,
});
```

Redux Store підключено до React-застосунку за допомогою компонента `Provider`.

## Компонент Counter

У компоненті `Counter.jsx` використано:

- `useSelector` — для отримання значення `count` із Redux Store;
- `useDispatch` — для відправлення Redux actions.

Отримання поточного значення:

```js
const count = useSelector((state) => state.counter.count);
```

Створення dispatch:

```js
const dispatch = useDispatch();
```

Кнопки виконують такі операції:

| Кнопка | Дія |
|---|---|
| `−` | Зменшення лічильника |
| `+` | Збільшення лічильника |
| `Скинути` | Повернення значення до `0` |

## Підключення Redux до React

Redux Store підключено до React-застосунку через `Provider`:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

## Перевірка роботи Redux DevTools

Для налагодження застосунку встановлено розширення **Redux DevTools**.

Після натискання кнопок у застосунку в DevTools відображаються відповідні Redux actions:

```text
@@INIT
counter/increment
counter/decrement
counter/reset
```

Також було перевірено зміни глобального стану.

Наприклад, після виконання дії `counter/reset` значення змінюється:

```text
count: 1 → 0
```

Таким чином, за допомогою Redux DevTools можна переглядати виконані actions та зміни стану Store.

## Результат роботи

У результаті створено React-застосунок із глобальним Redux-станом.

Реалізовано:

- лічильник;
- збільшення значення;
- зменшення значення;
- скидання значення до нуля;
- підключення Redux Toolkit;
- підключення Redux до React через `Provider`;
- використання `useSelector` та `useDispatch`;
- перегляд Redux actions у Redux DevTools;
- перегляд змін глобального стану.

## Запуск проєкту

Перейти до папки лабораторної роботи:

```bash
cd web_labs/lab-6-redux-devtools
```

Встановити залежності:

```bash
npm install
```

Запустити проєкт:

```bash
npm run dev
```

Після запуску Vite покаже адресу локального сервера, наприклад:

```text
http://localhost:5173/
```

## Висновок

Під час виконання лабораторної роботи було створено React-застосунок із використанням Redux Toolkit. Реалізовано глобальний стан лічильника та дії `increment`, `decrement` і `reset`. Redux підключено до React за допомогою `Provider`, `useSelector` та `useDispatch`.

За допомогою Redux DevTools перевірено виконання Redux actions та зміни глобального стану застосунку.
