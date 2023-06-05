import { createSlice } from '@reduxjs/toolkit';

const ports = createSlice({
  name: 'counter',
  initialState: {
    data: [],
  },
  reducers: {
    add: (state, action) => {
      // state.data = action.payload.data;
      state.data.push(action.payload)
      console.log(action);
    },
  },
});

export const { add } = ports.actions
export default ports.reducer
