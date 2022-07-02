import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todos {
  completed: boolean;
  createdAt: string;
  description: string;
  owner: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const initialState = {todos: [] as Todos[], token: '' as string};

const todoAPISlice = createSlice({
  name: 'todosapilist',
  initialState,
  reducers: {
    saveToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    saveTodosList(state, action: PayloadAction<Todos[]>) {
      state.todos = action.payload;
    },
  },
});

export const {saveToken, saveTodosList} = todoAPISlice.actions;

export default todoAPISlice.reducer;
