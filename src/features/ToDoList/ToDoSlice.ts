import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      // Customize value
      prepare: (description: string) => ({
        payload: {
          id: uuid.v4(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{completed: boolean; id: string}>,
    ) {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const {addTodo, removeTodo, setTodoStatus} = todoSlice.actions;

export default todoSlice.reducer;
