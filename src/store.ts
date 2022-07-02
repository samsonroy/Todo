import {configureStore} from '@reduxjs/toolkit';
import todoAPISlice from './features/ToDoApiList/TodoApiList';
import todosReducer from './features/ToDoList/ToDoSlice';

export const store = configureStore({
  reducer: {todos: todosReducer, todosList: todoAPISlice},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
