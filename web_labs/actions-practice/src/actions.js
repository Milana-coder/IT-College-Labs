
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: id,
});

export const updateUser = (id, updatedFields) => ({
  type: UPDATE_USER,
  payload: { id, updatedFields },
});

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});
