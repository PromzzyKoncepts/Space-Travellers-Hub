// import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH = 'redux/RocketScreen/rocketscreen/FETCH';
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(FETCH,
  async () => fetch(url).then((res) => res.json()));
const postSlice = createSlice(({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.loading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [fetchRockets.rejected]: (state) => {
      state.loading = false;
    },
  },
}));
export default postSlice.reducer;
