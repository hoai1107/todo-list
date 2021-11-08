import { createAction, createSlice } from "@reduxjs/toolkit";

export const FILTER_LIST = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  INCOMPLETED: 'INCOMPLETED'
};

const initialState = FILTER_LIST.ALL;

export const filterSlice = createSlice({
  name:"filter",
  initialState,
  reducers:{
    toggle: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

export const toggleFilter = createAction('filter/toggle', (filter) => ({
  payload: filter
}))

