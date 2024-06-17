import { createSlice } from "@reduxjs/toolkit";

const initUiState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotififcation(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
