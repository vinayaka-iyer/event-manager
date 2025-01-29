import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forms: [],
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = {};
    },
    addEvent: (state,action) =>{
      state.forms.append(action.payload);
    }
  },
});

export const { updateFormData, resetFormData, addEvent } = formSlice.actions;
export const selectAllEvents = (state) => state.form.forms;
export default formSlice.reducer;
