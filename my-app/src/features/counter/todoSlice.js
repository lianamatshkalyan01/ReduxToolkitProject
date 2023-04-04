import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  addTodo:(state, action)=>{
    state.value.push(action.payload)
  },
  removeTodo:(state,action)=>{
  state.value.splice(action.payload,1)
  },
  editTodo:(state, action)=>{
    const { index, value } = action.payload;
    state.value[index].value = value; 
  }
  },
});

export const {addTodo, editTodo, removeTodo } = todosSlice.actions;
export const selectTodos = (state) => state.todos.value;
export default todosSlice.reducer;
