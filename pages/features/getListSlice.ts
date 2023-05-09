import { createSlice } from "@reduxjs/toolkit";

export const getListSlice = createSlice({
  name: "getList",
  initialState: {
    value: [],
  },
  reducers: {
    get: (state) => {
      fetch("../../api/hello", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          state.value = data;
          console.log(data);
        });
    },
  },
});

export const { get } = getListSlice.actions;
export default getListSlice.reducer;
