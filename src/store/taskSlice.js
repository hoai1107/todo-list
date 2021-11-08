import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title,deadline = new Date().toISOString()) => ({
  id: nanoid(),
  title,
  completed: false,
  deadline
});

const initialState = [];

export const taskSlice = createSlice({
  name:'tasks',
  initialState,
  reducers:{
    add: (state, action) => {
      const task = createTask(action.payload.title, action.payload.deadline);
      return [...state, task];
    },
    toggle: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);
      task.completed = action.payload.completed;
    },
    delete: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    edit: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].deadline = action.payload.deadline;
    }
  }
});


export const addTask = createAction('tasks/add', (title, deadline) => ({
  payload: {title, deadline}
}));

export const toggleCompleted = createAction('tasks/toggle', (id, completed) => ({
  payload: {id, completed}
}));

export const deleteTask = createAction('tasks/delete', (id) => ({
  payload: id
}));

export const editTask = createAction('tasks/edit', (id, title, deadline) => ({
  payload: {id, title, deadline}
}))





