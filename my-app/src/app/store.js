import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/counter/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
