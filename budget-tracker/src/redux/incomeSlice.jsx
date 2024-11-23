import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeList: [],
};

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.incomeList.push(action.payload);
    },
    //setIncome eklenecek , localStorage yüklemeyi burada yapalım?
  },
});

export default incomeSlice.reducer;
export const { addIncome } = incomeSlice.action;
