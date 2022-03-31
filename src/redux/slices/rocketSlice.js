import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
 id: ''
};
const rocketSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.id = action.payload;
    }
  },
});
export const { updateId } = rocketSlice.actions;
export default rocketSlice.reducer;