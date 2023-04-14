import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPictures } from "../api";


const initialState = {
  pictures: [],
  loading: false,
  error: ''
};

export const pictureSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
      console.log('Loading Pictures');
     });
    builder.addCase(init.fulfilled, (state, action) => {
      state.pictures = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error Pictures';
      console.log('Rejected Pictures');
    });
  },
});

export const { actions } = pictureSlice;

export default pictureSlice.reducer;

export const init = createAsyncThunk('pictures/get', async () => {

  return getPictures();
})